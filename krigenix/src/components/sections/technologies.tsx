"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { technologies } from "@/data/technologies"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

const CARD_SPRING = { type: "spring", stiffness: 300, damping: 20 } as const
const EASE_OUT = [0.22, 1, 0.36, 1] as const

const MARQUEE_ANIMATION_DURATION = 40

function TechCard({ name, category, color, slug }: {
  name: string
  category: string
  color: string
  slug: string
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: CARD_SPRING }}
      whileTap={{ scale: 0.97 }}
      className="group relative bg-white rounded-xl border border-gray-200/70 px-4 py-5 shrink-0 w-[140px] sm:w-[160px] select-none cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={CARD_SPRING}
        className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 flex items-center justify-center"
      >
        <img
          src={`/tech/${slug}.svg`}
          alt={`${name} logo`}
          className="w-full h-full object-contain pointer-events-none select-none"
          loading="lazy"
          draggable={false}
        />
      </motion.div>

      <h3 className="text-sm font-semibold text-[#0F172A] text-center">{name}</h3>
      <p className="text-[11px] text-[#6B7280] text-center mt-0.5">{category}</p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileHover={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full origin-left"
        style={{
          background: `linear-gradient(90deg, ${color}40, ${color}20, transparent)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${color}15`,
        }}
      />
    </motion.div>
  )
}

function MarqueeTrack() {
  const prefersReducedMotion = useReducedMotion()
  const [isPaused, setIsPaused] = React.useState(false)
  const pauseTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const duplicated = React.useMemo(
    () => [...technologies, ...technologies, ...technologies, ...technologies],
    []
  )

  const handlePause = React.useCallback(() => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    setIsPaused(true)
  }, [])

  const handleResume = React.useCallback(() => {
    setIsPaused(false)
  }, [])

  const handleTouchEnd = React.useCallback(() => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 2000)
  }, [])

  React.useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    }
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.slug}
            className="flex items-center gap-2 bg-white rounded-xl border border-gray-200/70 px-4 py-2.5"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={`/tech/${tech.slug}.svg`}
                alt={tech.name}
                className="w-full h-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
            <span className="text-sm font-medium text-[#0F172A]">{tech.name}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden"
    >
      <div
        className={`flex gap-3 sm:gap-4 w-max ${
          isPaused ? "animate-marquee-loop-paused" : "animate-marquee-loop"
        }`}
        style={{ animationDuration: `${MARQUEE_ANIMATION_DURATION}s` }}
      >
        {duplicated.map((tech, i) => (
          <TechCard key={`${tech.slug}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  )
}

export function Technologies() {
  const prefersReducedMotion = useReducedMotion()

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const headerItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
  }

  return (
    <Section
      id="technologies"
      size="md"
      className="bg-gray-50/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2563EB]"
            style={{
              width: `${2 + (i % 4) * 2}px`,
              height: `${2 + (i % 4) * 2}px`,
              left: `${5 + (i * 11) % 90}%`,
              top: `${5 + (i * 13) % 90}%`,
            }}
            animate={{
              y: [0, -(12 + (i % 8) * 2), 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (4 + (i % 5) * 2), 0],
              opacity: [0.06, 0.15, 0.06],
            }}
            transition={{
              duration: 12 + (i % 6) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <Container>
        <motion.div
          variants={!prefersReducedMotion ? headerVariants : undefined}
          initial={!prefersReducedMotion ? "hidden" : undefined}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={headerItemVariants}>
            <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-[#2563EB] mb-4">
                Technologies
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
                Built With Modern Technology
              </h2>
              <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-[#6B7280] max-w-2xl mx-auto">
                We leverage industry-leading technologies to build scalable,
                secure, and high-performance solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-50/80 to-transparent z-10 pointer-events-none" />
          <MarqueeTrack />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-[#9CA3AF] tracking-wide">
            <span className="font-medium text-[#6B7280]">Trusted Technologies:</span>{" "}
            {technologies.map((t) => t.name).join(" \u2022 ")}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
