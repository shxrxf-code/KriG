"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const services = [
  "AI Automation",
  "AI Agents",
  "Web Development",
  "Mobile App Development",
  "SaaS Development",
  "Cloud Solutions",
  "UI/UX Design",
  "Digital Transformation",
  "Other",
]

const budgets = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
]

export function Contact() {
  const [state, setState] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [focusedField, setFocusedField] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setState((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <Section id="contact" size="lg">
        <SectionHeader
          badge="Contact"
          title="Thank You"
          description="We've received your consultation request and will get back to you within 24 hours."
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-[#10B981]/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#10B981]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
            Booking Confirmed
          </h3>
          <p className="text-[#6B7280] mb-8">
            Our team will review your request and reach out shortly.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </motion.div>
      </Section>
    )
  }

  return (
    <Section id="contact" size="lg">
      <SectionHeader
        badge="Contact"
        title="Book a Consultation"
        description="Tell us about your project and we'll create a custom plan for your business."
      />
      <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Let&apos;s Build Something Great
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Ready to transform your business? Fill out the form and our team
              will reach out within 24 hours to schedule your free consultation.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280]">Phone</p>
                <p className="text-sm font-medium text-[#0F172A]">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#06B6D4]" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280]">Email</p>
                <p className="text-sm font-medium text-[#0F172A]">
                  hello@krigenix.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-medium text-[#6B7280]">
                Name *
              </Label>
              <Input
                id="name"
                required
                placeholder="Your name"
                value={state.name}
                onChange={(e) => updateField("name", e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs font-medium text-[#6B7280]">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Company name"
                value={state.company}
                onChange={(e) => updateField("company", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-medium text-[#6B7280]">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={state.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-medium text-[#6B7280]">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={state.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-xs font-medium text-[#6B7280]">
                Service Required *
              </Label>
              <select
                id="service"
                required
                value={state.service}
                onChange={(e) => updateField("service", e.target.value)}
                className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-xs font-medium text-[#6B7280]">
                Budget Range
              </Label>
              <select
                id="budget"
                value={state.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <option value="" disabled>
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="details" className="text-xs font-medium text-[#6B7280]">
              Project Details *
            </Label>
            <Textarea
              id="details"
              required
              placeholder="Tell us about your project, goals, and timeline..."
              value={state.details}
              onChange={(e) => updateField("details", e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" size="lg" className="w-full group">
            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            Send Consultation Request
          </Button>

          <p className="text-xs text-[#6B7280] text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </Section>
  )
}
