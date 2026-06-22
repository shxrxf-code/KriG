"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Rocket, Building2, Briefcase, Building,
  ShoppingCart, Handshake,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const solutions = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "From MVP to scale. We help startups build modern products, automate operations, and grow faster with lean, efficient technology stacks.",
    challenges: ["Limited resources", "Need for speed", "Scalability concerns"],
    color: "#2563EB",
  },
  {
    icon: Building2,
    title: "Agencies",
    description:
      "Empower your agency with white-label development, automation tools, and scalable infrastructure to deliver more for your clients.",
    challenges: ["Client delivery pressure", "Resource management", "Tool fragmentation"],
    color: "#06B6D4",
  },
  {
    icon: Briefcase,
    title: "SMEs",
    description:
      "Practical automation and digital solutions that help small to medium businesses compete with enterprise-grade technology.",
    challenges: ["Budget constraints", "Legacy processes", "Competitive pressure"],
    color: "#10B981",
  },
  {
    icon: Building,
    title: "Enterprises",
    description:
      "Enterprise-scale digital transformation, custom SaaS platforms, and intelligent automation for complex organizational needs.",
    challenges: ["Complex systems", "Security requirements", "Change management"],
    color: "#2563EB",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "High-converting storefronts, inventory automation, and personalized shopping experiences powered by AI and modern web technologies.",
    challenges: ["Cart abandonment", "Inventory management", "Customer retention"],
    color: "#06B6D4",
  },
  {
    icon: Handshake,
    title: "Service Businesses",
    description:
      "End-to-end digital solutions for service providers including booking systems, client portals, and workflow automation.",
    challenges: ["Booking management", "Client communication", "Service delivery"],
    color: "#10B981",
  },
]

export function Solutions() {
  return (
    <Section id="solutions" size="lg" className="bg-gray-50">
      <SectionHeader
        badge="Solutions"
        title="Industry-Specific Solutions"
        description="Tailored technology solutions that address the unique challenges of your industry."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-transparent hover:shadow-xl"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${solution.color}15, ${solution.color}08)`,
                  color: solution.color,
                }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                {solution.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Common challenges
                </p>
                {solution.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="flex items-center gap-2 text-xs text-[#6B7280]"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: solution.color }}
                    />
                    {challenge}
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
