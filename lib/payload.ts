export async function getPayloadClient() {
  const hasDb = Boolean(
    process.env.DATABASE_URI ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL
  )
  if (!hasDb) {
    return null
  }
  try {
    const { getPayload: getPayloadInstance } = await import('payload')
    const config = (await import('@/payload.config')).default
    return await getPayloadInstance({ config })
  } catch (err) {
    console.warn('[Payload CMS] Database not connected or offline, using static data fallback:', err)
    return null
  }
}
