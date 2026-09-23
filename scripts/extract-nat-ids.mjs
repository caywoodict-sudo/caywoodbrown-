import fs from 'fs'

const html = fs.readFileSync('C:\\Users\\NEWUSER\\.gemini\\antigravity\\brain\\992953af-373b-41ff-acaf-239fd6a33c34\\.system_generated\\steps\\796\\content.md', 'utf-8')

// Search around NAT_ pattern
const regex = /["']([a-zA-Z0-9_-]{28,35})["'][^"']*?(NAT_[0-9]+\.jpg)/g
let match
const items = []
while ((match = regex.exec(html)) !== null) {
  items.push({ id: match[1], name: match[2] })
}

// Also try the reverse: NAT_ followed by ID
const regex2 = /(NAT_[0-9]+\.jpg)[^"']*?["']([a-zA-Z0-9_-]{28,35})["']/g
while ((match = regex2.exec(html)) !== null) {
  items.push({ id: match[2], name: match[1] })
}

console.log('Matches found:', items.length)
console.log(items.slice(0, 15))

// Find all occurrences of NAT_
const natMatches = []
let idx = 0
while ((idx = html.indexOf('NAT_', idx)) !== -1) {
  const snippet = html.substring(Math.max(0, idx - 150), Math.min(html.length, idx + 150))
  natMatches.push(snippet)
  idx += 4
}
console.log('Total NAT_ occurrences:', natMatches.length)
if (natMatches.length > 0) {
  console.log('First snippet:\n', natMatches[0])
}
