"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X, Check, ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const traditional = [
  "Manual Processes",
  "Repetitive Work",
  "Slow Operations",
  "Limited Scalability",
]

const withKrigenix = [
  "AI-Powered Automation",
  "Intelligent Workflows",
  "Faster Operations",
  "Scalable Systems",
  "Better Customer Experience",
]

export function WhyKrigenix() {
  return (
    <Section id="why-krigenix" size="lg" className="bg-[#0F172A]">
      <SectionHeader
        badge="Why KriGenix"
        title="The KriGenix Advantage"
        description="See how we transform traditional businesses into intelligent, automated enterprises."
        className="text-white [&_h2]:text-white [&_p]:text-gray-400"
      />
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-xl font-semibold text-red-400 mb-6">
            Traditional Approach
          </h3>
          <ul className="space-y-4">
            {traditional.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 rounded-2xl p-8 border border-[#2563EB]/20"
        >
          <h3 className="text-xl font-semibold text-[#06B6D4] mb-6">
            With KriGenix
          </h3>
          <ul className="space-y-4">
            {withKrigenix.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Button size="lg" variant="secondary" className="group" asChild>
          <a href="#contact">
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </motion.div>
    </Section>
  )
}
