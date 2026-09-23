import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  labels: {
    singular: 'General Submission / Inquiry',
    plural: 'General Submissions & Inquiries',
  },
  admin: {
    useAsTitle: 'fullName',
    group: 'Volunteer Management',
    defaultColumns: ['fullName', 'formType', 'email', 'phone', 'status', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Public forms can submit
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      required: true,
      options: [
        { label: 'Volunteer Inquiry', value: 'volunteer' },
        { label: 'Cohort Enrollment', value: 'enrollment' },
        { label: 'Corporate / CSR Partnership', value: 'partner' },
        { label: 'General Message / Contact Form', value: 'contact' },
      ],
      label: 'Submission Category',
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Sender Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Sender Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Sender Phone',
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
      label: 'Message / Details',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New Submission', value: 'new' },
        { label: 'Under Review', value: 'reviewed' },
        { label: 'Contacted / Responded', value: 'contacted' },
        { label: 'Enrolled / Accepted', value: 'accepted' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Processing Status',
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
