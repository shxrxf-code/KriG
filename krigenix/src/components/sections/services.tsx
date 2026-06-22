"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Cpu, Bot, GitBranch, Workflow, MessageSquareText,
  Palette, PenTool, Globe, Blocks, Smartphone,
  Cloud, ArrowLeftRight,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const services = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline operations, reduce costs, and drive efficiency across your entire business.",
    benefits: ["Reduce operational costs by 60%", "Eliminate manual data entry", "24/7 automated operations"],
    color: "#2563EB",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous AI agents that handle complex tasks, make intelligent decisions, and adapt to your business needs in real-time.",
    benefits: ["Autonomous decision making", "Real-time adaptability", "Complex task handling"],
    color: "#06B6D4",
  },
  {
    icon: GitBranch,
    title: "Business Process Automation",
    description: "End-to-end automation of critical business processes to improve accuracy, speed, and operational consistency.",
    benefits: ["Streamlined workflows", "Improved accuracy", "Consistent output"],
    color: "#10B981",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom automated workflows that connect your tools, teams, and data for seamless business operations.",
    benefits: ["Tool integration", "Team collaboration", "Data synchronization"],
    color: "#2563EB",
  },
  {
    icon: MessageSquareText,
    title: "Chatbots",
    description: "AI-powered conversational interfaces that provide instant support, qualify leads, and enhance customer experience.",
    benefits: ["Instant customer support", "Lead qualification", "Reduced response time"],
    color: "#06B6D4",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Stunning, user-centered web designs that capture your brand identity and drive meaningful engagement.",
    benefits: ["Brand-aligned design", "High conversion rates", "User-centered approach"],
    color: "#10B981",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that delight users and keep them coming back.",
    benefits: ["Intuitive interfaces", "User retention", "Accessibility focused"],
    color: "#2563EB",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and web applications built with modern frameworks and best practices.",
    benefits: ["Fast load times", "SEO optimized", "Responsive design"],
    color: "#06B6D4",
  },
  {
    icon: Blocks,
    title: "SaaS Development",
    description: "Scalable, multi-tenant SaaS platforms with robust architecture and seamless deployment pipelines.",
    benefits: ["Multi-tenant architecture", "Scalable infrastructure", "Rapid deployment"],
    color: "#10B981",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional experiences on every device.",
    benefits: ["Cross-platform reach", "Native performance", "Offline capability"],
    color: "#2563EB",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise cloud infrastructure, migration, and optimization services for maximum reliability and scalability.",
    benefits: ["99.9% uptime", "Auto-scaling", "Security-first"],
    color: "#06B6D4",
  },
  {
    icon: ArrowLeftRight,
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies that future-proof your business and unlock new opportunities.",
    benefits: ["Future-proof strategy", "New revenue streams", "Competitive advantage"],
    color: "#10B981",
  },
]

export function Services() {
  return (
    <Section id="services" size="lg">
      <SectionHeader
        badge="Our Services"
        title="Comprehensive Technology Services"
        description="From AI automation to web development, we deliver end-to-end solutions that transform businesses."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-transparent hover:shadow-xl"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color}06, ${service.color}02)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                    color: service.color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-xs text-[#6B7280]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
