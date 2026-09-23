import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Blog Post & Press Release',
    plural: 'Blog Posts & News',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Editorial & News',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
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
      label: 'Article Title',
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
        { label: 'Field Stories & Impact', value: 'impact-stories' },
        { label: 'Press Releases & News', value: 'press' },
        { label: 'Cohort Graduations', value: 'graduations' },
        { label: 'Community Outreaches', value: 'outreaches' },
      ],
      label: 'Category',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Publication Status',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      label: 'Publish Date',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
      label: 'Author',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Short Excerpt / Teaser',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Header Photograph',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Full Article Content',
    },
    {
      name: 'allowComments',
      type: 'checkbox',
      defaultValue: true,
      label: 'Allow public comments on this article',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
