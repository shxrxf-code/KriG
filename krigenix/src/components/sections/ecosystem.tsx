"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Camera, User, Clapperboard, CameraOff,
  Share2, BookOpen,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const brandexServices = [
  { icon: Camera, title: "Content Creation", color: "#2563EB" },
  { icon: User, title: "Personal Branding", color: "#06B6D4" },
  { icon: Clapperboard, title: "Video Editing", color: "#10B981" },
  { icon: CameraOff, title: "Media Production", color: "#2563EB" },
  { icon: Share2, title: "Social Media Content", color: "#06B6D4" },
  { icon: BookOpen, title: "Digital Storytelling", color: "#10B981" },
]

export function Ecosystem() {
  return (
    <Section id="ecosystem" size="lg" className="bg-gray-50">
      <SectionHeader
        badge="Ecosystem"
        title="Our Ecosystem"
        description="KriGenix collaborates with specialized brands to deliver complete business solutions."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2563EB]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-[#0F172A]">KriGenix</span>
            <span className="text-2xl text-[#6B7280] font-light">×</span>
            <span className="text-3xl font-bold text-[#2563EB]">Brandex</span>
          </div>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            A strategic partnership combining technology excellence with creative expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandexServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group p-4 rounded-xl border border-gray-100 bg-gray-50/50 text-center transition-all duration-300 hover:border-[#2563EB]/20 hover:bg-white hover:shadow-md"
              >
                <div
                  className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                    color: service.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-[#0F172A]">
                  {service.title}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}
