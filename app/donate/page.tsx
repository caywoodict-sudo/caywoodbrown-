import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Heart, Gift, Lock, CreditCard, Wallet, AlertCircle } from "lucide-react"
import { GraduationCap, Users, ShieldCheck, DollarSign } from "lucide-react"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleDonationSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
    }, 2000)
  }

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount.toString())
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Children smiling in a classroom"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur-sm mb-4">
            Make a Difference
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Support Our Mission</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Your contribution helps us continue our work of empowering communities through education, support, and
            opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#donate-now">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#monthly-giving">Become a Monthly Donor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Your Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">How Your Donation Helps</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Every contribution to the Caywood Brown Foundation makes a meaningful difference in the lives of the
              people we serve. Here's how your donation creates impact:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">${area.amount}</span>
                      <span className="text-amber-600 font-medium">Provides</span>
                    </div>
                    <p className="text-gray-600">{area.provides}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="w-full py-16 md:py-24 bg-gray-50" id="donate-now">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Donation Options
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Make a Donation</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Choose the donation option that works best for you. Every gift, regardless of size, helps us continue our
              mission.
            </p>
            <div className="flex items-center justify-center mt-4">
              <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600 font-medium">Secure, encrypted donations</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">One-Time Donation</h3>
                <p className="text-gray-600 mb-6">
                  Make a one-time donation to support our programs and services. Choose the amount that works for you.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[25, 50, 100, 250, 500, 1000].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="border-amber-200 hover:bg-amber-50 hover:border-amber-300"
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="space-y-4 mb-6">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="custom-amount"
                      id="custom-amount"
                      className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10"
                      placeholder="0.00"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  onClick={handleDonationSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Donate Now"}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-amber-50" id="monthly-giving">
              <CardContent className="p-8">
                <div className="inline-block rounded-full bg-amber-200 px-3 py-1 text-sm font-medium text-amber-800 mb-4">
                  Recommended
                </div>
                <h3 className="text-2xl font-bold mb-6">Monthly Giving</h3>
                <p className="text-gray-600 mb-6">
                  Join our community of monthly donors and provide sustainable support for our ongoing programs.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[10, 25, 50, 100, 200, 500].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="border-amber-300 hover:bg-amber-100 hover:border-amber-400"
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}/mo
                    </Button>
                  ))}
                </div>
                <div className="space-y-4 mb-6">
                  <label htmlFor="custom-monthly" className="block text-sm font-medium text-gray-700">
                    Custom Monthly Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="custom-monthly"
                      id="custom-monthly"
                      className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">/mo</span>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  onClick={handleDonationSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Become a Monthly Donor"}
                </Button>
                <div className="mt-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Monthly donations provide reliable funding that helps us plan and sustain our programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Options - New Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Secure Payment Options</h3>

            <Tabs defaultValue="credit-card" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="credit-card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Credit Card</span>
                </TabsTrigger>
                <TabsTrigger value="paypal" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span>PayPal</span>
                </TabsTrigger>
                <TabsTrigger value="bank" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Bank Transfer</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credit-card">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <form onSubmit={handleDonationSubmit}>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="card-name" className="text-sm font-medium">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            id="card-name"
                            name="name"
                            className="border border-gray-300 rounded-md p-2 text-sm"
                            placeholder="John Smith"
                            value={donorInfo.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid gap-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="border border-gray-300 rounded-md p-2 text-sm"
                            placeholder="you@example.com"
                            value={donorInfo.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid gap-2">
                          <label htmlFor="card-number" className="text-sm font-medium">
                            Card Number
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="card-number"
                              className="border border-gray-300 rounded-md p-2 pl-10 text-sm w-full"
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                              <Image src="/placeholder.svg?text=VISA" alt="Visa" width={24} height={16} />
                              <Image src="/placeholder.svg?text=MC" alt="Mastercard" width={24} height={16} />
                              <Image src="/placeholder.svg?text=AMEX" alt="American Express" width={24} height={16} />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <label htmlFor="expiry-date" className="text-sm font-medium">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="expiry-date"
                              className="border border-gray-300 rounded-md p-2 text-sm"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <label htmlFor="cvv" className="text-sm font-medium">
                              CVV
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="cvv"
                                className="border border-gray-300 rounded-md p-2 text-sm"
                                placeholder="123"
                                required
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-help group">
                                <span className="h-4 w-4 text-gray-400">?</span>
                                <div className="hidden group-hover:block absolute bottom-full right-0 bg-black text-white text-xs rounded p-2 min-w-[150px]">
                                  The 3-digit code on the back of your card
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Lock className="h-4 w-4 text-green-600" />
                          <span>Your payment information is encrypted and secure</span>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-amber-500 hover:bg-amber-600 mt-2"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            "Complete Donation"
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="paypal">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Image
                        src="/placeholder.svg?height=60&width=150&text=PayPal"
                        alt="PayPal"
                        width={150}
                        height={60}
                        className="mx-auto"
                      />
                    </div>
                    <p className="text-gray-600 mb-6">
                      You will be redirected to PayPal to complete your donation securely.
                    </p>
                    <Button className="bg-[#0070ba] hover:bg-[#005ea6] mx-auto px-8">
                      Continue with PayPal
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bank">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-medium mb-4">Bank Transfer Information</h4>
                    <div className="grid gap-4 mb-6">
                      <div className="grid grid-cols-3 text-sm border-b border-gray-100 pb-2">
                        <span className="font-medium text-gray-500">Account Name:</span>
                        <span className="col-span-2">Caywood Brown Foundation</span>
                      </div>
                      <div className="grid grid-cols-3 text-sm border-b border-gray-100 pb-2">
                        <span className="font-medium text-gray-500">Bank Name:</span>
                        <span className="col-span-2">First National Bank</span>
                      </div>
                      <div className="grid grid-cols-3 text-sm border-b border-gray-100 pb-2">
                        <span className="font-medium text-gray-500">Account Number:</span>
                        <span className="col-span-2">0123456789</span>
                      </div>
                      <div className="grid grid-cols-3 text-sm border-b border-gray-100 pb-2">
                        <span className="font-medium text-gray-500">Routing Number:</span>
                        <span className="col-span-2">987654321</span>
                      </div>
                      <div className="grid grid-cols-3 text-sm">
                        <span className="font-medium text-gray-500">Reference:</span>
                        <span className="col-span-2">Your Name - Donation</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
                      <InfoIcon className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        Please email a confirmation of your transfer to{" "}
                        <a
                          href="mailto:donations@caywoodnbrown.org"
                          className="text-amber-600 hover:underline"
                        >
                          donations@caywoodnbrown.org
                        </a>{" "}
                        so we can acknowledge your generous contribution.
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <h4 className="font-medium">Secure Donation Protection</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                All donations to the Caywood Brown Foundation are processed using industry-standard encryption and security
                protocols:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Fraud Protection</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Data Privacy Guaranteed</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 py-2 border-t border-gray-200">
                <Image src="/placeholder.svg?height=30&width=70&text=Stripe" alt="Stripe" width={70} height={30} />
                <Image src="/placeholder.svg?height=30&width=70&text=Norton" alt="Norton Secured" width={70} height={30} />
                <Image src="/placeholder.svg?height=30&width=70&text=SSL" alt="SSL Secured" width={70} height={30} />
                <Image src="/placeholder.svg?height=30&width=70&text=PCI" alt="PCI Compliant" width={70} height={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Giving */}
      <section className="w-full py-16 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
                Recognition
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Donor Recognition</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are deeply grateful for the generosity of our donors. Your support makes our work possible, and we
                are committed to recognizing your contributions.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Donor Circles</h3>
                <div className="space-y-3">
                  {donorCircles.map((circle, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`h-4 w-4 rounded-full mr-3 ${circle.color}`} aria-hidden="true"></div>
                      <div>
                        <span className="font-medium">{circle.name}:</span>{" "}
                        <span className="text-gray-600">{circle.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  All donors receive recognition in our annual report and invitations to special events. Donors at
                  higher levels receive additional benefits and recognition opportunities.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Donor recognition wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Find answers to common questions about donating to the Caywood Brown Foundation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions about donating? Our team is here to help. Contact us for more information.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-amber-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Join Us in Making a Difference</h2>
          <p className="mx-auto max-w-[800px] text-white/90 text-lg mb-8">
            Your support helps us create lasting positive change in the communities we serve. Together, we can build a
            brighter future for all.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-white/90 font-medium px-8 py-6 text-lg h-auto"
            asChild
          >
            <Link href="#donate-now">Donate Today</Link>
          </Button>
        </div>
      </section>

      {/* Payment Confirmation Section */}
      {paymentComplete && (
        <section className="w-full py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Thank You for Your Donation!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your generous contribution of ${donationAmount} has been received and will make a meaningful difference in the lives of those we serve.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-bold mb-4">Donation Receipt</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-500">Donation ID</p>
                  <p className="font-medium">CBF-{Math.floor(Math.random() * 100000)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">${donationAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">{paymentMethod === 'credit-card' ? 'Credit Card' : paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Donor</p>
                  <p className="font-medium">{donorInfo.name || 'Anonymous'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{donorInfo.email || 'N/A'}</p>
                </div>
              </div>
              <div className="border-t border-gray-100 mt-6 pt-6">
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                  <p>A receipt has been emailed to you for your tax records. Contact us if you don't receive it within 24 hours.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What Happens Next?</h3>
              <p className="text-gray-700">
                Your donation will be put to work immediately to support our programs. We'll keep you updated on the impact of your contribution through our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button className="bg-amber-500 hover:bg-amber-600" asChild>
                  <Link href="/programs">Explore Our Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

// Define InfoIcon component since it's not imported
function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

const impactAreas = [
  {
    title: "Education",
    description: "Support educational programs that provide opportunities for students of all ages.",
    amount: 50,
    provides: "Educational materials for one student for a semester",
    icon: <GraduationCap className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Education",
  },
  {
    title: "Community Development",
    description: "Help strengthen communities through leadership training and local initiatives.",
    amount: 100,
    provides: "Training for a community leader to implement local projects",
    icon: <Users className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Community",
  },
  {
    title: "Health & Wellness",
    description: "Support programs that improve access to healthcare and promote wellness.",
    amount: 75,
    provides: "Health screenings for a family of four",
    icon: <Heart className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Health",
  },
]

const donorCircles = [
  {
    name: "Friend Circle",
    amount: "$1 - $999",
    color: "bg-amber-300",
  },
  {
    name: "Supporter Circle",
    amount: "$1,000 - $4,999",
    color: "bg-amber-400",
  },
  {
    name: "Advocate Circle",
    amount: "$5,000 - $9,999",
    color: "bg-amber-500",
  },
  {
    name: "Champion Circle",
    amount: "$10,000 - $24,999",
    color: "bg-amber-600",
  },
  {
    name: "Leadership Circle",
    amount: "$25,000+",
    color: "bg-amber-700",
  },
]

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, the Caywood Brown Foundation is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your donation.",
  },
  {
    question: "Can I specify how my donation is used?",
    answer:
      "Yes, you can designate your donation for a specific program or initiative. If you have a particular area of interest, please indicate this when making your donation or contact us to discuss your preferences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, bank transfers, and checks. For information about other payment methods or for assistance with your donation, please contact our development team.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Approximately 85% of all donations go directly to our programs and services, with the remaining 15% supporting administrative costs and fundraising efforts that allow us to continue our work.",
  },
  {
    question: "Can I make an anonymous donation?",
    answer:
      "Yes, we respect your privacy and offer the option to make anonymous donations. You can indicate your preference for anonymity when making your donation.",
  },
  {
    question: "How do I update my recurring donation?",
    answer:
      "To update or cancel a recurring donation, please contact our development team. We can assist you with changes to your donation amount, frequency, payment method, or other details.",
  },
]
