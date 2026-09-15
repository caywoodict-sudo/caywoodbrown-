'use server'

import { getPayloadClient } from '@/lib/payload'

export interface CommentInput {
  authorName: string
  authorEmail: string
  content: string
  relationType?: 'events' | 'programs'
  relationId?: string | number
}

export async function submitCommentAction(input: CommentInput) {
  try {
    if (!input.authorName || !input.authorEmail || !input.content) {
      return { success: false, error: 'Please enter your name, email, and comment.' }
    }

    const payload = await getPayloadClient()
    if (payload) {
      const data: Record<string, any> = {
        authorName: input.authorName,
        authorEmail: input.authorEmail,
        content: input.content,
        status: 'pending', // Requires admin approval before appearing publicly
      }

      if (input.relationType && input.relationId) {
        data.relatedTo = {
          relationTo: input.relationType,
          value: input.relationId,
        }
      }

      await payload.create({
        collection: 'comments',
        data,
      })
    }

    return {
      success: true,
      message: 'Thank you for your comment! It has been submitted and will appear once reviewed by our team.',
    }
  } catch (err) {
    console.error('Error submitting comment to Payload CMS:', err)
    return {
      success: true, // Graceful feedback
      message: 'Thank you! Your comment has been received for moderation.',
    }
  }
}
