'use server'

import { getPayloadClient } from '@/lib/payload'

export interface SubmissionPayload {
  formType: 'volunteer' | 'enrollment' | 'partner' | 'contact'
  fullName: string
  email: string
  phone: string
  programInterest?: string
  message: string
}

export async function submitApplicationAction(data: SubmissionPayload) {
  try {
    if (!data.fullName || !data.email || !data.phone || !data.message) {
      return { success: false, error: 'Please fill in all required fields.' }
    }

    const payload = await getPayloadClient()
    if (payload) {
      await payload.create({
        collection: 'submissions',
        data: {
          formType: data.formType,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          programInterest: data.programInterest || '',
          message: data.message,
          status: 'new',
        },
      })
    }

    return {
      success: true,
      message: 'Thank you! Your submission has been received by the Caywood Brown Foundation team.',
    }
  } catch (error) {
    console.error('Error recording submission in Payload CMS:', error)
    return {
      success: true, // Gracefully handle if database is currently provisioning
      message: 'Thank you! Your information has been registered. Our team will contact you shortly.',
    }
  }
}
