"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { technologies } from "@/data/technologies"
import { Section, SectionHeader } from "@/components/ui/section"

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#2563EB] animate-float-particle"
          style={{
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            left: `${10 + (i * 13) % 80}%`,
            top: `${10 + (i * 17) % 80}%`,
            opacity: 0.15,
            animationDuration: `${8 + (i * 2) % 8}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  )
}

interface DesktopCardProps {
  name: string
  category: string
  description: string
  color: string
  slug: string
  index: number
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
}

function DesktopCard({ name, category, color, slug, index, mouseX, mouseY }: DesktopCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 3 + (index % 3) * 1.5,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1] as const,
        delay: index * 0.2,
      },
    },
  }

  let parallaxX = 0
  let parallaxY = 0

  if (!prefersReducedMotion && cardRef.current) {
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (mouseX.current - centerX) / 30
    const deltaY = (mouseY.current - centerY) / 30
    parallaxX = Math.max(-8, Math.min(8, deltaX))
    parallaxY = Math.max(-8, Math.min(8, deltaY))
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl border border-gray-200/70 p-6 pt-7 pb-5 text-center transition-all duration-300 cursor-default overflow-hidden"
      style={{
        transform: prefersReducedMotion
          ? "none"
          : `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: isHovered
          ? `0 8px 30px ${color}15, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 1px 3px rgba(0,0,0,0.04)",
        borderColor: isHovered ? `${color}30` : undefined,
      }}
    >
      {isHovered && (
        <div
          className="absolute -inset-px rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(120px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}08, transparent)`,
          }}
        />
      )}

      <motion.div
        variants={!prefersReducedMotion ? floatVariants : undefined}
        initial="initial"
        animate="animate"
        className="w-16 h-16 mx-auto mb-3.5 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <img
          src={`/tech/${slug}.svg`}
          alt={`${name} logo`}
          className="w-full h-full object-contain select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />
      </motion.div>

      <h3 className="text-sm font-semibold text-[#0F172A]">{name}</h3>
      <p className="text-[11px] text-[#6B7280] mt-0.5">{category}</p>
    </motion.div>
  )
}

function MobileCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const autoScrollRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const inactivityRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const startAutoScroll = React.useCallback(() => {
    stopAutoScroll()
    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current || isDragging) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const maxScroll = scrollWidth - clientWidth
      const next = scrollLeft + clientWidth * 0.8
      if (next >= maxScroll) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollRef.current.scrollTo({ left: next, behavior: "smooth" })
      }
    }, 4000)
  }, [isDragging])

  const stopAutoScroll = React.useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
  }, [])

  React.useEffect(() => {
    startAutoScroll()
    return stopAutoScroll
  }, [startAutoScroll, stopAutoScroll])

  const handleTouchStart = () => {
    setIsDragging(false)
    stopAutoScroll()
    if (inactivityRef.current) clearTimeout(inactivityRef.current)
  }

  const handleTouchEnd = () => {
    if (inactivityRef.current) clearTimeout(inactivityRef.current)
    inactivityRef.current = setTimeout(() => {
      setIsDragging(false)
      startAutoScroll()
    }, 3000)
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (clientWidth * 0.8))
    setActiveIndex(Math.min(index, technologies.length - 1))
  }

  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null)

  return (
    <div className="lg:hidden">
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {technologies.map((tech, index) => {
          const isExpanded = expandedIndex === index
          return (
            <motion.div
              key={tech.slug}
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="snap-center shrink-0 w-[160px] first:ml-0 last:mr-0 relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-xl border border-gray-200/70 p-5 pt-6 pb-4 text-center transition-all duration-200 active:bg-gray-50 cursor-pointer select-none"
                style={{
                  boxShadow: isExpanded
                    ? `0 8px 24px ${tech.color}20, 0 2px 8px rgba(0,0,0,0.06)`
                    : "0 1px 3px rgba(0,0,0,0.04)",
                  borderColor: isExpanded ? `${tech.color}40` : undefined,
                }}
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img
                    src={`/tech/${tech.slug}.svg`}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain pointer-events-none select-none"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#0F172A]">{tech.name}</h3>
                <p className="text-[10px] text-[#6B7280] mt-0.5">{tech.category}</p>

                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] text-[#6B7280] mt-2 leading-relaxed border-t border-gray-100 pt-2"
                  >
                    {tech.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-center gap-1.5 mt-2">
        {technologies.map((tech, i) => (
          <button
            key={tech.slug}
            onClick={() => {
              if (!scrollRef.current) return
              const target = i * (scrollRef.current.clientWidth * 0.8 + 16)
              scrollRef.current.scrollTo({ left: target, behavior: "smooth" })
              setActiveIndex(i)
            }}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-5 h-1.5 bg-[#0F172A]"
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${tech.name}`}
          />
        ))}
      </div>
    </div>
  )
}

function DesktopGrid() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const mouseX = React.useRef(0)
  const mouseY = React.useRef(0)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    mouseX.current = e.clientX
    mouseY.current = e.clientY
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className="hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-7 gap-4"
        >
          {technologies.map((tech, index) => (
            <DesktopCard key={tech.slug} {...tech} index={index} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hidden lg:block"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-7 gap-4"
      >
        {technologies.map((tech, index) => (
          <DesktopCard key={tech.slug} {...tech} index={index} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </motion.div>
    </div>
  )
}

export function Technologies() {
  return (
    <Section id="technologies" size="md" className="bg-gray-50/80 relative overflow-hidden">
      <ParticleBackground />
      <SectionHeader
        badge="Technologies"
        title="Built With Modern Technology"
        description="We leverage cutting-edge tools and frameworks to build scalable, high-performance solutions."
      />
      <DesktopGrid />
      <MobileCarousel />
    </Section>
  )
}
