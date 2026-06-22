"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "AI Solutions", "SaaS Platforms", "Websites", "Mobile Apps", "Automation"]

const projects = [
  {
    title: "AI-Powered Customer Support Platform",
    category: "AI Solutions",
    description: "Enterprise-grade AI support platform handling 10k+ conversations daily with 95% automation rate.",
    color: "#2563EB",
    tags: ["OpenAI", "Next.js", "Python", "AWS"],
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS Platforms",
    description: "Real-time analytics platform serving 500+ businesses with customizable dashboards and reporting.",
    color: "#06B6D4",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "E-commerce Website Redesign",
    category: "Websites",
    description: "Complete e-commerce transformation resulting in 40% increase in conversion rate.",
    color: "#10B981",
    tags: ["Next.js", "TypeScript", "Stripe", "Vercel"],
  },
  {
    title: "Healthcare Mobile Application",
    category: "Mobile Apps",
    description: "Cross-platform healthcare app connecting patients with providers across 50+ clinics.",
    color: "#2563EB",
    tags: ["Flutter", "Firebase", "GraphQL", "AWS"],
  },
  {
    title: "Automated Invoice Processing System",
    category: "Automation",
    description: "AI-driven invoice processing that reduced manual data entry by 85% for a finance firm.",
    color: "#06B6D4",
    tags: ["Python", "OpenAI", "PostgreSQL", "Docker"],
  },
  {
    title: "Real Estate SaaS Platform",
    category: "SaaS Platforms",
    description: "Complete property management platform with AI-powered valuation and predictive analytics.",
    color: "#10B981",
    tags: ["Next.js", "TypeScript", "Redis", "Kubernetes"],
  },
  {
    title: "AI Content Generation Tool",
    category: "AI Solutions",
    description: "Enterprise content platform generating marketing copy, blog posts, and social media content.",
    color: "#2563EB",
    tags: ["OpenAI", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Logistics Mobile Application",
    category: "Mobile Apps",
    description: "Real-time fleet tracking and management app serving 200+ logistics companies.",
    color: "#06B6D4",
    tags: ["Flutter", "Firebase", "Google Maps", "Node.js"],
  },
  {
    title: "Hotel Booking Website",
    category: "Websites",
    description: "Premium hotel booking platform with dynamic pricing and seamless booking experience.",
    color: "#10B981",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <Section id="portfolio" size="lg" className="bg-gray-50">
      <SectionHeader
        badge="Portfolio"
        title="Our Recent Work"
        description="Showcasing our expertise across domains with real projects that delivered measurable results."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300",
              activeCategory === cat
                ? "bg-[#0F172A] text-white shadow-md"
                : "bg-white text-[#6B7280] border border-gray-200 hover:border-gray-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-xl"
            >
              <div
                className="h-48 bg-gradient-to-br flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                  }}
                >
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <Badge variant="muted" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#6B7280] bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button variant="outline" size="lg" asChild>
          <a href="#contact">
            Start Your Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </Section>
  )
}
