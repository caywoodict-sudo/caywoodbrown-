import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Event & Outreach',
    plural: 'Events & Outreaches',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Programs & Events',
    defaultColumns: ['title', 'category', 'eventDate', 'location', 'featuredOnHome'],
  },
  access: {
    read: () => true, // Publicly viewable
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Event Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Health Campaign & Immunization', value: 'health' },
        { label: 'Public Health Policy & Advocacy', value: 'advocacy' },
        { label: 'Humanitarian Relief & IDP Outreach', value: 'relief' },
        { label: 'Skills Camp & Bootcamps', value: 'skills' },
        { label: 'Community Outreaches', value: 'outreach' },
      ],
      label: 'Event Category',
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
      label: 'Event Date',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Location (e.g. Abuja Outreach, Port Harcourt HQ)',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Executive Summary',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Primary Cover Photograph',
    },
    {
      name: 'featuredOnHome',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
      label: 'Feature on Homepage',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Event Photo Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Photograph',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Photo Caption',
        },
      ],
    },
  ],
}
