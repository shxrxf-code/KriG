"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Search, Map, Palette, Code,
  Rocket, TrendingUp,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understanding business requirements",
    detail: "We dive deep into your business, goals, and challenges to craft a tailored strategy.",
    color: "#2563EB",
  },
  {
    icon: Map,
    title: "Strategy",
    description: "Planning the best solution",
    detail: "We architect a comprehensive plan that aligns technology with your business objectives.",
    color: "#06B6D4",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive experiences",
    detail: "Our designers craft beautiful, user-centric interfaces that engage and convert.",
    color: "#10B981",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Building scalable systems",
    detail: "We build robust, scalable solutions using modern frameworks and best practices.",
    color: "#2563EB",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launching securely",
    detail: "We ensure smooth, secure deployment with thorough testing and monitoring.",
    color: "#06B6D4",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Continuous optimization",
    detail: "We continuously monitor, optimize, and scale your solution for peak performance.",
    color: "#10B981",
  },
]

export function Process() {
  return (
    <Section id="process" size="lg">
      <SectionHeader
        badge="Our Process"
        title="How We Deliver Results"
        description="A proven methodology that ensures successful delivery every time."
      />
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-[#10B981] -translate-x-1/2" />

        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:flex ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`p-6 rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg ${
                      isLeft ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                        color: step.color,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{
                          background: `${step.color}15`,
                          color: step.color,
                        }}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-[#0F172A]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-[#2563EB] mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-md z-10 flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
