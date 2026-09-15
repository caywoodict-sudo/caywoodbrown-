import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'thematicPillar', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
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
      name: 'thematicPillar',
      type: 'select',
      required: true,
      options: [
        { label: 'Digital Economy & Computer Literacy', value: 'digital-economy' },
        { label: 'Creative Arts & Music Training', value: 'music' },
        { label: 'Youth Rehabilitation & Recovery', value: 'rehabilitation' },
        { label: 'Volunteerism Academy & Internships', value: 'volunteerism' },
        { label: 'Youth Health Awareness', value: 'health' },
        { label: 'Her Voice, Her Power (Girl Child)', value: 'advocacy' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Enrollment Open', value: 'active' },
        { label: 'Upcoming Cohort', value: 'upcoming' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'partner',
      type: 'text',
      label: 'Institutional Partner (e.g. Google, NLNG, Rivers State Govt, PHCCIMA)',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'modules',
      type: 'array',
      label: 'Curriculum Modules / Syllabus',
      fields: [
        {
          name: 'moduleNumber',
          type: 'text',
          required: true,
          label: 'Module Code (e.g. Module 01)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Duration (e.g. Weeks 1 - 2)',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'learningOutcomes',
          type: 'array',
          fields: [
            {
              name: 'outcome',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
