import type { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  labels: {
    singular: 'Volunteer Application',
    plural: 'Volunteer Applications',
  },
  admin: {
    useAsTitle: 'fullName',
    group: 'Volunteer Management',
    defaultColumns: ['fullName', 'status', 'volunteerId', 'assignedDepartment', 'email', 'phone', 'highestQualification', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Public applicant submissions allowed
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    // ─── ADMIN SIDEBAR CONTROLS ───
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Under Review', value: 'under-review' },
        { label: 'Interview Scheduled', value: 'scheduled' },
        { label: 'Accepted & Enrolled', value: 'accepted' },
        { label: 'Not Accepted / Waitlisted', value: 'rejected' },
        { label: 'Completed Service', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Application Status',
    },
    {
      name: 'volunteerId',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      label: 'Official Volunteer ID',
    },
    {
      name: 'assignedDepartment',
      type: 'select',
      options: [
        { label: 'Healthcare & Immunization (IMPA)', value: 'Healthcare & Immunization' },
        { label: 'Digital Skills & IT Academy', value: 'Digital Skills & IT' },
        { label: 'Creative Arts & Music Equipment', value: 'Creative Arts & Music' },
        { label: 'Youth Rehabilitation & Wellness', value: 'Youth Rehabilitation & Recovery' },
        { label: 'Girl Child Advocacy & Leadership', value: 'Girl Child Advocacy' },
        { label: 'Graduate Internship Mentorship', value: 'Graduate Internship Mentorship' },
        { label: 'Field Logistics & Community Outreach', value: 'Field Logistics & Community Outreach' },
        { label: 'Media, Photography & Public Relations', value: 'Media & Public Relations' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Assigned Department',
    },
    {
      name: 'supervisor',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: 'Assigned Supervisor',
    },
    {
      name: 'interviewDate',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Scheduled date & time for physical or virtual interview',
      },
      label: 'Interview Date / Time',
    },
    {
      name: 'authorizedOfficer',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: 'Authorized Reviewing Officer',
    },
    {
      name: 'adminRemarks',
      type: 'textarea',
      admin: {
        position: 'sidebar',
        description: 'Internal evaluation notes, interview results, or deployment remarks',
      },
      label: 'Official Remarks / Internal Notes',
    },

    // ─── MAIN FORM FIELDS ORGANIZED IN TABS ───
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Section A: Personal Details',
          fields: [
            {
              name: 'passportPhoto',
              type: 'text',
              label: 'Passport Photograph URL',
              admin: {
                description: 'Uploaded passport photograph URL (Cloudinary CDN)',
              },
            },
            {
              name: 'fullName',
              type: 'text',
              required: true,
              label: 'Full Name',
            },
            {
              name: 'dateOfBirth',
              type: 'text',
              label: 'Date of Birth (DD / MM / YYYY)',
            },
            {
              name: 'gender',
              type: 'select',
              options: [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Prefer not to say', value: 'unspecified' },
              ],
              label: 'Gender',
            },
            {
              name: 'nationality',
              type: 'text',
              defaultValue: 'Nigerian',
              label: 'Nationality',
            },
            {
              name: 'stateOfOrigin',
              type: 'text',
              label: 'State of Origin',
            },
            {
              name: 'lga',
              type: 'text',
              label: 'Local Government Area (LGA)',
            },
            {
              name: 'residentialAddress',
              type: 'textarea',
              label: 'Residential Address',
            },
            {
              name: 'city',
              type: 'text',
              label: 'City / Town',
            },
            {
              name: 'state',
              type: 'text',
              label: 'State of Residence',
            },
            {
              name: 'phone',
              type: 'text',
              required: true,
              label: 'Primary Phone Number',
            },
            {
              name: 'alternativePhone',
              type: 'text',
              label: 'Alternative Phone Number',
            },
            {
              name: 'email',
              type: 'email',
              required: true,
              label: 'Email Address',
            },
            {
              name: 'occupation',
              type: 'text',
              label: 'Current Occupation',
            },
            {
              name: 'organization',
              type: 'text',
              label: 'Current Employer / Institution',
            },
          ],
        },
        {
          label: 'Sections B & C: Emergency & Availability',
          fields: [
            {
              name: 'emergencyName',
              type: 'text',
              label: 'Emergency Contact Name',
            },
            {
              name: 'emergencyRelationship',
              type: 'text',
              label: 'Relationship to Applicant',
            },
            {
              name: 'emergencyPhone',
              type: 'text',
              label: 'Emergency Contact Phone',
            },
            {
              name: 'emergencyAddress',
              type: 'textarea',
              label: 'Emergency Contact Address',
            },
            {
              name: 'availableDays',
              type: 'json',
              label: 'Available Days (Mon - Sun)',
            },
            {
              name: 'preferredTime',
              type: 'select',
              options: [
                { label: 'Morning (8:00 AM – 12:00 PM)', value: 'morning' },
                { label: 'Afternoon (12:00 PM – 4:00 PM)', value: 'afternoon' },
                { label: 'Full Day (8:00 AM – 4:00 PM)', value: 'fullday' },
                { label: 'Flexible / As Needed', value: 'flexible' },
              ],
              label: 'Preferred Hours / Time of Day',
            },
          ],
        },
        {
          label: 'Sections D & E: Interests & Education',
          fields: [
            {
              name: 'areasOfInterest',
              type: 'json',
              label: 'Selected Areas of Interest',
            },
            {
              name: 'otherAreaOfInterest',
              type: 'text',
              label: 'Other Area of Interest (if specified)',
            },
            {
              name: 'highestQualification',
              type: 'select',
              options: [
                { label: 'SSCE / WAEC / NECO', value: 'SSCE' },
                { label: 'OND (Ordinary National Diploma)', value: 'OND' },
                { label: 'HND (Higher National Diploma)', value: 'HND' },
                { label: 'B.Sc. / B.A. / B.Tech (Bachelor Degree)', value: 'BSc' },
                { label: 'M.Sc. / MBA (Master Degree)', value: 'MSc' },
                { label: 'Ph.D.', value: 'PhD' },
                { label: 'Vocational / Professional Certificate', value: 'Vocational' },
                { label: 'Other', value: 'Other' },
              ],
              label: 'Highest Educational Qualification',
            },
            {
              name: 'courseOfStudy',
              type: 'text',
              label: 'Course of Study / Major',
            },
            {
              name: 'institution',
              type: 'text',
              label: 'Institution Attended',
            },
          ],
        },
        {
          label: 'Sections F, G & H: Experience & Skills',
          fields: [
            {
              name: 'hasVolunteerExperience',
              type: 'select',
              options: [
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ],
              label: 'Prior Volunteer Experience?',
            },
            {
              name: 'previousOrganization',
              type: 'text',
              label: 'Previous Volunteer Organization',
            },
            {
              name: 'previousRole',
              type: 'text',
              label: 'Previous Volunteer Role',
            },
            {
              name: 'previousDuration',
              type: 'text',
              label: 'Duration of Previous Volunteering',
            },
            {
              name: 'skills',
              type: 'json',
              label: 'Selected Skills Checklist',
            },
            {
              name: 'otherSkills',
              type: 'text',
              label: 'Other Skills (if specified)',
            },
            {
              name: 'whyVolunteer',
              type: 'textarea',
              label: 'Why do you want to volunteer with Caywood Brown Foundation?',
            },
            {
              name: 'hopeToGain',
              type: 'textarea',
              label: 'What do you hope to gain from this experience?',
            },
            {
              name: 'specialSkills',
              type: 'textarea',
              label: 'Special skills or knowledge you bring',
            },
            {
              name: 'knowledgeBrought',
              type: 'textarea',
              label: 'Additional contributions / hobbies',
            },
          ],
        },
        {
          label: 'Sections I, J & K: Health, Referee & Declaration',
          fields: [
            {
              name: 'hasMedicalCondition',
              type: 'select',
              options: [
                { label: 'No medical condition to report', value: 'no' },
                { label: 'Yes (medical condition or special assistance required)', value: 'yes' },
              ],
              label: 'Medical Condition / Special Assistance',
            },
            {
              name: 'medicalDetails',
              type: 'textarea',
              label: 'Medical Condition Details (if applicable)',
            },
            {
              name: 'refereeName',
              type: 'text',
              label: 'Character Referee Full Name',
            },
            {
              name: 'refereeRelationship',
              type: 'text',
              label: 'Referee Relationship to Applicant',
            },
            {
              name: 'refereePhone',
              type: 'text',
              label: 'Referee Phone Number',
            },
            {
              name: 'refereeEmail',
              type: 'email',
              label: 'Referee Email Address',
            },
            {
              name: 'declarationAgreed',
              type: 'checkbox',
              label: 'Applicant agreed to official declaration',
            },
            {
              name: 'applicantSignature',
              type: 'text',
              label: 'Applicant Digital Signature',
            },
            {
              name: 'submissionDate',
              type: 'text',
              label: 'Date of Application Submission',
            },
          ],
        },
      ],
    },
  ],
}
