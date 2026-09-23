import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    group: 'System & Users',
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
  },
  auth: true,
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Staff / Admin Name',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      options: [
        { label: 'System Administrator (Full Access)', value: 'admin' },
        { label: 'Content Editor (Programs, News, Events)', value: 'editor' },
        { label: 'Program & Volunteer Coordinator', value: 'coordinator' },
      ],
      required: true,
      access: {
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      label: 'Administrative Role',
    },
  ],
}
