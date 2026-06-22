"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Cpu,
  Layout,
  Wrench,
  Zap,
  HeartHandshake,
  Lightbulb,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

const reasons = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description:
      "Leverage modern AI technologies to automate operations and improve efficiency.",
    color: "#2563EB",
  },
  {
    icon: Layout,
    title: "Scalable Architecture",
    description:
      "Build systems designed to grow with your business.",
    color: "#06B6D4",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Every solution is tailored to business requirements rather than using generic templates.",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Fast, secure, and optimized digital experiences.",
    color: "#2563EB",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Ongoing support, maintenance, and continuous improvements.",
    color: "#06B6D4",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "Modern technologies and best practices that keep businesses ahead of competitors.",
    color: "#10B981",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function WhyChoose() {
  return (
    <Section id="why-choose" size="lg" className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#2563EB]/03 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#06B6D4]/03 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-[#2563EB] mb-4">
            Why KriGenix
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
            Why Businesses Choose KriGenix
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-[#6B7280] max-w-2xl mx-auto">
            We focus on building intelligent, scalable, and future-ready digital
            solutions tailored to business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative bg-white rounded-xl border border-gray-200/70 p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                  style={{
                    background: `linear-gradient(135deg, ${reason.color}12, ${reason.color}06)`,
                    color: reason.color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {reason.description}
                </p>

                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${reason.color}40, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
