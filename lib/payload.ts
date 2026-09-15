import { getPayload as getPayloadInstance } from 'payload'
import config from '@/payload.config'

export async function getPayloadClient() {
  try {
    return await getPayloadInstance({ config })
  } catch (err) {
    console.warn('[Payload CMS] Database not connected or offline, using static data fallback:', err)
    return null
  }
}
