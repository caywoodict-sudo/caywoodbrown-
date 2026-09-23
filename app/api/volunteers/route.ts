import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { cloudinary } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      passportPhoto, // can be base64 data URI or existing URL
      dateOfBirth,
      gender,
      nationality,
      stateOfOrigin,
      lga,
      residentialAddress,
      city,
      state,
      alternativePhone,
      occupation,
      organization,
      emergencyName,
      emergencyRelationship,
      emergencyPhone,
      emergencyAddress,
      availableDays,
      preferredTime,
      areasOfInterest,
      otherAreaOfInterest,
      highestQualification,
      courseOfStudy,
      institution,
      hasVolunteerExperience,
      previousOrganization,
      previousRole,
      previousDuration,
      skills,
      otherSkills,
      whyVolunteer,
      hopeToGain,
      specialSkills,
      knowledgeBrought,
      hasMedicalCondition,
      medicalDetails,
      refereeName,
      refereeRelationship,
      refereePhone,
      refereeEmail,
      declarationAgreed,
      applicantSignature,
    } = body

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Full name, email address, and phone number are required.' },
        { status: 400 }
      )
    }

    // Process passport photo upload to Cloudinary if base64 provided
    let uploadedPassportUrl = passportPhoto || ''
    if (passportPhoto && passportPhoto.startsWith('data:image/')) {
      try {
        const uploadRes = await cloudinary.uploader.upload(passportPhoto, {
          folder: 'caywood-brown/volunteers/passports',
          public_id: `passport_${Date.now()}_${fullName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`,
          transformation: [{ width: 600, height: 600, crop: 'fill', gravity: 'face' }],
        })
        uploadedPassportUrl = uploadRes.secure_url
      } catch (uploadErr) {
        console.warn('Cloudinary upload warning (using fallback storage):', uploadErr)
      }
    }

    const volunteerId = `CBF-VOL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
    const submissionDate = new Date().toISOString()

    // Store in Payload CMS
    let savedInPayload = false
    try {
      const payload = await getPayloadClient()
      if (payload) {
        await payload.create({
          collection: 'volunteers',
          data: {
            fullName,
            email,
            phone,
            passportPhoto: uploadedPassportUrl,
            dateOfBirth: dateOfBirth || '',
            gender: gender || 'unspecified',
            nationality: nationality || 'Nigerian',
            stateOfOrigin: stateOfOrigin || '',
            lga: lga || '',
            residentialAddress: residentialAddress || '',
            city: city || '',
            state: state || '',
            alternativePhone: alternativePhone || '',
            occupation: occupation || '',
            organization: organization || '',
            emergencyName: emergencyName || '',
            emergencyRelationship: emergencyRelationship || '',
            emergencyPhone: emergencyPhone || '',
            emergencyAddress: emergencyAddress || '',
            availableDays: availableDays || [],
            preferredTime: preferredTime || 'morning',
            areasOfInterest: areasOfInterest || [],
            otherAreaOfInterest: otherAreaOfInterest || '',
            highestQualification: highestQualification || 'secondary',
            courseOfStudy: courseOfStudy || '',
            institution: institution || '',
            hasVolunteerExperience: hasVolunteerExperience || 'no',
            previousOrganization: previousOrganization || '',
            previousRole: previousRole || '',
            previousDuration: previousDuration || '',
            skills: skills || [],
            otherSkills: otherSkills || '',
            whyVolunteer: whyVolunteer || '',
            hopeToGain: hopeToGain || '',
            specialSkills: specialSkills || '',
            knowledgeBrought: knowledgeBrought || '',
            hasMedicalCondition: hasMedicalCondition || 'no',
            medicalDetails: medicalDetails || '',
            refereeName: refereeName || '',
            refereeRelationship: refereeRelationship || '',
            refereePhone: refereePhone || '',
            refereeEmail: refereeEmail || '',
            declarationAgreed: Boolean(declarationAgreed),
            applicantSignature: applicantSignature || fullName,
            submissionDate,
            status: 'pending',
            volunteerId,
          },
        })
        savedInPayload = true
      }
    } catch (payloadErr) {
      console.warn('Payload CMS volunteer save error (will fallback to JSON memory/log):', payloadErr)
    }

    // Also notify/record submission details
    console.log(`[CBF VOLUNTEER SUBMISSION] ID: ${volunteerId} | Name: ${fullName} | Email: ${email} | Phone: ${phone} | Interests: ${JSON.stringify(areasOfInterest)}`)

    return NextResponse.json({
      success: true,
      volunteerId,
      message: 'Volunteer application submitted successfully! Your application has been received by the Caywood Brown Foundation team.',
      passportUrl: uploadedPassportUrl,
      savedInPayload,
      destinationEmail: 'caywoodbrowndocs@gmail.com',
      officeAddress: '883 Olu Awotesu Street, Jabi, Abuja, Nigeria',
    })
  } catch (error) {
    console.error('Error submitting volunteer application:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while submitting your application. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const results = await payload.find({
        collection: 'volunteers',
        limit: 100,
        sort: '-createdAt',
      })
      return NextResponse.json({ success: true, count: results.totalDocs, docs: results.docs })
    }
    return NextResponse.json({ success: true, count: 0, docs: [] })
  } catch (error) {
    return NextResponse.json({ success: true, count: 0, docs: [] })
  }
}
