"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Rocket,
  Building2,
  Store,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building,
  Briefcase,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const industries = [
  { icon: Rocket, title: "Startups" },
  { icon: Building2, title: "Agencies" },
  { icon: Store, title: "SMEs" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: GraduationCap, title: "Education" },
  { icon: Building, title: "Real Estate" },
  { icon: Briefcase, title: "Professional Services" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Industries() {
  return (
    <Section id="industries" size="md" className="bg-gray-50/80">
      <SectionHeader
        badge="Industries"
        title="Industries We Serve"
        description="We bring our expertise across diverse sectors, delivering tailored technology solutions that drive real results."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative bg-white rounded-xl border border-gray-200/70 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-[#2563EB]/20"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #2563EB0c, #2563EB04)",
                  color: "#2563EB",
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-[#0F172A]">
                {industry.title}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
