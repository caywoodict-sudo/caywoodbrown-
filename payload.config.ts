import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Programs } from './collections/Programs'
import { Events } from './collections/Events'
import { Posts } from './collections/Posts'
import { Comments } from './collections/Comments'
import { Testimonials } from './collections/Testimonials'
import { Submissions } from './collections/Submissions'
import { Volunteers } from './collections/Volunteers'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Programs,
    Events,
    Posts,
    Comments,
    Testimonials,
    Submissions,
    Volunteers,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'caywood-brown-foundation-secret-key-2006-secure',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || process.env.POSTGRES_URL || '',
      ssl: { rejectUnauthorized: false },
    },
    push: true,
  }),
})

