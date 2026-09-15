import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'status', 'relatedTo', 'createdAt'],
  },
  fields: [
    {
      name: 'authorName',
      type: 'text',
      required: true,
      label: 'Author Name',
    },
    {
      name: 'authorEmail',
      type: 'email',
      required: true,
      label: 'Author Email',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Comment Text',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      options: [
        { label: 'Pending Moderation', value: 'pending' },
        { label: 'Approved (Visible Publicly)', value: 'approved' },
        { label: 'Spam / Hidden', value: 'spam' },
        { label: 'Trash', value: 'trash' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedTo',
      type: 'relationship',
      relationTo: ['events', 'programs'],
      label: 'Associated Event or Program',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'adminResponse',
      type: 'textarea',
      label: 'Official Foundation Response (Optional)',
      admin: {
        description: 'If filled, this response will display publicly beneath the user comment as an official CBF reply.',
      },
    },
  ],
}
