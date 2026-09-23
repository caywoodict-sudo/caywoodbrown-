import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const targetDir = path.join(rootDir, 'public', 'images', 'events', 'ssb-tax-breakfast')
const mappingPath = path.join(rootDir, 'lib', 'cloudinary-mapping.json')
const photosJsonPath = path.join(rootDir, 'lib', 'ssb-event-photos.json')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'oudx4ztm',
  api_key: process.env.CLOUDINARY_API_KEY || '999426434255721',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R7XDqe3ruZf4S9iThQ_Dp0C69bw',
  secure: true,
})

const sourceFiles = [
  // Primary feature highlights
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.43 PM.jpeg",
    name: "ssb-banigo-keynote-podium.jpg",
    caption: "Senator Dr. Ipalibo Harry Banigo delivering the keynote address at the SSB Tax Breakfast Technical Session",
    isCover: true,
    tag: "Keynote"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.42 PM.jpeg",
    name: "ssb-vip-dignitaries-seated.jpg",
    caption: "VIP Dignitaries including Senator Banigo, CAPPA leadership, and National Assembly stakeholders",
    isVIP: true,
    tag: "Leadership"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.44 PM.jpeg",
    name: "ssb-session-hall-wide.jpg",
    caption: "Stakeholders and technical delegates deliberating during the breakfast session at Onomo Allure Hotel, Abuja",
    tag: "Plenary"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.50 PM.jpeg",
    name: "ssb-banigo-lead-table.jpg",
    caption: "Senator Dr. Ipalibo Harry Banigo reviewing the SB.713 draft legislation and technical brief",
    tag: "Deliberation"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.41 PM.jpeg",
    name: "ssb-speaker-remarks-podium.jpg",
    caption: "Technical presentation on evidence-based health taxation pathways and non-communicable disease prevention",
    tag: "Presentation"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.37 PM.jpeg",
    name: "ssb-delegate-address.jpg",
    caption: "Delegate addressing the joint technical assembly on domestic health financing opportunities",
    tag: "Remarks"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.40 PM.jpeg",
    name: "ssb-session-deliberations-roundtable.jpg",
    caption: "Multi-stakeholder cross-table dialogue on Sugar-Sweetened Beverages legislative finalisation",
    tag: "Dialogue"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.52 PM.jpeg",
    name: "ssb-delegate-portrait-01.jpg",
    caption: "Public health advocate engaging in technical session consultations",
    tag: "Advocacy"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.45 PM.jpeg",
    name: "ssb-delegate-portrait-02.jpg",
    caption: "Civil society partner reviewing policy brief materials",
    tag: "Stakeholder"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.49 PM.jpeg",
    name: "ssb-delegate-portrait-03.jpg",
    caption: "Health governance expert analyzing domestic revenue mobilization impact",
    tag: "Governance"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.47 PM (2).jpeg",
    name: "ssb-document-review-01.jpg",
    caption: "Delegates reviewing the SB.713 Customs and Excise Tariff amendment clauses",
    tag: "Legislation"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.41 PM (2).jpeg",
    name: "ssb-attendee-registration.jpg",
    caption: "Participant endorsing the technical session communiqué at Onomo Allure Hotel",
    tag: "Communiqué"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.39 PM (1).jpeg",
    name: "ssb-stakeholder-consultation.jpg",
    caption: "Stakeholder contributing to the public health consensus session",
    tag: "Consensus"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.51 PM (3).jpeg",
    name: "ssb-delegate-listening.jpg",
    caption: "Technical committee member during legislative pathway deliberations",
    tag: "Deliberation"
  },
  {
    src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.52 PM (3).jpeg",
    name: "ssb-head-table-discussion.jpg",
    caption: "Senator Banigo and co-convener leadership at the presiding table",
    tag: "Leadership"
  },
  // Additional event records
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.51 PM.jpeg", name: "ssb-gallery-16.jpg", caption: "Technical session proceedings at Onomo Allure Hotel, Abuja", tag: "Session" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.52 PM (1).jpeg", name: "ssb-gallery-17.jpg", caption: "Multi-sectoral participants deliberating on sugar-sweetened beverages taxation", tag: "Dialogue" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.52 PM (2).jpeg", name: "ssb-gallery-18.jpg", caption: "Joint Committee on Health technical session delegates", tag: "Assembly" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.37 PM (1).jpeg", name: "ssb-gallery-19.jpg", caption: "Advocacy delegates engaging on preventative health policy", tag: "Advocacy" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.38 PM (1).jpeg", name: "ssb-gallery-20.jpg", caption: "Presenters outlining evidence from regional SSB tax implementations", tag: "Evidence" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.38 PM (2).jpeg", name: "ssb-gallery-21.jpg", caption: "Discussion on non-communicable disease reduction and fiscal policy", tag: "Fiscal Policy" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.38 PM (3).jpeg", name: "ssb-gallery-22.jpg", caption: "Session participants emphasizing sustainable health financing mechanisms", tag: "Financing" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.38 PM.jpeg", name: "ssb-gallery-23.jpg", caption: "Keynote presentation at the podium during the morning session", tag: "Keynote" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.39 PM (2).jpeg", name: "ssb-gallery-24.jpg", caption: "Participants reviewing technical recommendations for the 10th National Assembly", tag: "Recommendations" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.39 PM.jpeg", name: "ssb-gallery-25.jpg", caption: "Cross-floor Q&A session with public health analysts", tag: "Deliberation" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.40 PM (1).jpeg", name: "ssb-gallery-26.jpg", caption: "Working breakfast discussion among civil society coalitions", tag: "Coalition" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.40 PM (2).jpeg", name: "ssb-gallery-27.jpg", caption: "Policy brief review during the interactive session", tag: "Policy" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.41 PM (1).jpeg", name: "ssb-gallery-28.jpg", caption: "CAPPA and CBF leadership coordinating technical working groups", tag: "Coordination" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.41 PM (3).jpeg", name: "ssb-gallery-29.jpg", caption: "Roundtable participants formulating public health recommendations", tag: "Working Group" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.42 PM (1).jpeg", name: "ssb-gallery-30.jpg", caption: "Conference hall attendees during morning plenary deliberations", tag: "Plenary" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.42 PM (2).jpeg", name: "ssb-gallery-31.jpg", caption: "Health policy analysts and community leaders at the session", tag: "Participants" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.43 PM (1).jpeg", name: "ssb-gallery-32.jpg", caption: "Interactive stakeholder feedback on SB.713 tax thresholds", tag: "Dialogue" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.43 PM (2).jpeg", name: "ssb-gallery-33.jpg", caption: "National Assembly legislative committee advisors in attendance", tag: "Advisors" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.44 PM (1).jpeg", name: "ssb-gallery-34.jpg", caption: "Breakfast session breakout and consensus building", tag: "Consensus" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.46 PM (1).jpeg", name: "ssb-gallery-35.jpg", caption: "Civil society representatives reaffirming commitments to health equity", tag: "Civil Society" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.46 PM (2).jpeg", name: "ssb-gallery-36.jpg", caption: "Healthcare professionals contributing clinical perspectives on diabetes and obesity prevention", tag: "Clinical" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.46 PM (3).jpeg", name: "ssb-gallery-37.jpg", caption: "Technical session members examining domestic revenue earmarks", tag: "Earmarks" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.46 PM.jpeg", name: "ssb-gallery-38.jpg", caption: "Plenary overview during the reading of the breakfast session communiqué", tag: "Plenary" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.47 PM (1).jpeg", name: "ssb-gallery-39.jpg", caption: "Participants reviewing legislative timeline towards SB.713 passage", tag: "Timeline" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.47 PM.jpeg", name: "ssb-gallery-40.jpg", caption: "Closing remarks and multi-stakeholder solidarity photo session", tag: "Closing" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.50 PM (1).jpeg", name: "ssb-gallery-41.jpg", caption: "Senator Dr. Ipalibo Harry Banigo in dialogue with partner conveners", tag: "Partnership" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.51 PM (1).jpeg", name: "ssb-gallery-42.jpg", caption: "Session participants endorsing the final action points", tag: "Action Points" },
  { src: "C:\\Users\\NEWUSER\\Downloads\\caywood\\WhatsApp Image 2026-09-23 at 12.32.51 PM (2).jpeg", name: "ssb-gallery-43.jpg", caption: "CBF & CAPPA co-conveners concluding the technical session", tag: "Co-Conveners" }
]

async function run() {
  console.log(`📁 Ensuring destination folder exists: ${targetDir}`)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  let mapping = {}
  if (fs.existsSync(mappingPath)) {
    try {
      mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
    } catch {}
  }

  const processedPhotos = []

  console.log(`📸 Processing and uploading ${sourceFiles.length} event photos...`)

  for (let i = 0; i < sourceFiles.length; i++) {
    const item = sourceFiles[i]
    const destPath = path.join(targetDir, item.name)
    const localWebPath = `/images/events/ssb-tax-breakfast/${item.name}`

    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, destPath)
      console.log(`[${i + 1}/${sourceFiles.length}] Copied -> ${item.name}`)
    } else {
      console.warn(`[${i + 1}/${sourceFiles.length}] Source not found: ${item.src}`)
      continue
    }

    // Upload to Cloudinary
    try {
      console.log(`   Uploading to Cloudinary: caywood-brown/events/ssb-tax-breakfast/${path.parse(item.name).name}...`)
      const res = await cloudinary.uploader.upload(destPath, {
        folder: 'caywood-brown/events/ssb-tax-breakfast',
        public_id: path.parse(item.name).name,
        overwrite: true,
        resource_type: 'image',
      })

      mapping[localWebPath] = res.secure_url
      processedPhotos.push({
        name: item.name,
        localPath: localWebPath,
        cloudinaryUrl: res.secure_url,
        caption: item.caption,
        tag: item.tag || 'Deliberation',
        isCover: item.isCover || false,
        isVIP: item.isVIP || false,
        width: res.width,
        height: res.height,
      })
      console.log(`   ✅ Live on Cloudinary: ${res.secure_url}`)
    } catch (err) {
      console.error(`   ❌ Cloudinary upload error for ${item.name}:`, err.message)
      // Fallback to local
      processedPhotos.push({
        name: item.name,
        localPath: localWebPath,
        cloudinaryUrl: localWebPath,
        caption: item.caption,
        tag: item.tag || 'Deliberation',
        isCover: item.isCover || false,
        isVIP: item.isVIP || false,
      })
    }
  }

  // Save updated mapping
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8')
  console.log(`💾 Saved updated Cloudinary mapping with ${Object.keys(mapping).length} entries.`)

  // Save photos index for UI
  fs.writeFileSync(photosJsonPath, JSON.stringify(processedPhotos, null, 2), 'utf-8')
  console.log(`💾 Saved photos index to ${photosJsonPath} with ${processedPhotos.length} photos.`)

  console.log('🎉 Done processing and uploading SSB Tax Breakfast Technical Session event!')
}

run().catch((e) => {
  console.error('Fatal error:', e)
  process.exit(1)
})
