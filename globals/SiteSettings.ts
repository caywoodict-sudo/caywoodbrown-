import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site & Organization Settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
  },
  admin: {
    group: 'Administration',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General Information',
          fields: [
            {
              name: 'foundationName',
              type: 'text',
              defaultValue: 'Caywood Brown Foundation',
              required: true,
              label: 'Organization Name',
            },
            {
              name: 'cacRegistration',
              type: 'text',
              defaultValue: 'RC: 0022482',
              label: 'CAC Registration Number',
            },
            {
              name: 'officialEmail',
              type: 'email',
              defaultValue: 'caywoodbrowndocs@gmail.com',
              required: true,
              label: 'Official Documents & Secretariat Email',
            },
            {
              name: 'officialPhone',
              type: 'text',
              defaultValue: '08038817059',
              required: true,
              label: 'Primary Contact Phone',
            },
            {
              name: 'abujaAddress',
              type: 'textarea',
              defaultValue: '883 Olu Awotesu Street, Jabi, Abuja, Nigeria',
              required: true,
              label: 'Abuja Office Address',
            },
            {
              name: 'portHarcourtAddress',
              type: 'textarea',
              defaultValue: 'Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt, Rivers State',
              required: true,
              label: 'Port Harcourt HQ Address',
            },
          ],
        },
        {
          label: 'Mission, Vision & Core Values',
          fields: [
            {
              name: 'mission',
              type: 'textarea',
              defaultValue: 'To improve lives & promote sustainable community development through impactful interventions in healthcare, education, agriculture, entrepreneurship & social empowerment.',
              required: true,
              label: 'Official Mission Statement',
            },
            {
              name: 'vision',
              type: 'textarea',
              defaultValue: 'To Build Healthy, Empowered, Educated And Economically Productive Communities Where Individuals Can Achieve Their Full Potential.',
              required: true,
              label: 'Official Vision Statement',
            },
            {
              name: 'coreValues',
              type: 'array',
              label: 'Official Core Values (8 Pillars)',
              defaultValue: [
                { value: 'Integrity' },
                { value: 'Accountability' },
                { value: 'Compassion' },
                { value: 'Excellence' },
                { value: 'Inclusivity' },
                { value: 'Innovation' },
                { value: 'Sustainability' },
                { value: 'Service to Humanity' },
              ],
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: 'Value Name',
                },
              ],
            },
          ],
        },
        {
          label: 'Banking & Donations',
          fields: [
            {
              name: 'bankName',
              type: 'text',
              defaultValue: 'Zenith Bank',
              label: 'Primary Bank Name',
            },
            {
              name: 'accountName',
              type: 'text',
              defaultValue: 'Caywood Brown Foundation',
              label: 'Account Name',
            },
            {
              name: 'accountNumber',
              type: 'text',
              defaultValue: '1014902834',
              label: 'NUBAN Account Number',
            },
            {
              name: 'donationInstructions',
              type: 'textarea',
              defaultValue: 'Please include your full name as payment reference and send proof of donation to caywoodbrowndocs@gmail.com for your official donor receipt.',
              label: 'Donation Remittance Instructions',
            },
          ],
        },
        {
          label: 'Social Media & Links',
          fields: [
            {
              name: 'facebookUrl',
              type: 'text',
              label: 'Facebook Page URL',
            },
            {
              name: 'twitterUrl',
              type: 'text',
              label: 'X (Twitter) Profile URL',
            },
            {
              name: 'instagramUrl',
              type: 'text',
              label: 'Instagram Profile URL',
            },
            {
              name: 'linkedinUrl',
              type: 'text',
              label: 'LinkedIn Organization URL',
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              label: 'YouTube Channel URL',
            },
          ],
        },
      ],
    },
  ],
}
