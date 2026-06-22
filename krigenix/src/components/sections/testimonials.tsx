"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const testimonials = [
  {
    quote: "KriGenix transformed our entire customer support operation with their AI automation solution. We've seen a 70% reduction in response time and our customer satisfaction scores are at an all-time high.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    initials: "SC",
    color: "#2563EB",
  },
  {
    quote: "The team at KriGenix built us a custom SaaS platform that perfectly scales with our growing business. Their technical expertise and project management were exceptional throughout.",
    author: "Marcus Johnson",
    role: "CEO",
    company: "DataSync Solutions",
    initials: "MJ",
    color: "#06B6D4",
  },
  {
    quote: "Working with KriGenix on our digital transformation was a game-changer. They understood our vision and delivered a solution that exceeded our expectations.",
    author: "Emily Rodriguez",
    role: "VP of Operations",
    company: "NovaGroup",
    initials: "ER",
    color: "#10B981",
  },
  {
    quote: "We needed a complete overhaul of our web presence and mobile app. KriGenix delivered both on time and on budget. The results speak for themselves.",
    author: "David Park",
    role: "Founder",
    company: "Park Enterprises",
    initials: "DP",
    color: "#2563EB",
  },
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      const next = prev + newDirection
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }

  React.useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <Section id="testimonials" size="md">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        description="Hear from businesses that have transformed with KriGenix."
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-8 md:p-12">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.author}</h4>
                  <p className="text-sm text-gray-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#0F172A] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  )
}
