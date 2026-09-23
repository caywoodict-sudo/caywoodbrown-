import fs from 'fs'

const html = fs.readFileSync('C:\\Users\\NEWUSER\\.gemini\\antigravity\\brain\\992953af-373b-41ff-acaf-239fd6a33c34\\.system_generated\\steps\\796\\content.md', 'utf-8')

// Look for file IDs in Google Drive folder HTML: patterns like ["https://lh3.googleusercontent.com/..." or drive file IDs
const driveMatches = html.match(/https:\/\/[a-zA-Z0-9_-]+\.googleusercontent\.com\/[^\s"'\\]+/g) || []
console.log('Google UserContent URLs found:', driveMatches.length)
if (driveMatches.length > 0) {
  console.log('Sample:', driveMatches.slice(0, 5))
}

// Check for file IDs like [a-zA-Z0-9_-]{33}
const idMatches = html.match(/[a-zA-Z0-9_-]{28,35}/g) || []
const uniqueIds = Array.from(new Set(idMatches)).filter(id => !id.includes('googleapis') && !id.includes('googleusercontent') && !id.includes('http'))
console.log('Unique candidate IDs:', uniqueIds.length)

// Also look for image file names like .jpg or .png or .jpeg
const fileNames = html.match(/[^"'\\]+\.(jpg|jpeg|png|webp)/gi) || []
console.log('Image filenames in HTML:', Array.from(new Set(fileNames)).slice(0, 20))
