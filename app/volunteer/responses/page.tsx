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
  ShieldCheck,
  Building2,
  Award,
  ArrowLeft,
  RefreshCw,
  Lock,
  KeyRound,
  LogOut,
  Save,
  Check
} from "lucide-react"

export default function VolunteerResponsesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [passcode, setPasscode] = useState("")
  const [authError, setAuthError] = useState("")
  const [applications, setApplications] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [updateSuccess, setUpdateSuccess] = useState<string | null>(null)

  // Status edit states for quick inline actions
  const [editStatus, setEditStatus] = useState<Record<string, string>>({})
  const [editDept, setEditDept] = useState<Record<string, string>>({})
  const [editRemarks, setEditRemarks] = useState<Record<string, string>>({})

  // Check stored auth on mount
  useEffect(() => {
    const savedCode = sessionStorage.getItem("cbf_admin_passcode")
    if (savedCode) {
      setPasscode(savedCode)
      fetchApplications(savedCode)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError("")
    if (!passcode) {
      setAuthError("Please enter the administrator passcode.")
      return
    }
    fetchApplications(passcode)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("cbf_admin_passcode")
    setIsAuthenticated(false)
    setPasscode("")
    setApplications([])
  }

  const fetchApplications = async (authCode: string) => {
    setIsLoading(true)
    setAuthError("")
    try {
      const res = await fetch("/api/volunteers", {
        headers: {
          "x-admin-passcode": authCode,
        },
      })
      if (res.ok) {
        const data = await res.json()
        if (data.docs) {
          setApplications(data.docs)
          setIsAuthenticated(true)
          sessionStorage.setItem("cbf_admin_passcode", authCode)
        }
      } else {
        const errData = await res.json()
        setAuthError(errData.error || "Incorrect administrator passcode.")
        setIsAuthenticated(false)
      }
    } catch (err) {
      console.warn("Failed to fetch applications:", err)
      setAuthError("Unable to connect to database. Please try again.")
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickUpdate = async (docId: string) => {
    setUpdatingId(docId)
    try {
      const res = await fetch("/api/volunteers", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-passcode": passcode,
        },
        body: JSON.stringify({
          id: docId,
          status: editStatus[docId],
          assignedDepartment: editDept[docId],
          adminRemarks: editRemarks[docId],
        }),
      })
      if (res.ok) {
        setUpdateSuccess(docId)
        setTimeout(() => setUpdateSuccess(null), 3000)
        fetchApplications(passcode)
      }
    } catch (err) {
      console.error("Failed to update status:", err)
    } finally {
      setUpdatingId(null)
    }
  }

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      (app.fullName && app.fullName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (app.email && app.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (app.phone && app.phone.includes(searchQuery)) ||
      (app.volunteerId && app.volunteerId.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = filterStatus === "all" || app.status === filterStatus
    return matchesSearch && matchesStatus
  })

  // ─── ADMIN PASSCODE VERIFICATION GATE ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0f2316] text-[#faf7f0] flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#c7ed9f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#f6ce40]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full bg-[#173421] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative z-10">
          <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-2xl bg-[#c7ed9f]/20 text-[#c7ed9f] mb-6">
            <Lock className="h-7 w-7" />
          </div>

          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c7ed9f] block mb-1">
              Internal Registry
            </span>
            <h1 className="font-serif text-2xl font-bold text-white">
              Volunteer Applications Gate
            </h1>
            <p className="mt-2 text-xs text-[#faf7f0]/70 leading-relaxed">
              This portal contains confidential personal data and passport photo records. Authorized administrator passcode required.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#c7ed9f] mb-1.5">
                Staff / Admin Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter administrator passcode"
                  className="w-full px-4 py-3 bg-[#0f2316] border border-white/15 rounded-xl text-white placeholder-white/40 focus:border-[#c7ed9f] focus:outline-none text-sm transition-all"
                  autoFocus
                />
                <KeyRound className="absolute right-3.5 top-3.5 h-4 w-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/30 text-xs text-red-200">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-[#c7ed9f] text-[#173421] font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  <span>Unlock Registry Portal</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-3">
            <p className="text-xs text-[#faf7f0]/60">
              Are you a Payload CMS Administrator?
            </p>
            <Link
              href="/admin/collections/volunteers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f6ce40] hover:text-white transition-colors"
            >
              <span>Access via Payload CMS Admin Panel (/admin)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ─── AUTHENTICATED DASHBOARD ───
  return (
    <div className="min-h-screen bg-[#0e2114] text-[#faf7f0] pb-24">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-30 bg-[#173421]/95 backdrop-blur-md border-b border-[#c7ed9f]/20 py-4 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/volunteer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#c7ed9f] transition-colors"
              title="Back to Volunteer Page"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#c7ed9f]" />
                <h1 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Official Volunteer Applications Registry
                </h1>
              </div>
              <p className="text-xs text-[#faf7f0]/70">
                Caywood Brown Foundation · {applications.length} Total Submissions Recorded
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/collections/volunteers"
              className="px-3.5 py-2 rounded-lg bg-[#c7ed9f]/20 hover:bg-[#c7ed9f] text-[#c7ed9f] hover:text-[#173421] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open in Payload CMS</span>
            </Link>
            <button
              onClick={() => fetchApplications(passcode)}
              disabled={isLoading}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#faf7f0] transition-colors"
              title="Refresh submissions"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg bg-red-900/30 hover:bg-red-800/50 text-red-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
              title="Lock portal and sign out"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Lock Portal</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-6">
        {/* Controls: Search & Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#14291a] p-4 rounded-2xl border border-white/10">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#faf7f0]/50" />
            <input
              type="text"
              placeholder="Search candidate name, email, phone, or Volunteer ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0f2316] border border-white/15 rounded-xl text-white placeholder-white/40 focus:border-[#c7ed9f] focus:outline-none text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-[#c7ed9f]" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              aria-label="Filter submissions by status"
              className="bg-[#0f2316] border border-white/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c7ed9f]"
            >
              <option value="all">All Statuses ({applications.length})</option>
              <option value="pending">Pending</option>
              <option value="under-review">Under Review</option>
              <option value="scheduled">Interview Scheduled</option>
              <option value="accepted">Accepted / Enrolled</option>
              <option value="rejected">Not Accepted</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#faf7f0]/70 px-1">
          <span>Showing {filteredApps.length} of {applications.length} candidate applications</span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-[#c7ed9f] hover:underline"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Filtered List</span>
          </button>
        </div>

        {/* List of Applications */}
        {filteredApps.length === 0 ? (
          <div className="bg-[#14291a] rounded-2xl p-12 text-center border border-white/10">
            <Users className="h-12 w-12 mx-auto text-[#c7ed9f]/40 mb-3" />
            <h3 className="font-serif text-lg font-bold text-white">No Volunteer Applications Found</h3>
            <p className="text-xs text-[#faf7f0]/60 max-w-sm mx-auto mt-1">
              {searchQuery || filterStatus !== "all"
                ? "Try adjusting your search criteria or status filter."
                : "New applications submitted through /volunteer will immediately appear here."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredApps.map((app) => {
              const isExpanded = expandedId === app.id
              const currentStatus = editStatus[app.id] ?? app.status ?? "pending"
              const currentDept = editDept[app.id] ?? app.assignedDepartment ?? ""
              const currentRemarks = editRemarks[app.id] ?? app.adminRemarks ?? ""

              return (
                <div
                  key={app.id}
                  className="bg-[#14291a] border border-white/10 rounded-2xl overflow-hidden transition-all shadow-md"
                >
                  {/* Summary Header */}
                  <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5">
                    <div className="flex items-center gap-4">
                      {/* Passport Photo Preview */}
                      <div className="relative w-14 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden bg-black/40 border border-white/20 shrink-0">
                        {app.passportPhoto ? (
                          <Image
                            src={app.passportPhoto}
                            alt={`${app.fullName}'s passport photograph`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-[#faf7f0]/40 text-[9px] text-center p-1">
                            <span>No Photo</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-[#c7ed9f]">
                            {app.volunteerId || "ID: PENDING"}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              app.status === "accepted"
                                ? "bg-green-500/20 text-green-300"
                                : app.status === "rejected"
                                ? "bg-red-500/20 text-red-300"
                                : app.status === "scheduled"
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-amber-500/20 text-amber-300"
                            }`}
                          >
                            {app.status || "pending"}
                          </span>
                          {app.highestQualification && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/70">
                              {app.highestQualification}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-lg font-bold text-white">
                          {app.fullName}
                        </h3>

                        <div className="flex items-center gap-4 text-xs text-[#faf7f0]/70 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-[#c7ed9f]" /> {app.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3 text-[#c7ed9f]" /> {app.phone}
                          </span>
                          {app.state && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-[#c7ed9f]" /> {app.city ? `${app.city}, ` : ""}{app.state}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : app.id)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? "Collapse Dossier" : "View Full Dossier"}</span>
                        {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Full Dossier & Admin Update Controls */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 bg-[#102315] space-y-6">
                      {/* ─── INLINE ADMIN MANAGEMENT CONTROLS ─── */}
                      <div className="p-4 rounded-xl bg-[#173421] border border-[#c7ed9f]/30 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#c7ed9f] flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4" />
                            Official Administrative Decision Controls
                          </span>
                          {updateSuccess === app.id && (
                            <span className="text-xs font-bold text-[#c7ed9f] flex items-center gap-1">
                              <Check className="h-3.5 w-3.5" /> Saved!
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-white/80 mb-1">
                              Application Status:
                            </label>
                            <select
                              value={currentStatus}
                              onChange={(e) =>
                                setEditStatus({ ...editStatus, [app.id]: e.target.value })
                              }
                              aria-label="Application Status"
                              className="w-full bg-[#0f2316] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#c7ed9f]"
                            >
                              <option value="pending">Pending Review</option>
                              <option value="under-review">Under Review</option>
                              <option value="scheduled">Interview Scheduled</option>
                              <option value="accepted">Accepted & Enrolled</option>
                              <option value="rejected">Not Accepted</option>
                              <option value="completed">Completed Service</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-white/80 mb-1">
                              Assigned Department:
                            </label>
                            <select
                              value={currentDept}
                              onChange={(e) =>
                                setEditDept({ ...editDept, [app.id]: e.target.value })
                              }
                              aria-label="Assigned Department"
                              className="w-full bg-[#0f2316] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#c7ed9f]"
                            >
                              <option value="">Unassigned</option>
                              <option value="Healthcare & Immunization">Healthcare & Immunization (IMPA)</option>
                              <option value="Digital Skills & IT">Digital Skills & IT Academy</option>
                              <option value="Creative Arts & Music">Creative Arts & Music Equipment</option>
                              <option value="Youth Rehabilitation & Recovery">Youth Rehabilitation & Recovery</option>
                              <option value="Girl Child Advocacy">Girl Child Advocacy</option>
                              <option value="Graduate Internship Mentorship">Graduate Internship Mentorship</option>
                              <option value="Field Logistics & Community Outreach">Field Logistics</option>
                            </select>
                          </div>

                          <div className="flex items-end">
                            <button
                              onClick={() => handleQuickUpdate(app.id)}
                              disabled={updatingId === app.id}
                              className="w-full py-1.5 px-3 rounded-lg bg-[#c7ed9f] text-[#173421] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-1.5 shadow"
                            >
                              {updatingId === app.id ? (
                                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Save className="h-3.5 w-3.5" />
                              )}
                              <span>Save Decision</span>
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-white/80 mb-1">
                            Staff Remarks / Interview Notes:
                          </label>
                          <textarea
                            value={currentRemarks}
                            onChange={(e) =>
                              setEditRemarks({ ...editRemarks, [app.id]: e.target.value })
                            }
                            rows={2}
                            placeholder="Add evaluation remarks, interview schedule details, or placement notes..."
                            className="w-full bg-[#0f2316] border border-white/20 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#c7ed9f]"
                          />
                        </div>
                      </div>

                      {/* ─── DOSSIER GRID (SECTIONS A THROUGH K) ─── */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                        {/* Section A & B: Personal & Emergency */}
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                            <span className="font-bold uppercase tracking-wider text-[#c7ed9f] block">
                              Personal Information
                            </span>
                            <p><strong className="text-white/60">Gender:</strong> {app.gender || "Not specified"}</p>
                            <p><strong className="text-white/60">Date of Birth:</strong> {app.dateOfBirth || "N/A"}</p>
                            <p><strong className="text-white/60">State / LGA:</strong> {app.stateOfOrigin ? `${app.stateOfOrigin} State` : "N/A"} {app.lga ? `(${app.lga})` : ""}</p>
                            <p><strong className="text-white/60">Residential Address:</strong> {app.residentialAddress || "N/A"}</p>
                            <p><strong className="text-white/60">Occupation / Employer:</strong> {app.occupation || "N/A"} {app.organization ? `@ ${app.organization}` : ""}</p>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                            <span className="font-bold uppercase tracking-wider text-[#f6ce40] block">
                              Emergency Contact &amp; Availability
                            </span>
                            <p><strong className="text-white/60">Emergency Contact:</strong> {app.emergencyName || "N/A"} ({app.emergencyRelationship || "N/A"})</p>
                            <p><strong className="text-white/60">Emergency Phone:</strong> {app.emergencyPhone || "N/A"}</p>
                            <p><strong className="text-white/60">Preferred Time:</strong> {app.preferredTime || "Flexible"}</p>
                            <p><strong className="text-white/60">Available Days:</strong> {Array.isArray(app.availableDays) ? app.availableDays.join(", ") : "Not selected"}</p>
                          </div>
                        </div>

                        {/* Section D & F: Interests, Education & Motivation */}
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                            <span className="font-bold uppercase tracking-wider text-[#c7ed9f] block">
                              Education &amp; Areas of Interest
                            </span>
                            <p><strong className="text-white/60">Qualification:</strong> {app.highestQualification || "N/A"}</p>
                            <p><strong className="text-white/60">Course &amp; School:</strong> {app.courseOfStudy || "N/A"} — {app.institution || "N/A"}</p>
                            <p><strong className="text-white/60">Interests:</strong> {Array.isArray(app.areasOfInterest) ? app.areasOfInterest.join(", ") : "N/A"}</p>
                            <p><strong className="text-white/60">Skills Checklist:</strong> {Array.isArray(app.skills) ? app.skills.join(", ") : "N/A"}</p>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                            <span className="font-bold uppercase tracking-wider text-[#f5a246] block">
                              Referee &amp; Declaration
                            </span>
                            <p><strong className="text-white/60">Character Referee:</strong> {app.refereeName || "N/A"} ({app.refereeRelationship || "N/A"})</p>
                            <p><strong className="text-white/60">Referee Contact:</strong> {app.refereePhone || "N/A"} · {app.refereeEmail || "N/A"}</p>
                            <p><strong className="text-white/60">Digital Signature:</strong> {app.applicantSignature || app.fullName}</p>
                            <p><strong className="text-white/60">Submitted At:</strong> {app.submissionDate || (app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "Recorded")}</p>
                          </div>
                        </div>
                      </div>

                      {/* Motivation Narrative */}
                      {app.whyVolunteer && (
                        <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs space-y-1.5">
                          <strong className="text-[#c7ed9f] block">Applicant Motivation Statement:</strong>
                          <p className="text-white/80 leading-relaxed italic">
                            &ldquo;{app.whyVolunteer}&rdquo;
                          </p>
                          {app.hopeToGain && (
                            <p className="text-white/70 pt-2 border-t border-white/5">
                              <strong>What they hope to gain:</strong> {app.hopeToGain}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
