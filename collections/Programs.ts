import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  labels: {
    singular: 'Program / Initiative',
    plural: 'Programs & Initiatives',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Programs & Events',
    defaultColumns: ['title', 'thematicPillar', 'status', 'partner', 'updatedAt'],
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
      label: 'Program Title',
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
        { label: 'Healthcare Development', value: 'healthcare' },
        { label: 'Education & Human Development', value: 'education' },
        { label: 'SMEs & Economic Empowerment', value: 'smes-economic' },
        { label: 'Digital Economy & Computer Literacy', value: 'digital-economy' },
        { label: 'Creative Arts & Music Training', value: 'music' },
        { label: 'Youth Rehabilitation & Recovery', value: 'rehabilitation' },
        { label: 'Volunteerism Academy & Internships', value: 'volunteerism' },
        { label: 'Youth Health Awareness & Routine Immunization', value: 'health' },
        { label: 'Her Voice, Her Power (Girl Child Advocacy)', value: 'advocacy' },
      ],
      label: 'Thematic Intervention Pillar',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Enrollment Open', value: 'active' },
        { label: 'Upcoming Cohort', value: 'upcoming' },
        { label: 'In Progress / Ongoing', value: 'in-progress' },
        { label: 'Archived / Completed', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Cohort Status',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Executive Summary',
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
      label: 'Featured Hero Photograph',
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
          label: 'Module Title',
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
          label: 'Module Content Overview',
        },
        {
          name: 'learningOutcomes',
          type: 'array',
          label: 'Key Learning Outcomes',
          fields: [
            {
              name: 'outcome',
              type: 'text',
              label: 'Outcome Description',
            },
          ],
        },
      ],
    },
  ],
}
