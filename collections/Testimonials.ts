import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'personName',
    defaultColumns: ['personName', 'roleOrProgram', 'cohortYear', 'featuredOnHome'],
  },
  fields: [
    {
      name: 'personName',
      type: 'text',
      required: true,
      label: 'Full Name (e.g. Blessing Okon)',
    },
    {
      name: 'roleOrProgram',
      type: 'text',
      required: true,
      label: 'Title / Role (e.g. Junior Web Developer, Computer Appreciation Cohort)',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Port Harcourt, Rivers State',
    },
    {
      name: 'cohortYear',
      type: 'text',
      label: 'Cohort Year (e.g. 2024)',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featuredOnHome',
      type: 'checkbox',
      defaultValue: false,
      label: 'Display in Homepage "Voices of Transformation" Section',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
