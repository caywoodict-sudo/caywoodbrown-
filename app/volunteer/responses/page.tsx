"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Users,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Download,
  ShieldCheck,
  Building2,
  Award,
  ArrowLeft,
  RefreshCw
} from "lucide-react"

export default function VolunteerResponsesPage() {
  const [applications, setApplications] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const fetchApplications = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/volunteers")
      if (res.ok) {
        const data = await res.json()
        if (data.docs) {
          setApplications(data.docs)
        }
      }
    } catch (err) {
      console.warn("Failed to fetch applications:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      (app.fullName && app.fullName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (app.email && app.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (app.phone && app.phone.includes(searchQuery)) ||
      (app.volunteerId && app.volunteerId.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus =
      filterStatus === "all" ||
      (app.status && app.status.toLowerCase() === filterStatus.toLowerCase())

    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#173421] pt-28 pb-20">
      <div className="home-shell max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00521a]/15 pb-6 mb-8">
          <div>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00521a] hover:text-[#173421] mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Application Form</span>
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#173421]">
              Volunteer Application Registry
            </h1>
            <p className="text-xs sm:text-sm text-[#173421]/75 mt-1">
              Caywood Brown Foundation · Secretariat &amp; Review Desk (Abuja Office: 883 Olu Awotesu St, Jabi)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchApplications}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#00521a]/20 text-xs font-bold text-[#00521a] hover:bg-[#00521a]/5 inline-flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <Link
              href="/admin/collections/volunteers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#00521a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#12291b] inline-flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <span>Payload CMS Admin</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Stats Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#173421]/60 block">
              Total Submissions
            </span>
            <p className="font-serif text-3xl font-bold text-[#00521a] mt-1">
              {applications.length}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#df6827] block">
              Pending Review
            </span>
            <p className="font-serif text-3xl font-bold text-[#df6827] mt-1">
              {applications.filter((a) => a.status === "pending" || !a.status).length}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00521a] block">
              Accepted Volunteers
            </span>
            <p className="font-serif text-3xl font-bold text-[#00521a] mt-1">
              {applications.filter((a) => a.status === "accepted").length}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#173421]/60 block">
              Direct Contact
            </span>
            <p className="text-xs font-medium text-[#173421]/80 mt-2">
              caywoodbrowndocs@gmail.com
            </p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#173421]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, or Volunteer ID..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#00521a]/20 bg-[#faf7f0]/40 focus:outline-none focus:border-[#00521a]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["all", "pending", "accepted", "interview"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`text-xs font-bold uppercase px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                  filterStatus === st
                    ? "bg-[#00521a] text-white shadow-sm"
                    : "bg-[#faf7f0] text-[#173421]/70 hover:bg-[#00521a]/10"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Applications List */}
        {isLoading ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-[#00521a]/15">
            <div className="w-8 h-8 border-2 border-[#00521a] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#00521a]">
              Loading Volunteer Registrations...
            </p>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-[#00521a]/15 space-y-3">
            <Users className="w-12 h-12 text-[#00521a]/40 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#173421]">
              No volunteer applications found
            </h3>
            <p className="text-xs text-[#173421]/70 max-w-md mx-auto">
              Applications submitted via the volunteer portal will appear here in real-time, accompanied by their passport photograph and full details.
            </p>
            <div className="pt-2">
              <Link
                href="/volunteer"
                className="px-4 py-2 rounded-xl bg-[#00521a] text-white text-xs font-bold uppercase tracking-wider inline-block"
              >
                Open Application Form
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredApps.map((app) => {
              const isExpanded = expandedId === (app.id || app.volunteerId)
              return (
                <div
                  key={app.id || app.volunteerId}
                  className="bg-white rounded-3xl border border-[#00521a]/15 shadow-sm overflow-hidden transition-all"
                >
                  {/* Card Header Row */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : (app.id || app.volunteerId))}
                    className="p-6 cursor-pointer hover:bg-[#faf7f0]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Passport Thumbnail */}
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#12291b]/10 border border-[#00521a]/20 shrink-0">
                        {app.passportPhoto ? (
                          <Image
                            src={app.passportPhoto}
                            alt={app.fullName || "Volunteer"}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs font-bold text-[#00521a]">
                            {(app.fullName || "V")[0]}
                          </div>
                        )}
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg font-bold text-[#173421]">
                            {app.fullName}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00521a]/10 text-[#00521a] font-bold">
                            {app.volunteerId || "NEW"}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#173421]/75">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#00521a]" />
                            <span>{app.phone}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-[#00521a]" />
                            <span>{app.email}</span>
                          </span>
                          {app.city && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#00521a]" />
                              <span>{app.city}, {app.state}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          app.status === "accepted"
                            ? "bg-[#00521a] text-white"
                            : app.status === "interview"
                            ? "bg-[#f6ce40] text-[#12291b]"
                            : "bg-[#df6827]/15 text-[#df6827]"
                        }`}
                      >
                        {app.status || "Pending"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#faf7f0] flex items-center justify-center text-[#00521a]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div className="p-6 md:p-8 border-t border-[#00521a]/10 bg-[#faf7f0]/30 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Column 1: Personal & Emergency */}
                        <div className="space-y-4 text-xs">
                          <h4 className="font-serif font-bold text-sm text-[#00521a] border-b border-[#00521a]/10 pb-1">
                            Personal &amp; Contact Details
                          </h4>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Gender / DOB</span>
                            <span className="font-semibold">{app.gender || "—"} · {app.dateOfBirth || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">State of Origin / LGA</span>
                            <span className="font-semibold">{app.stateOfOrigin || "—"} · {app.lga || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Residential Address</span>
                            <span className="font-semibold">{app.residentialAddress || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Emergency Contact</span>
                            <span className="font-semibold">{app.emergencyName || "—"} ({app.emergencyRelationship || "—"})</span>
                            <span className="block text-[#173421]/80">{app.emergencyPhone}</span>
                          </div>
                        </div>

                        {/* Column 2: Availability & Education */}
                        <div className="space-y-4 text-xs">
                          <h4 className="font-serif font-bold text-sm text-[#00521a] border-b border-[#00521a]/10 pb-1">
                            Availability &amp; Qualifications
                          </h4>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Available Days</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(app.availableDays || []).map((d: string) => (
                                <span key={d} className="px-2 py-0.5 rounded bg-white border border-[#00521a]/15 text-[10px] font-bold">
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Preferred Time</span>
                            <span className="font-semibold capitalize">{app.preferredTime || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Highest Qualification</span>
                            <span className="font-semibold">{app.highestQualification || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Course &amp; Institution</span>
                            <span className="font-semibold">{app.courseOfStudy || "—"} at {app.institution || "—"}</span>
                          </div>
                        </div>

                        {/* Column 3: Areas of Interest & Skills */}
                        <div className="space-y-4 text-xs">
                          <h4 className="font-serif font-bold text-sm text-[#00521a] border-b border-[#00521a]/10 pb-1">
                            Areas of Interest &amp; Skills
                          </h4>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Areas of Interest</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(app.areasOfInterest || []).map((interest: string) => (
                                <span key={interest} className="px-2 py-0.5 rounded-full bg-[#00521a]/10 text-[#00521a] text-[10px] font-bold">
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Skills Checklist</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(app.skills || []).map((s: string) => (
                                <span key={s} className="px-2 py-0.5 rounded bg-white border border-[#00521a]/15 text-[10px]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-[#173421]/60 block text-[10px] uppercase">Referee Contact</span>
                            <span className="font-semibold">{app.refereeName || "—"} ({app.refereeRelationship || "—"})</span>
                            <span className="block text-[#173421]/80">{app.refereePhone} · {app.refereeEmail}</span>
                          </div>
                        </div>
                      </div>

                      {/* Motivation Narrative */}
                      <div className="pt-4 border-t border-[#00521a]/10 space-y-3 text-xs">
                        <h4 className="font-serif font-bold text-sm text-[#00521a]">
                          Motivation &amp; Value Proposition
                        </h4>
                        {app.whyVolunteer && (
                          <div className="p-3.5 rounded-xl bg-white border border-[#00521a]/10">
                            <span className="text-[#173421]/60 block text-[10px] uppercase font-bold">Why volunteer with CBF:</span>
                            <p className="mt-0.5 leading-relaxed">{app.whyVolunteer}</p>
                          </div>
                        )}
                        {app.hopeToGain && (
                          <div className="p-3.5 rounded-xl bg-white border border-[#00521a]/10">
                            <span className="text-[#173421]/60 block text-[10px] uppercase font-bold">What they hope to gain:</span>
                            <p className="mt-0.5 leading-relaxed">{app.hopeToGain}</p>
                          </div>
                        )}
                        {app.knowledgeBrought && (
                          <div className="p-3.5 rounded-xl bg-white border border-[#00521a]/10">
                            <span className="text-[#173421]/60 block text-[10px] uppercase font-bold">Knowledge / Skills brought to CBF:</span>
                            <p className="mt-0.5 leading-relaxed">{app.knowledgeBrought}</p>
                          </div>
                        )}
                      </div>

                      {/* Admin Actions */}
                      <div className="pt-4 border-t border-[#00521a]/10 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-[11px] text-[#173421]/60">
                          Declaration signed by: <strong>{app.applicantSignature || app.fullName}</strong>
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => window.print()}
                            className="px-4 py-2 rounded-xl bg-white border border-[#00521a]/20 text-xs font-bold text-[#00521a] hover:bg-[#00521a]/5 inline-flex items-center gap-1.5"
                          >
                            <Printer className="w-3.5 h-3.5" />
                            <span>Print Profile</span>
                          </button>
                          <a
                            href={`mailto:${app.email}?subject=Caywood%20Brown%20Foundation%20Volunteer%20Application%20Update%20(${app.volunteerId})`}
                            className="px-4 py-2 rounded-xl bg-[#00521a] text-white text-xs font-bold hover:bg-[#12291b] inline-flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Contact Applicant</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
