import type { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  labels: {
    singular: 'Volunteer Application',
    plural: 'Volunteer Applications',
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'status', 'email', 'phone', 'highestQualification', 'areasOfInterest', 'createdAt'],
  },
  fields: [
    // ─── SECTION A: PERSONAL INFORMATION ───
    {
      name: 'passportPhoto',
      type: 'text',
      label: 'Passport Photograph URL',
      admin: {
        description: 'Uploaded passport photograph URL (Cloudinary or secure storage)',
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
      label: 'City',
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
      label: 'Phone Number',
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
      label: 'Occupation',
    },
    {
      name: 'organization',
      type: 'text',
      label: 'Organization / Institution (if applicable)',
    },

    // ─── SECTION B: EMERGENCY CONTACT ───
    {
      name: 'emergencyName',
      type: 'text',
      label: 'Emergency Contact Name',
    },
    {
      name: 'emergencyRelationship',
      type: 'text',
      label: 'Emergency Contact Relationship',
    },
    {
      name: 'emergencyPhone',
      type: 'text',
      label: 'Emergency Contact Phone Number',
    },
    {
      name: 'emergencyAddress',
      type: 'textarea',
      label: 'Emergency Contact Address',
    },

    // ─── SECTION C: AVAILABILITY ───
    {
      name: 'availableDays',
      type: 'json',
      label: 'Available Days (Monday - Friday)',
    },
    {
      name: 'preferredTime',
      type: 'select',
      options: [
        { label: 'Morning', value: 'morning' },
        { label: 'Afternoon', value: 'afternoon' },
        { label: 'Full Day', value: 'full_day' },
      ],
      label: 'Preferred Time',
    },

    // ─── SECTION D: AREA OF INTEREST ───
    {
      name: 'areasOfInterest',
      type: 'json',
      label: 'Areas of Interest (List)',
    },
    {
      name: 'otherAreaOfInterest',
      type: 'text',
      label: 'Other Area of Interest',
    },

    // ─── SECTION E: EDUCATION ───
    {
      name: 'highestQualification',
      type: 'select',
      options: [
        { label: 'Secondary School', value: 'secondary' },
        { label: 'Diploma', value: 'diploma' },
        { label: 'HND', value: 'hnd' },
        { label: "Bachelor's Degree", value: 'bachelor' },
        { label: "Master's Degree", value: 'master' },
        { label: 'PhD', value: 'phd' },
        { label: 'Other', value: 'other' },
      ],
      label: 'Highest Qualification',
    },
    {
      name: 'courseOfStudy',
      type: 'text',
      label: 'Course of Study',
    },
    {
      name: 'institution',
      type: 'text',
      label: 'Institution Attended',
    },

    // ─── SECTION F: EXPERIENCE ───
    {
      name: 'hasVolunteerExperience',
      type: 'select',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      label: 'Has Previous Volunteer Experience?',
    },
    {
      name: 'previousOrganization',
      type: 'text',
      label: 'Previous Organization',
    },
    {
      name: 'previousRole',
      type: 'text',
      label: 'Previous Position / Role',
    },
    {
      name: 'previousDuration',
      type: 'text',
      label: 'Previous Duration',
    },

    // ─── SECTION G: SKILLS ───
    {
      name: 'skills',
      type: 'json',
      label: 'Relevant Skills (List)',
    },
    {
      name: 'otherSkills',
      type: 'text',
      label: 'Other Skills',
    },

    // ─── SECTION H: MOTIVATION ───
    {
      name: 'whyVolunteer',
      type: 'textarea',
      label: 'Why would you like to volunteer with CBF?',
    },
    {
      name: 'hopeToGain',
      type: 'textarea',
      label: 'What do you hope to gain from volunteering with us?',
    },
    {
      name: 'specialSkills',
      type: 'textarea',
      label: 'Describe special skills, certifications, or experience relevant to the role',
    },
    {
      name: 'knowledgeBrought',
      type: 'textarea',
      label: 'What knowledge, skill or experience are you able to bring to the foundation?',
    },

    // ─── SECTION I: HEALTH INFORMATION ───
    {
      name: 'hasMedicalCondition',
      type: 'select',
      options: [
        { label: 'No', value: 'no' },
        { label: 'Yes', value: 'yes' },
      ],
      label: 'Medical condition or disability to support volunteering?',
    },
    {
      name: 'medicalDetails',
      type: 'textarea',
      label: 'Medical Condition Details (if yes)',
    },

    // ─── SECTION J: REFERENCES ───
    {
      name: 'refereeName',
      type: 'text',
      label: 'Referee 1: Name',
    },
    {
      name: 'refereeRelationship',
      type: 'text',
      label: 'Referee 1: Relationship',
    },
    {
      name: 'refereePhone',
      type: 'text',
      label: 'Referee 1: Phone',
    },
    {
      name: 'refereeEmail',
      type: 'email',
      label: 'Referee 1: Email',
    },

    // ─── SECTION K: DECLARATION ───
    {
      name: 'declarationAgreed',
      type: 'checkbox',
      defaultValue: true,
      label: 'I certify that the information provided is true and complete.',
    },
    {
      name: 'applicantSignature',
      type: 'text',
      label: "Applicant's Electronic Signature / Full Legal Name",
    },
    {
      name: 'submissionDate',
      type: 'text',
      label: 'Application Date',
    },

    // ─── FOR OFFICIAL USE ONLY (ADMIN FIELDS) ───
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Not Accepted', value: 'not_accepted' },
        { label: 'Interview Scheduled', value: 'interview' },
        { label: 'Archived', value: 'archived' },
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
      },
      label: 'Assigned Volunteer ID (e.g., CBF-VOL-2026-001)',
    },
    {
      name: 'assignedDepartment',
      type: 'text',
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
      },
      label: 'Interview Date',
    },
    {
      name: 'adminRemarks',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
      label: 'Official Remarks / Internal Notes',
    },
    {
      name: 'authorizedOfficer',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: 'Authorized Reviewing Officer',
    },
  ],
}
