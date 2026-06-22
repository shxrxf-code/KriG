"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Globe, Smartphone, Cloud, Shield, Braces } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const ecosystemNodes = [
  { icon: Cpu, label: "AI Automation", x: 0, y: -1, delay: 0 },
  { icon: Globe, label: "Websites", x: 0.951, y: -0.309, delay: 0.1 },
  { icon: Smartphone, label: "Mobile Apps", x: 0.588, y: 0.809, delay: 0.2 },
  { icon: Braces, label: "SaaS", x: -0.588, y: 0.809, delay: 0.3 },
  { icon: Cloud, label: "Cloud", x: -0.951, y: -0.309, delay: 0.4 },
  { icon: Shield, label: "Digital Transformation", x: 0, y: -1.6, delay: 0.5, outer: true },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-[#2563EB] mb-6 shadow-sm">
                Your Trusted Technology Partner
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1]"
            >
              Transforming Businesses{" "}
              <span className="text-[#2563EB]">Through AI</span>{" "}
              <span className="text-[#06B6D4]">& Technology</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl leading-relaxed text-[#6B7280] max-w-xl"
            >
              We design, build, and automate digital solutions that help
              businesses grow faster, operate smarter, and stay ahead of the
              competition.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group" asChild>
                <a href="#contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="#services">Explore Solutions</a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8 text-sm text-[#6B7280]"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by 50+ businesses worldwide</span>
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#06B6D4]/5 rounded-full animate-pulse-soft" />
              <div className="absolute inset-[15%] bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0F172A] rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl md:text-3xl font-bold">K</span>
                </div>
              </div>

              <div className="absolute inset-0">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 500 500" style={{ animationDuration: "20s" }}>
                  <circle
                    cx="250"
                    cy="250"
                    r="160"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="0.5"
                    strokeDasharray="8 8"
                    opacity="0.3"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="220"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="0.5"
                    strokeDasharray="6 12"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {[
                { icon: Cpu, label: "AI Automation", angle: 0, color: "#2563EB" },
                { icon: Globe, label: "Websites", angle: 60, color: "#06B6D4" },
                { icon: Smartphone, label: "Mobile Apps", angle: 120, color: "#10B981" },
                { icon: Braces, label: "SaaS", angle: 180, color: "#2563EB" },
                { icon: Cloud, label: "Cloud", angle: 240, color: "#06B6D4" },
                { icon: Shield, label: "Digital\nTransformation", angle: 300, color: "#0F172A" },
              ].map((node, i) => {
                const angleRad = (node.angle * Math.PI) / 180
                const r = 160
                const x = 250 + r * Math.cos(angleRad)
                const y = 250 + r * Math.sin(angleRad)
                const left = Math.round(((x / 500) * 100) * 100) / 100
                const top = Math.round(((y / 500) * 100) * 100) / 100
                const Icon = node.icon
                return (
                  <motion.div
                    key={node.label}
                    className="absolute"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1.5"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    >
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110"
                        style={{ color: node.color }}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-[10px] md:text-xs font-medium text-[#6B7280] text-center leading-tight">
                        {node.label}
                      </span>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
