import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const imagesDir = path.join(rootDir, 'public', 'images')
const mappingPath = path.join(rootDir, 'lib', 'cloudinary-mapping.json')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'oudx4ztm',
  api_key: process.env.CLOUDINARY_API_KEY || '999426434255721',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R7XDqe3ruZf4S9iThQ_Dp0C69bw',
  secure: true,
})

function getFiles(dir) {
  const subdirs = fs.readdirSync(dir)
  const files = []
  for (const subdir of subdirs) {
    const res = path.resolve(dir, subdir)
    if (fs.statSync(res).isDirectory()) {
      files.push(...getFiles(res))
    } else {
      if (/\.(png|jpe?g|webp|svg)$/i.test(res)) {
        files.push(res)
      }
    }
  }
  return files
}

async function uploadAll() {
  console.log('🚀 Starting Cloudinary image migration...')
  console.log(`Scanning: ${imagesDir}`)
  const files = getFiles(imagesDir)
  console.log(`Found ${files.length} images to migrate.`)

  let mapping = {}
  if (fs.existsSync(mappingPath)) {
    try {
      mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
    } catch {}
  }

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const relativeToPublic = path.relative(path.join(rootDir, 'public'), file).replace(/\\/g, '/')
    const webPath = `/${relativeToPublic}`
    const relativeDir = path.dirname(path.relative(imagesDir, file)).replace(/\\/g, '/')
    const folderName = relativeDir === '.' ? 'caywood-brown' : `caywood-brown/${relativeDir}`
    const fileNameWithoutExt = path.parse(file).name

    console.log(`[${i + 1}/${files.length}] Uploading ${webPath}...`)

    try {
      const result = await cloudinary.uploader.upload(file, {
        folder: folderName,
        public_id: fileNameWithoutExt,
        overwrite: true,
        resource_type: 'auto',
      })
      mapping[webPath] = result.secure_url
      successCount++
      console.log(`  ✓ Uploaded to: ${result.secure_url}`)
    } catch (err) {
      errorCount++
      console.error(`  ✕ Failed to upload ${webPath}:`, err.message)
    }
  }

  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8')
  console.log(`\n🎉 Migration complete!`)
  console.log(`  Successfully uploaded: ${successCount}`)
  console.log(`  Failed: ${errorCount}`)
  console.log(`  Saved mapping to: ${mappingPath}`)
}

uploadAll().catch((err) => {
  console.error('Fatal error during migration:', err)
  process.exit(1)
})
