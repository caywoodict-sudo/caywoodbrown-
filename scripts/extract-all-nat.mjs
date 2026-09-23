import fs from 'fs'

const html = fs.readFileSync('C:\\Users\\NEWUSER\\.gemini\\antigravity\\brain\\992953af-373b-41ff-acaf-239fd6a33c34\\.system_generated\\steps\\796\\content.md', 'utf-8')

// Pattern: aria-label="(NAT_[0-9]+\.jpg)[^"]*".*?ssk='[^:]+:[^:]+:([a-zA-Z0-9_-]{28,40})
const regex = /aria-label="(NAT_[0-9]+\.jpg)[^"]*"[^>]*?ssk='[^']*?:([a-zA-Z0-9_-]{25,40})-/g
let match
const files = []
const seen = new Set()

while ((match = regex.exec(html)) !== null) {
  const name = match[1]
  const id = match[2]
  if (!seen.has(name)) {
    seen.add(name)
    files.push({ name, id, downloadUrl: `https://drive.google.com/uc?id=${id}&export=download` })
  }
}

console.log(`Found ${files.length} unique NAT files with IDs:`)
console.log(files.slice(0, 10))

fs.writeFileSync('lib/drive-nat-files.json', JSON.stringify(files, null, 2))
console.log('Saved to lib/drive-nat-files.json')
