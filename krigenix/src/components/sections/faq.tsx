"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Plus } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What services does KriGenix provide?",
    answer: "KriGenix offers a comprehensive range of technology services including AI Automation, AI Agents, Business Process Automation, Web Design & Development, Mobile App Development, SaaS Development, Cloud Solutions, and Digital Transformation. We help businesses leverage technology to scale and grow efficiently.",
  },
  {
    question: "Do you develop custom software?",
    answer: "Yes, we specialize in custom software development. Whether you need a SaaS platform, a mobile application, or an enterprise system, we build tailored solutions using modern technologies like React, Next.js, Node.js, Python, and Flutter to match your specific requirements.",
  },
  {
    question: "Can you automate business processes?",
    answer: "Absolutely. We design and implement intelligent automation solutions using AI and modern workflow tools. From automating repetitive tasks to building complex multi-step workflows, we help businesses reduce manual effort and operate more efficiently.",
  },
  {
    question: "Do you build mobile applications?",
    answer: "Yes, we develop both native and cross-platform mobile applications using Flutter and React Native. Our mobile apps are designed for performance, usability, and scalability across iOS and Android platforms.",
  },
  {
    question: "What technologies do you use?",
    answer: "We work with a modern technology stack including React, Next.js, TypeScript, Node.js, Python, Flutter, OpenAI, Docker, PostgreSQL, AWS, Vercel, and more. We choose the best tools for each project based on requirements and scalability needs.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes monitoring, updates, performance optimization, security patches, and ongoing improvements to ensure your solution continues to perform at its best.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <Section id="faq" size="lg" className="bg-gray-50">
      <SectionHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers to common questions about our services and process."
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300",
              openIndex === index && "border-[#2563EB]/30 shadow-md"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-sm font-semibold text-[#0F172A] pr-4">
                {faq.question}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300",
                  openIndex === index
                    ? "bg-[#2563EB] text-white rotate-45"
                    : "bg-gray-100 text-[#6B7280]"
                )}
              >
                <Plus className="w-4 h-4" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
