"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Heart, Lock, CreditCard, Wallet, AlertCircle, ShieldCheck, DollarSign } from "lucide-react"
import { GraduationCap, Users } from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"
import OrganicDivider from "@/components/organic-divider"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
    }, 1800)
  }

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount.toString())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#142118]">
      {/* 1. Farm Africa Hero Section (Deep Forest Green #00521A) */}
      <section className="relative w-full py-24 md:py-32 bg-[#00521A] text-white overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#C7ED9F"
          opacity={0.08}
          className="top-0 right-0 w-[550px] h-[550px]"
        />
        <BotanicalGraphic
          variant="sprouts"
          color="#F6CE40"
          opacity={0.06}
          className="bottom-0 left-0 w-80 h-80"
        />

        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C7ED9F]/20 border border-[#C7ED9F]/30 text-xs font-bold text-[#C7ED9F] uppercase tracking-widest">
            Invest in African Youth
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-tight">
            Empower Futures, <br />
            <span className="text-[#F6CE40]">Transform Generations</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#F2EBD9]/90 leading-relaxed">
            Your support directly funds digital literacy cohorts, creative arts mastery, addiction rehabilitation, and internship programs for underserved young leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="faFlame"
              className="text-sm font-bold uppercase tracking-wider px-9 py-6 h-auto"
              asChild
            >
              <Link href="#donate-now">Donate Today</Link>
            </Button>
            <Button
              size="lg"
              variant="faWhiteOutline"
              className="text-sm font-bold uppercase tracking-wider px-8 py-6 h-auto"
              asChild
            >
              <Link href="#monthly-giving">Become a Monthly Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      <OrganicDivider fillColor="#FAF7F0" />

      {/* 2. Impact Section (Farm Africa Warm Stone Cards) */}
      <section className="w-full py-16 md:py-24 bg-[#FAF7F0]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest mb-3">
              Direct Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Where Your Giving Goes
            </h2>
            <p className="mx-auto max-w-[750px] text-[#142118]/80 text-base sm:text-lg mt-3">
              Every contribution directly equips a young individual with tools, dignity, and career readiness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area, index) => (
              <Card key={index} className="border border-[#00521A]/15 bg-white shadow-sm hover:shadow-lg rounded-3xl overflow-hidden transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-[#00521A]/5">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold">
                      ${area.amount}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E8F8D6] text-[#00521A] flex items-center justify-center shrink-0">
                      {area.icon}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#142118]">{area.title}</h3>
                  </div>
                  <p className="text-[#142118]/75 text-sm leading-relaxed">{area.description}</p>
                  <div className="pt-3 border-t border-[#00521A]/10 flex items-center justify-between text-xs">
                    <span className="text-[#00521A] font-bold uppercase tracking-wider">Provides</span>
                    <span className="text-[#142118]/80 font-medium">{area.provides}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Donation Options (Farm Africa Split Cards) */}
      <section className="w-full py-16 md:py-24 bg-[#F2EBD9] border-y border-[#00521A]/10" id="donate-now">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest mb-3">
              Give Today
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Choose Your Support
            </h2>
            <div className="flex items-center justify-center mt-3 gap-2">
              <ShieldCheck className="h-5 w-5 text-[#00521A]" />
              <span className="text-[#00521A] text-xs uppercase tracking-wider font-bold">
                100% Secure & Encrypted
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* One-Time Giving Card */}
            <Card className="border border-[#00521A]/15 bg-white shadow-md rounded-3xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-wider">
                  Single Gift
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142118]">One-Time Donation</h3>
                <p className="text-sm text-[#142118]/75 leading-relaxed">
                  Make an immediate one-off contribution to supply lab computers, instruments, or educational aid.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[25, 50, 100, 250, 500, 1000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-3 px-4 rounded-full font-bold text-sm border transition-all ${
                        donationAmount === amount.toString()
                          ? "bg-[#00521A] text-white border-[#00521A]"
                          : "bg-[#FAF7F0] border-[#00521A]/20 text-[#00521A] hover:border-[#00521A]"
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  <label htmlFor="custom-amount" className="block text-xs font-bold uppercase tracking-wider text-[#142118]">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold">$</span>
                    <input
                      type="text"
                      id="custom-amount"
                      className="w-full pl-8 pr-4 py-3 rounded-full border border-[#00521A]/20 bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                      placeholder="Other amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  className="w-full text-xs font-bold uppercase tracking-wider py-6"
                  variant="faForest"
                  size="lg"
                  onClick={handleDonationSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Donate Now"}
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Giving Card (Farm Africa Recommended Accent) */}
            <Card className="border-2 border-[#00521A] bg-[#FAF7F0] shadow-xl rounded-3xl overflow-hidden" id="monthly-giving">
              <CardContent className="p-8 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
                  ★ Recommended • Sustained Transformation
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142118]">Monthly Sponsorship</h3>
                <p className="text-sm text-[#142118]/75 leading-relaxed">
                  Join our community of committed champions. Monthly gifts enable uninterrupted rehabilitation cohorts and internship stipends.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[10, 25, 50, 100, 200, 500].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="py-3 px-4 rounded-full font-bold text-sm bg-white border border-[#00521A]/30 text-[#00521A] hover:bg-[#C7ED9F]/40 hover:border-[#00521A] transition-all"
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}/mo
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  <label htmlFor="custom-monthly" className="block text-xs font-bold uppercase tracking-wider text-[#142118]">
                    Custom Monthly Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold">$</span>
                    <input
                      type="text"
                      id="custom-monthly"
                      className="w-full pl-8 pr-12 py-3 rounded-full border border-[#00521A]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                      placeholder="0.00"
                    />
                    <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-[#00521A]">/mo</span>
                  </div>
                </div>
                <Button
                  className="w-full text-xs font-bold uppercase tracking-wider py-6"
                  variant="faFlame"
                  size="lg"
                  onClick={handleDonationSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Become a Monthly Sponsor"}
                </Button>
                <div className="flex items-start gap-2 pt-2 text-xs text-[#00521A]">
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>Reliable monthly giving keeps recovery cohorts funded all year round.</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secure Payment Methods Tabs */}
          <div className="mt-14 max-w-3xl mx-auto">
            <h3 className="font-serif text-xl font-bold mb-6 text-center text-[#142118]">
              Select Payment Method
            </h3>

            <Tabs defaultValue="credit-card" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/70 p-1 rounded-full border border-[#00521A]/15">
                <TabsTrigger value="credit-card" className="rounded-full data-[state=active]:bg-[#00521A] data-[state=active]:text-white font-bold text-xs uppercase tracking-wider">
                  <CreditCard className="h-3.5 w-3.5 mr-1.5" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="paypal" className="rounded-full data-[state=active]:bg-[#00521A] data-[state=active]:text-white font-bold text-xs uppercase tracking-wider">
                  <Wallet className="h-3.5 w-3.5 mr-1.5" />
                  PayPal
                </TabsTrigger>
                <TabsTrigger value="bank" className="rounded-full data-[state=active]:bg-[#00521A] data-[state=active]:text-white font-bold text-xs uppercase tracking-wider">
                  <DollarSign className="h-3.5 w-3.5 mr-1.5" />
                  Bank Wire
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credit-card">
                <Card className="border border-[#00521A]/15 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleDonationSubmit} className="space-y-4">
                      <div className="grid gap-1.5">
                        <label htmlFor="card-name" className="text-xs font-bold uppercase tracking-wider text-[#142118]">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="card-name"
                          name="name"
                          className="border border-[#00521A]/20 rounded-full px-4 py-2.5 text-sm bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          placeholder="Dr. Jane Doe"
                          value={donorInfo.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="grid gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#142118]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="border border-[#00521A]/20 rounded-full px-4 py-2.5 text-sm bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          placeholder="jane@example.com"
                          value={donorInfo.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="grid gap-1.5">
                        <label htmlFor="card-number" className="text-xs font-bold uppercase tracking-wider text-[#142118]">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="card-number"
                          className="border border-[#00521A]/20 rounded-full px-4 py-2.5 text-sm bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-1.5">
                          <label htmlFor="expiry-date" className="text-xs font-bold uppercase tracking-wider text-[#142118]">
                            Expiry
                          </label>
                          <input
                            type="text"
                            id="expiry-date"
                            className="border border-[#00521A]/20 rounded-full px-4 py-2.5 text-sm bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="grid gap-1.5">
                          <label htmlFor="cvv" className="text-xs font-bold uppercase tracking-wider text-[#142118]">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            className="border border-[#00521A]/20 rounded-full px-4 py-2.5 text-sm bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        variant="faFlame"
                        size="lg"
                        className="w-full text-xs font-bold uppercase tracking-wider py-6 mt-4"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing Securely..." : "Complete Donation"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="paypal">
                <Card className="border border-[#00521A]/15 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <p className="text-[#142118]/80 text-sm">
                      You will be securely redirected to PayPal to authorize your gift.
                    </p>
                    <Button variant="faFlame" size="lg" className="px-8 text-xs font-bold uppercase tracking-wider">
                      Continue with PayPal
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bank">
                <Card className="border border-[#00521A]/15 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-8 space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#142118]">Bank Wire Information</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between border-b border-[#00521A]/10 pb-2">
                        <span className="text-[#142118]/70">Account Name:</span>
                        <span className="font-bold text-[#00521A]">Caywood Brown Foundation</span>
                      </div>
                      <div className="flex justify-between border-b border-[#00521A]/10 pb-2">
                        <span className="text-[#142118]/70">Bank Name:</span>
                        <span className="font-bold">First City Monument Bank</span>
                      </div>
                      <div className="flex justify-between border-b border-[#00521A]/10 pb-2">
                        <span className="text-[#142118]/70">Account Number:</span>
                        <span className="font-mono font-bold">0123456789</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Banner (Farm Africa Forest Green #00521A) */}
      <section className="w-full py-20 bg-[#00521A] text-white text-center relative overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#C7ED9F"
          opacity={0.07}
          className="bottom-0 right-0 w-96 h-96"
        />
        <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-5 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F2EBD9]">
            Together, We Empower Tomorrow's Leaders
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg leading-relaxed">
            Your generous contribution allows us to reach more youth across Nigeria and beyond with vocational training, creative empowerment, and drug recovery mentorship.
          </p>
          <div className="pt-2">
            <Button
              size="lg"
              variant="faFlame"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto"
              asChild
            >
              <Link href="#donate-now">Make Your Gift Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const impactAreas = [
  {
    title: "Computer Appreciation & Skills",
    description: "Free beginner-friendly IT training, Microsoft Office literacy, and coding fundamentals for marginalized youth.",
    amount: 50,
    provides: "Hands-on lab access & certification for 1 student",
    icon: <GraduationCap className="h-5 w-5 text-[#00521A]" />,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Youth Rehabilitation & Healing",
    description: "Holistic recovery, clinical counseling, and structured reintegration for youths overcoming substance addiction.",
    amount: 250,
    provides: "3 months of counseling & life skills mentorship",
    icon: <ShieldCheck className="h-5 w-5 text-[#00521A]" />,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Creative Arts & Music Lab",
    description: "Hands-on instrumental training in drums and keyboards, transforming passion into viable creative careers.",
    amount: 100,
    provides: "Studio equipment access & masterclass instruction",
    icon: <Users className="h-5 w-5 text-[#00521A]" />,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
  },
]
