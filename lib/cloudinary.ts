import { v2 as cloudinary } from 'cloudinary'
import cloudinaryMapping from './cloudinary-mapping.json'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'oudx4ztm',
  api_key: process.env.CLOUDINARY_API_KEY || '999426434255721',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R7XDqe3ruZf4S9iThQ_Dp0C69bw',
  secure: true,
})

/**
 * Returns the Cloudinary CDN URL for a given local image path.
 * If the path is already a remote URL or not in the mapping, it returns it as-is.
 */
export function getCloudinaryUrl(localPath: string): string {
  if (!localPath) return ''
  if (localPath.startsWith('http://') || localPath.startsWith('https://')) {
    return localPath
  }
  const normalized = localPath.startsWith('/') ? localPath : `/${localPath}`
  return (cloudinaryMapping as Record<string, string>)[normalized] || localPath
}

export { cloudinary }
export default cloudinary
