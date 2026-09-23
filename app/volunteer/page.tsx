"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Users,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  Heart,
  Upload,
  FileText,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Camera,
  Check,
  Printer,
  Download,
  AlertCircle,
  HelpCircle,
  Building2,
  Briefcase
} from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const interestAreasList = [
  "Health",
  "Education",
  "Small & Medium Enterprise (SME) Development",
  "Agriculture",
  "Community Outreach",
  "Social Media Management",
  "Administration",
  "Event Support",
  "Monitoring & Evaluation",
  "Research & Documentation",
  "Graphic Design",
  "Photography/Videography",
]

const skillsList = [
  "Communication",
  "Public Speaking",
  "Leadership",
  "Teaching",
  "Data Collection",
  "Research",
  "Computer Skills",
  "Microsoft Office",
  "Graphic Design",
  "Social Media",
  "Photography",
  "Videography",
  "Grants",
  "Monitoring & Evaluation",
  "Health Promotion",
  "Community Mobilization",
  "Agriculture Extension",
  "Business Development",
]

const qualifications = [
  "Secondary School",
  "Diploma",
  "HND",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
]

export default function VolunteerApplicationPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form State
  const [passportPreview, setPassportPreview] = useState<string>("")
  const [fullName, setFullName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [gender, setGender] = useState("male")
  const [nationality, setNationality] = useState("Nigerian")
  const [stateOfOrigin, setStateOfOrigin] = useState("")
  const [lga, setLga] = useState("")
  const [residentialAddress, setResidentialAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [phone, setPhone] = useState("")
  const [alternativePhone, setAlternativePhone] = useState("")
  const [email, setEmail] = useState("")
  const [occupation, setOccupation] = useState("")
  const [organization, setOrganization] = useState("")

  // Emergency Contact
  const [emergencyName, setEmergencyName] = useState("")
  const [emergencyRelationship, setEmergencyRelationship] = useState("")
  const [emergencyPhone, setEmergencyPhone] = useState("")
  const [emergencyAddress, setEmergencyAddress] = useState("")

  // Availability
  const [selectedDays, setSelectedDays] = useState<string[]>(["Monday", "Wednesday", "Friday"])
  const [preferredTime, setPreferredTime] = useState("morning")

  // Areas of Interest
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [otherInterest, setOtherInterest] = useState("")

  // Education
  const [highestQualification, setHighestQualification] = useState("Bachelor's Degree")
  const [courseOfStudy, setCourseOfStudy] = useState("")
  const [institution, setInstitution] = useState("")

  // Experience
  const [hasExperience, setHasExperience] = useState<"no" | "yes">("no")
  const [prevOrg, setPrevOrg] = useState("")
  const [prevRole, setPrevRole] = useState("")
  const [prevDuration, setPrevDuration] = useState("")

  // Skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [otherSkills, setOtherSkills] = useState("")

  // Motivation
  const [whyVolunteer, setWhyVolunteer] = useState("")
  const [hopeToGain, setHopeToGain] = useState("")
  const [specialSkills, setSpecialSkills] = useState("")
  const [knowledgeBrought, setKnowledgeBrought] = useState("")

  // Health
  const [hasMedical, setHasMedical] = useState<"no" | "yes">("no")
  const [medicalDetails, setMedicalDetails] = useState("")

  // References
  const [refName, setRefName] = useState("")
  const [refRelationship, setRefRelationship] = useState("")
  const [refPhone, setRefPhone] = useState("")
  const [refEmail, setRefEmail] = useState("")

  // Declaration
  const [agreed, setAgreed] = useState(true)
  const [signature, setSignature] = useState("")

  // Status & Submission
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState("")

  // Handle passport photo selection
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Passport image size must be less than 5MB.")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setPassportPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!fullName || !email || !phone) {
      setErrorMessage("Please complete all required fields (Full Name, Phone Number, and Email).")
      window.scrollTo({ top: 350, behavior: "smooth" })
      return
    }

    if (!agreed) {
      setErrorMessage("Please acknowledge and agree to the Declaration statement in Section K.")
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        fullName,
        email,
        phone,
        passportPhoto: passportPreview,
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
        availableDays: selectedDays,
        preferredTime,
        areasOfInterest: selectedInterests,
        otherAreaOfInterest: otherInterest,
        highestQualification,
        courseOfStudy,
        institution,
        hasVolunteerExperience: hasExperience,
        previousOrganization: prevOrg,
        previousRole: prevRole,
        previousDuration: prevDuration,
        skills: selectedSkills,
        otherSkills,
        whyVolunteer,
        hopeToGain,
        specialSkills,
        knowledgeBrought,
        hasMedicalCondition: hasMedical,
        medicalDetails,
        refereeName: refName,
        refereeRelationship: refRelationship,
        refereePhone: refPhone,
        refereeEmail: refEmail,
        declarationAgreed: agreed,
        applicantSignature: signature || fullName,
      }

      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmittedData(data)
        window.scrollTo({ top: 200, behavior: "smooth" })
      } else {
        setErrorMessage(data.error || "Failed to submit application. Please try again.")
      }
    } catch (err: any) {
      console.error("Submission error:", err)
      setErrorMessage("Network error occurred. Please check your connection or send your application directly to caywoodbrowndocs@gmail.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="home-page min-h-screen bg-[#faf7f0]">
      {/* ─── 1. HERO HEADER ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-20 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-28">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#f6ce40] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Application Portal</span>
          </div>

          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] font-medium leading-[1.12] text-[#faf7f0]">
            CAYWOOD BROWN FOUNDATION (CBF)
          </h1>
          <p className="mt-3 font-serif text-2xl sm:text-3xl text-[#c7ed9f] font-normal tracking-wide uppercase">
            Volunteer Application Form
          </p>

          <p className="mt-5 text-sm sm:text-base text-[#faf7f0]/85 max-w-2xl mx-auto leading-relaxed">
            Thank you for your interest in volunteering with the Caywood Brown Foundation. Please complete this form clearly. The information you provide will help us match your skills and interests with available volunteer opportunities.
          </p>

          {/* Contact Bar */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-xs sm:text-sm text-[#faf7f0]/90 border-t border-white/15 pt-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f6ce40]" />
              <span>883 Olu Awotesu Street, Jabi, Abuja, Nigeria</span>
            </span>
            <a href="tel:+2348038817059" className="flex items-center gap-2 hover:text-[#c7ed9f] transition-colors">
              <Phone className="w-4 h-4 text-[#f6ce40]" />
              <span>08038817059</span>
            </a>
            <a href="mailto:caywoodbrowndocs@gmail.com" className="flex items-center gap-2 hover:text-[#c7ed9f] transition-colors">
              <Mail className="w-4 h-4 text-[#f6ce40]" />
              <span>caywoodbrowndocs@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. SUBMISSION SUCCESS MODAL / SCREEN ─── */}
      {submittedData ? (
        <section className="py-20">
          <div className="home-shell max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#00521a]/20 shadow-xl text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#00521a]/10 text-[#00521a] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00521a] block mb-1">
                  Application Successfully Registered
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#173421]">
                  Welcome to the Caywood Brown Volunteer Corps!
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-[#c7ed9f]/15 border border-[#00521a]/20 text-left space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-[#00521a]/10 pb-2">
                  <span className="font-bold text-[#00521a]">Official Volunteer ID:</span>
                  <span className="font-mono font-bold text-base text-[#173421]">{submittedData.volunteerId}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#00521a]/10 pb-2">
                  <span className="text-[#173421]/80">Applicant:</span>
                  <span className="font-semibold text-[#173421]">{fullName}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#00521a]/10 pb-2">
                  <span className="text-[#173421]/80">Email:</span>
                  <span className="text-[#173421]">{email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#173421]/80">Submission Status:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00521a] text-white text-xs font-bold uppercase tracking-wider">
                    Pending Review
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#173421]/80 leading-relaxed max-w-xl mx-auto">
                Your application dossier and passport photograph have been recorded in our administrative system and dispatched to the Review Committee. Our Human Capital desk will review your credentials and contact you via email or phone within <strong>3 to 5 business days</strong> for orientation.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="home-button inline-flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Application Slip</span>
                </button>
                <button
                  onClick={() => {
                    setSubmittedData(null)
                    window.location.reload()
                  }}
                  className="home-button-outline inline-flex items-center gap-2"
                >
                  <span>Submit Another Application</span>
                </button>
              </div>

              <div className="pt-6 border-t border-[#00521a]/10 text-xs text-[#173421]/60">
                You may also reach our office directly at <strong>883 Olu Awotesu Street, Jabi, Abuja</strong> or phone <strong>08038817059</strong>.
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* ─── 3. OFFICIAL APPLICATION FORM ─── */
        <section className="py-12 sm:py-20">
          <div className="home-shell max-w-4xl mx-auto">
            {/* Error Notification */}
            {errorMessage && (
              <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* ─── PASSPORT PHOTOGRAPH UPLOAD ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00521a]/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                      Mandatory Identification
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#173421]">
                      Applicant Passport Photograph
                    </h3>
                  </div>
                  <span className="text-xs text-[#df6827] font-semibold bg-[#df6827]/10 px-3 py-1 rounded-full self-start">
                    Required for official file
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                  {/* Photo Preview Container */}
                  <div className="relative w-40 h-48 rounded-2xl overflow-hidden bg-[#12291b]/5 border-2 border-dashed border-[#00521a]/30 flex flex-col items-center justify-center text-center p-3 shrink-0">
                    {passportPreview ? (
                      <Image
                        src={passportPreview}
                        alt="Uploaded passport preview"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-[#173421]/60">
                        <Camera className="w-8 h-8 text-[#00521a]" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                          Passport Photo Preview
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Upload Controls */}
                  <div className="space-y-3 text-center sm:text-left flex-1">
                    <p className="text-sm text-[#173421]/80 leading-relaxed">
                      Please upload a clear, front-facing, recent passport-sized photograph. White or light background is recommended. Max file size: <strong>5MB</strong> (JPG or PNG).
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start pt-1">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-5 py-2.5 rounded-full bg-[#00521a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#12291b] transition-colors inline-flex items-center gap-2 shadow-sm"
                      >
                        <Upload className="w-4 h-4" />
                        <span>{passportPreview ? "Change Photo" : "Upload Passport Photo"}</span>
                      </button>
                      {passportPreview && (
                        <button
                          type="button"
                          onClick={() => setPassportPreview("")}
                          className="px-4 py-2.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider hover:bg-red-200 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── SECTION A: PERSONAL INFORMATION ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section A
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Full Name (Surname First) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Banigo, Tamuno Michael"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* DOB */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Gender */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Gender
                    </label>
                    <div className="flex items-center gap-6 pt-2 text-sm text-[#173421]">
                      {["Male", "Female", "Prefer not to say"].map((g) => (
                        <label key={g} className="flex items-center gap-2 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="gender"
                            value={g.toLowerCase()}
                            checked={gender === g.toLowerCase()}
                            onChange={() => setGender(g.toLowerCase())}
                            className="accent-[#00521a] w-4 h-4"
                          />
                          <span>{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Nationality */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Nationality
                    </label>
                    <input
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      placeholder="Nigerian"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* State of Origin */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      State of Origin
                    </label>
                    <input
                      type="text"
                      value={stateOfOrigin}
                      onChange={(e) => setStateOfOrigin(e.target.value)}
                      placeholder="e.g., Rivers, Delta, Bayelsa, FCT"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* LGA */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Local Government Area (LGA)
                    </label>
                    <input
                      type="text"
                      value={lga}
                      onChange={(e) => setLga(e.target.value)}
                      placeholder="e.g., Bonny, Port Harcourt, Municipal"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0803XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Alternative Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Alternative Phone
                    </label>
                    <input
                      type="tel"
                      value={alternativePhone}
                      onChange={(e) => setAlternativePhone(e.target.value)}
                      placeholder="Optional secondary line"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Residential Address */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Residential Street Address
                    </label>
                    <input
                      type="text"
                      value={residentialAddress}
                      onChange={(e) => setResidentialAddress(e.target.value)}
                      placeholder="House No., Street Name, Area"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g., Abuja, Port Harcourt"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      State
                    </label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="e.g., Rivers, FCT Abuja"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Occupation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Occupation
                    </label>
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="e.g., Student, Nurse, Software Developer, Teacher"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Organization / Institution (if applicable)
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company, Ministry, or University"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>
                </div>
              </div>

              {/* ─── SECTION B: EMERGENCY CONTACT ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section B
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Emergency Contact
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      value={emergencyName}
                      onChange={(e) => setEmergencyName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Relationship
                    </label>
                    <input
                      type="text"
                      value={emergencyRelationship}
                      onChange={(e) => setEmergencyRelationship(e.target.value)}
                      placeholder="e.g., Parent, Sibling, Spouse, Guardian"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={emergencyPhone}
                      onChange={(e) => setEmergencyPhone(e.target.value)}
                      placeholder="Emergency phone"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Address
                    </label>
                    <input
                      type="text"
                      value={emergencyAddress}
                      onChange={(e) => setEmergencyAddress(e.target.value)}
                      placeholder="Residential address"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>
                </div>
              </div>

              {/* ─── SECTION C: VOLUNTEER AVAILABILITY ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section C
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Volunteer Availability
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-2">
                      Which days are you available to volunteer? (Tick all that apply)
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {daysOfWeek.map((day) => {
                        const checked = selectedDays.includes(day)
                        return (
                          <button
                            type="button"
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                              checked
                                ? "bg-[#00521a] text-white border-[#00521a] shadow-sm"
                                : "bg-white text-[#173421]/80 border-[#00521a]/20 hover:border-[#00521a]"
                            }`}
                          >
                            {day}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#00521a]/10">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-2">
                      Preferred Time
                    </label>
                    <div className="flex flex-wrap gap-6 text-sm text-[#173421]">
                      {[
                        { label: "Morning", val: "morning" },
                        { label: "Afternoon", val: "afternoon" },
                        { label: "Full Day", val: "full_day" },
                      ].map((t) => (
                        <label key={t.val} className="flex items-center gap-2 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="preferredTime"
                            value={t.val}
                            checked={preferredTime === t.val}
                            onChange={() => setPreferredTime(t.val)}
                            className="accent-[#00521a] w-4 h-4"
                          />
                          <span>{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── SECTION D: AREA OF INTEREST ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section D
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Area of Interest
                  </h3>
                  <p className="text-xs text-[#173421]/70 mt-1">
                    Which area would you like to volunteer in? (Tick all that apply)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interestAreasList.map((interest) => {
                    const checked = selectedInterests.includes(interest)
                    return (
                      <div
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3.5 rounded-2xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-2 ${
                          checked
                            ? "bg-[#00521a]/10 border-[#00521a] text-[#00521a] font-bold shadow-sm"
                            : "bg-[#faf7f0]/40 border-[#00521a]/15 text-[#173421]/80 hover:border-[#00521a]/40"
                        }`}
                      >
                        <span>{interest}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            checked ? "bg-[#00521a] border-[#00521a] text-white" : "border-[#173421]/30"
                          }`}
                        >
                          {checked && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-1.5">
                    Other Area of Interest:
                  </label>
                  <input
                    type="text"
                    value={otherInterest}
                    onChange={(e) => setOtherInterest(e.target.value)}
                    placeholder="Specify other areas if not listed above"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                  />
                </div>
              </div>

              {/* ─── SECTION E: EDUCATION ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section E
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-2">
                      Highest Qualification
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {qualifications.map((q) => (
                        <label
                          key={q}
                          className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2 ${
                            highestQualification === q
                              ? "bg-[#00521a] border-[#00521a] text-white font-bold"
                              : "bg-[#faf7f0]/40 border-[#00521a]/15 text-[#173421]/80 hover:border-[#00521a]/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="qualification"
                            value={q}
                            checked={highestQualification === q}
                            onChange={() => setHighestQualification(q)}
                            className="hidden"
                          />
                          <span>{q}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                        Course of Study
                      </label>
                      <input
                        type="text"
                        value={courseOfStudy}
                        onChange={(e) => setCourseOfStudy(e.target.value)}
                        placeholder="e.g., Computer Science, Mass Communication, Public Health"
                        className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                        Institution Attended
                      </label>
                      <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g., University of Port Harcourt, FUTO, UniAbuja"
                        className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── SECTION F: EXPERIENCE ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section F
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Experience
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-2">
                      Do you have previous volunteer experience?
                    </label>
                    <div className="flex items-center gap-6 text-sm text-[#173421]">
                      <label className="flex items-center gap-2 cursor-pointer font-medium">
                        <input
                          type="radio"
                          name="experience"
                          value="yes"
                          checked={hasExperience === "yes"}
                          onChange={() => setHasExperience("yes")}
                          className="accent-[#00521a] w-4 h-4"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-medium">
                        <input
                          type="radio"
                          name="experience"
                          value="no"
                          checked={hasExperience === "no"}
                          onChange={() => setHasExperience("no")}
                          className="accent-[#00521a] w-4 h-4"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {hasExperience === "yes" && (
                    <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#00521a]/15 space-y-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#00521a]">
                        Previous Experience Details:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-[#173421]">Organization</label>
                          <input
                            type="text"
                            value={prevOrg}
                            onChange={(e) => setPrevOrg(e.target.value)}
                            placeholder="Name of Organization"
                            className="w-full px-3 py-2 rounded-lg border border-[#00521a]/20 bg-white text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-[#173421]">Position / Role</label>
                          <input
                            type="text"
                            value={prevRole}
                            onChange={(e) => setPrevRole(e.target.value)}
                            placeholder="e.g. Field Volunteer, Tutor"
                            className="w-full px-3 py-2 rounded-lg border border-[#00521a]/20 bg-white text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-[#173421]">Duration</label>
                          <input
                            type="text"
                            value={prevDuration}
                            onChange={(e) => setPrevDuration(e.target.value)}
                            placeholder="e.g. 6 Months (2024)"
                            className="w-full px-3 py-2 rounded-lg border border-[#00521a]/20 bg-white text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ─── SECTION G: SKILLS ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section G
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Skills &amp; Competencies
                  </h3>
                  <p className="text-xs text-[#173421]/70 mt-1">
                    Please tick your relevant skills.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {skillsList.map((skill) => {
                    const checked = selectedSkills.includes(skill)
                    return (
                      <div
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-1.5 ${
                          checked
                            ? "bg-[#00521a] border-[#00521a] text-white font-bold"
                            : "bg-[#faf7f0]/40 border-[#00521a]/15 text-[#173421]/80 hover:border-[#00521a]/30"
                        }`}
                      >
                        <span className="truncate">{skill}</span>
                        {checked && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </div>
                    )
                  })}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-1.5">
                    Other Skills:
                  </label>
                  <input
                    type="text"
                    value={otherSkills}
                    onChange={(e) => setOtherSkills(e.target.value)}
                    placeholder="e.g., First Aid, French translation, Video Editing, Python"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                  />
                </div>
              </div>

              {/* ─── SECTION H: MOTIVATION ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section H
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Motivation &amp; Objectives
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      1. Why would you like to volunteer with the Caywood Brown Foundation?
                    </label>
                    <textarea
                      rows={3}
                      value={whyVolunteer}
                      onChange={(e) => setWhyVolunteer(e.target.value)}
                      placeholder="Share your inspiration for joining our community initiatives..."
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      2. What do you hope to gain from volunteering with us?
                    </label>
                    <textarea
                      rows={3}
                      value={hopeToGain}
                      onChange={(e) => setHopeToGain(e.target.value)}
                      placeholder="e.g. Leadership experience, field community knowledge, career development..."
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      3. Describe any special skills, certifications, or experience relevant to the role:
                    </label>
                    <textarea
                      rows={2}
                      value={specialSkills}
                      onChange={(e) => setSpecialSkills(e.target.value)}
                      placeholder="Certificates, specialized training, language proficiencies..."
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      4. What knowledge, skill or experience are you able to bring to the foundation?
                    </label>
                    <textarea
                      rows={3}
                      value={knowledgeBrought}
                      onChange={(e) => setKnowledgeBrought(e.target.value)}
                      placeholder="Your unique strengths, perspectives, or technical capabilities..."
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>
                </div>
              </div>

              {/* ─── SECTION I: HEALTH INFORMATION ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section I
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Health Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421] block mb-2">
                      Do you have any medical condition or disability we should be aware of to support your volunteering?
                    </label>
                    <div className="flex items-center gap-6 text-sm text-[#173421]">
                      <label className="flex items-center gap-2 cursor-pointer font-medium">
                        <input
                          type="radio"
                          name="health"
                          value="no"
                          checked={hasMedical === "no"}
                          onChange={() => setHasMedical("no")}
                          className="accent-[#00521a] w-4 h-4"
                        />
                        <span>No</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-medium">
                        <input
                          type="radio"
                          name="health"
                          value="yes"
                          checked={hasMedical === "yes"}
                          onChange={() => setHasMedical("yes")}
                          className="accent-[#00521a] w-4 h-4"
                        />
                        <span>Yes (Please specify)</span>
                      </label>
                    </div>
                  </div>

                  {hasMedical === "yes" && (
                    <div className="pt-2">
                      <textarea
                        rows={3}
                        value={medicalDetails}
                        onChange={(e) => setMedicalDetails(e.target.value)}
                        placeholder="Please describe any medical considerations, allergies, or physical accommodations needed..."
                        className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* ─── SECTION J: REFERENCES ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section J
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    References (Referee 1)
                  </h3>
                  <p className="text-xs text-[#173421]/70 mt-1">
                    Provide one professional, academic, or community referee.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Referee Full Name
                    </label>
                    <input
                      type="text"
                      value={refName}
                      onChange={(e) => setRefName(e.target.value)}
                      placeholder="e.g. Dr. John Nwosu"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Relationship
                    </label>
                    <input
                      type="text"
                      value={refRelationship}
                      onChange={(e) => setRefRelationship(e.target.value)}
                      placeholder="e.g. Academic Supervisor, Former Employer, Mentor"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={refPhone}
                      onChange={(e) => setRefPhone(e.target.value)}
                      placeholder="080XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={refEmail}
                      onChange={(e) => setRefEmail(e.target.value)}
                      placeholder="referee@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm focus:outline-none focus:border-[#00521a]"
                    />
                  </div>
                </div>
              </div>

              {/* ─── SECTION K: DECLARATION ─── */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-6">
                <div className="border-b border-[#00521a]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                    Section K
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    Declaration &amp; Code of Conduct
                  </h3>
                </div>

                <div className="space-y-6">
                  <label className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#c7ed9f]/15 border border-[#00521a]/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="accent-[#00521a] w-5 h-5 shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-[#173421] leading-relaxed">
                      I certify that the information provided in this application is true and complete to the best of my knowledge. I understand that submitting this application does not guarantee acceptance as a volunteer. I agree to abide by the policies, procedures, and code of conduct of the Caywood Brown Foundation.
                    </span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                        Applicant&apos;s Electronic Signature (Type Full Legal Name) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        placeholder="e.g. Tamuno Michael Banigo"
                        className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 text-[#173421] text-sm font-serif italic focus:outline-none focus:border-[#00521a]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#173421]">
                        Application Date
                      </label>
                      <input
                        type="text"
                        disabled
                        value={new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                        className="w-full px-4 py-3 rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/80 text-[#173421]/70 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── FOR OFFICIAL USE ONLY (ADMIN PROCESSING PREVIEW) ─── */}
              <div className="rounded-3xl p-6 sm:p-8 bg-[#12291b] text-[#faf7f0] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f6ce40]">
                    FOR OFFICIAL USE ONLY
                  </span>
                  <span className="text-[11px] text-[#c7ed9f] font-mono">
                    Admin Verification Dossier
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Date Received</span>
                    <span className="font-mono text-white/90">Pending Submission</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Volunteer ID</span>
                    <span className="font-mono text-[#f6ce40]">CBF-VOL-2026-XXXX</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Assigned Department</span>
                    <span className="text-white/90">Review Committee</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Application Status</span>
                    <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-[#c7ed9f] font-bold">
                      Pending
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-white/70 italic pt-2 border-t border-white/10">
                  Submissions are stored securely in Payload CMS and transmitted to the secretariat at <strong>caywoodbrowndocs@gmail.com</strong> or our liaison office at <strong>883 Olu Awotesu Street, Jabi, Abuja</strong>.
                </p>
              </div>

              {/* ─── SUBMISSION CONTROLS ─── */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <p className="text-xs text-[#173421]/75 max-w-sm text-center sm:text-left">
                  By clicking Submit, your application and passport photograph will be directly recorded in our national volunteer registry.
                </p>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="home-button home-button-gold inline-flex items-center gap-2 text-sm px-8 py-3.5 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#12291b] border-t-transparent rounded-full animate-spin" />
                        <span>Registering Application...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Submit Volunteer Application</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* ─── 4. PHYSICAL & EMAIL SUBMISSION NOTICE ─── */}
      <section className="py-16 bg-[#f3ede0] border-t border-[#00521a]/10">
        <div className="home-shell max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#00521a]">
              <Building2 className="w-6 h-6 text-[#df6827]" />
              <h3 className="font-serif text-xl font-bold text-[#173421]">
                Alternative Submission &amp; Physical Office Verification
              </h3>
            </div>
            <p className="text-sm text-[#173421]/80 leading-relaxed">
              Applicants may also download or print this form and submit physically or via scanned PDF with their passport photograph attached:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-[#173421]/90">
              <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#00521a]/10 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#00521a] block">Physical Submission:</span>
                <p>Caywood Brown Foundation Office</p>
                <p className="font-medium">883 Olu Awotesu Street, Jabi, Abuja, Nigeria</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#00521a]/10 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#00521a] block">Email Submission:</span>
                <p>Send completed form and passport to:</p>
                <a href="mailto:caywoodbrowndocs@gmail.com" className="font-bold text-[#00521a] underline">
                  caywoodbrowndocs@gmail.com
                </a>
                <p className="text-[11px] text-[#173421]/60">Helpline: 08038817059</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
