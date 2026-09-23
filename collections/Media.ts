import type { CollectionConfig } from 'payload'
import { cloudinary } from '@/lib/cloudinary'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'feature',
        width: 1200,
        height: 800,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        const file = (req as any).file
        if (file?.data) {
          try {
            const uploadResult: any = await new Promise((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream(
                {
                  folder: 'caywood-brown/media',
                  public_id: file.name ? file.name.replace(/\.[^/.]+$/, '') : undefined,
                  resource_type: 'auto',
                },
                (error, result) => {
                  if (error) reject(error)
                  else resolve(result)
                }
              )
              stream.end(file.data)
            })
            if (uploadResult?.secure_url) {
              data.url = uploadResult.secure_url
              data.cloudinaryUrl = uploadResult.secure_url
            }
          } catch (err) {
            console.error('[Cloudinary] Upload failed during media save:', err)
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'cloudinaryUrl',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
