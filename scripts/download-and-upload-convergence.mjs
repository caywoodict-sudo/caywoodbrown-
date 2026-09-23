import fs from 'fs'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'oudx4ztm',
  api_key: process.env.CLOUDINARY_API_KEY || '999426434255721',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R7XDqe3ruZf4S9iThQ_Dp0C69bw',
  secure: true,
})

const driveFiles = JSON.parse(fs.readFileSync('lib/drive-nat-files.json', 'utf-8'))
const targetDir = 'public/images/events/national-convergence'
const videosDir = 'public/videos'

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true })

const mappingPath = 'lib/cloudinary-mapping.json'
let mapping = {}
if (fs.existsSync(mappingPath)) {
  try {
    mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
  } catch {}
}

async function run() {
  console.log(`Starting download of ${driveFiles.length} images from Google Drive...`)

  const processedPhotos = []

  for (let i = 0; i < driveFiles.length; i++) {
    const item = driveFiles[i]
    const cleanId = item.id.replace(/-0$/, '')
    const downloadUrl = `https://drive.google.com/thumbnail?id=${cleanId}&sz=w1600`
    const localFile = path.join(targetDir, item.name)
    const localWebPath = `/images/events/national-convergence/${item.name}`

    // Download image if not present
    if (!fs.existsSync(localFile)) {
      try {
        console.log(`[${i + 1}/${driveFiles.length}] Downloading ${item.name}...`)
        const res = await fetch(downloadUrl)
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer())
          fs.writeFileSync(localFile, buffer)
        } else {
          console.warn(`Failed downloading ${item.name}: ${res.status}`)
        }
      } catch (err) {
        console.error(`Download error for ${item.name}:`, err.message)
      }
    }

    // Upload to Cloudinary
    if (fs.existsSync(localFile)) {
      try {
        console.log(`[${i + 1}/${driveFiles.length}] Uploading to Cloudinary: ${item.name}...`)
        const uploadRes = await cloudinary.uploader.upload(localFile, {
          folder: 'caywood-brown/events/national-convergence',
          public_id: item.name.replace(/\.[^/.]+$/, ''),
          overwrite: true,
          resource_type: 'image',
        })
        mapping[localWebPath] = uploadRes.secure_url
        processedPhotos.push({
          name: item.name,
          localPath: localWebPath,
          cloudinaryUrl: uploadRes.secure_url,
          width: uploadRes.width,
          height: uploadRes.height,
        })
        console.log(`   ✅ Live: ${uploadRes.secure_url}`)
      } catch (err) {
        console.error(`Cloudinary upload failed for ${item.name}:`, err.message)
        processedPhotos.push({
          name: item.name,
          localPath: localWebPath,
          cloudinaryUrl: localWebPath,
        })
      }
    }
  }

  // Handle Video
  const videoSrc = "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Video 2026-09-23 at 12.32.37 PM.mp4"
  const videoDest = path.join(videosDir, "national-convergence-health-financing.mp4")
  const videoWebPath = "/videos/national-convergence-health-financing.mp4"

  if (fs.existsSync(videoSrc)) {
    console.log("📹 Copying video to public/videos/...")
    fs.copyFileSync(videoSrc, videoDest)
    console.log("✅ Video copied to", videoDest)

    try {
      console.log("🚀 Uploading video to Cloudinary...")
      const videoRes = await cloudinary.uploader.upload(videoDest, {
        folder: 'caywood-brown/videos',
        public_id: 'national-convergence-health-financing',
        resource_type: 'video',
        overwrite: true,
      })
      mapping[videoWebPath] = videoRes.secure_url
      console.log("✅ Video live on Cloudinary:", videoRes.secure_url)
    } catch (err) {
      console.warn("Cloudinary video upload notice (will use local video):", err.message)
      mapping[videoWebPath] = videoWebPath
    }
  }

  // Save updated mapping
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))
  console.log(`💾 Saved updated Cloudinary mapping with ${Object.keys(mapping).length} entries.`)

  // Save photos list
  fs.writeFileSync('lib/national-convergence-photos.json', JSON.stringify(processedPhotos, null, 2))
  console.log(`💾 Saved ${processedPhotos.length} photos to lib/national-convergence-photos.json`)
}

run().catch((e) => {
  console.error("Fatal error:", e)
  process.exit(1)
})
