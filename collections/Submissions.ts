import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'formType', 'email', 'phone', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      required: true,
      options: [
        { label: 'Volunteer Application', value: 'volunteer' },
        { label: 'Cohort Enrollment', value: 'enrollment' },
        { label: 'Corporate / CSR Partnership', value: 'partner' },
        { label: 'General Message', value: 'contact' },
      ],
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'programInterest',
      type: 'text',
      label: 'Program of Interest (if applicable)',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New Submission', value: 'new' },
        { label: 'Under Review', value: 'reviewed' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Enrolled / Accepted', value: 'accepted' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      label: 'Staff Internal Notes',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
