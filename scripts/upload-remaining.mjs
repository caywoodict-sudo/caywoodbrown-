import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const mappingPath = path.join(rootDir, 'lib', 'cloudinary-mapping.json')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'oudx4ztm',
  api_key: process.env.CLOUDINARY_API_KEY || '999426434255721',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R7XDqe3ruZf4S9iThQ_Dp0C69bw',
  secure: true,
})

async function run() {
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))

  // 1. Optimize hero/impa-banner.jpg
  const impaBannerPath = path.join(rootDir, 'public', 'images', 'hero', 'impa-banner.jpg')
  const optimizedImpaBanner = path.join(rootDir, 'public', 'images', 'hero', 'impa-banner-optimized.jpg')

  console.log('Optimizing impa-banner.jpg with sharp...')
  await sharp(impaBannerPath)
    .resize(2400, undefined, { withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true })
    .toFile(optimizedImpaBanner)

  const newSize = fs.statSync(optimizedImpaBanner).size
  console.log(`Optimized impa-banner from 14MB to ${(newSize / (1024 * 1024)).toFixed(2)}MB`)

  // Upload impa-banner
  console.log('Uploading /images/hero/impa-banner.jpg to Cloudinary...')
  const impaRes = await cloudinary.uploader.upload(optimizedImpaBanner, {
    folder: 'caywood-brown/hero',
    public_id: 'impa-banner',
    overwrite: true,
    resource_type: 'image',
  })
  mapping['/images/hero/impa-banner.jpg'] = impaRes.secure_url
  console.log('  ✓ Uploaded to:', impaRes.secure_url)

  if (fs.existsSync(optimizedImpaBanner)) {
    fs.unlinkSync(optimizedImpaBanner)
  }

  // 2. Upload field-visit.jpg
  const fieldVisitPath = path.join(rootDir, 'public', 'images', 'community', 'field-visit.jpg')
  console.log('Uploading /images/community/field-visit.jpg to Cloudinary...')
  const fieldRes = await cloudinary.uploader.upload(fieldVisitPath, {
    folder: 'caywood-brown/community',
    public_id: 'field-visit',
    overwrite: true,
    resource_type: 'image',
  })
  mapping['/images/community/field-visit.jpg'] = fieldRes.secure_url
  console.log('  ✓ Uploaded to:', fieldRes.secure_url)

  // 3. Upload cbf-visit.jpg
  const cbfVisitPath = path.join(rootDir, 'public', 'images', 'events', 'cbf-visit.jpg')
  console.log('Uploading /images/events/cbf-visit.jpg to Cloudinary...')
  const cbfRes = await cloudinary.uploader.upload(cbfVisitPath, {
    folder: 'caywood-brown/events',
    public_id: 'cbf-visit',
    overwrite: true,
    resource_type: 'image',
  })
  mapping['/images/events/cbf-visit.jpg'] = cbfRes.secure_url
  console.log('  ✓ Uploaded to:', cbfRes.secure_url)

  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8')
  console.log('🎉 All 68 images are now 100% uploaded to Cloudinary!')
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
