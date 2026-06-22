"use client"

import * as React from "react"
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { technologies } from "@/data/technologies"
import { Section, SectionHeader } from "@/components/ui/section"

const CARD_SPRING = { type: "spring", stiffness: 300, damping: 20 } as const
const EASE_OUT = [0.22, 1, 0.36, 1] as const

function SectionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
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
            y: [0, -(15 + (i % 10) * 2), 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * (5 + (i % 5) * 3), 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 10 + (i % 8) * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  )
}

function FloatingShapes() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  const shapes = [
    { size: 40, x: "5%", y: "15%", blur: 60, color: "#2563EB", delay: 0 },
    { size: 24, x: "90%", y: "70%", blur: 40, color: "#06B6D4", delay: 2 },
    { size: 32, x: "80%", y: "20%", blur: 50, color: "#2563EB", delay: 4 },
    { size: 16, x: "15%", y: "80%", blur: 30, color: "#06B6D4", delay: 1 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color}12, transparent)`,
            filter: `blur(${shape.blur}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}

function CursorGlow() {
  const prefersReducedMotion = useReducedMotion()
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const cursorX = useTransform(springX, (x) => x - 200)
  const cursorY = useTransform(springY, (y) => y - 200)

  React.useEffect(() => {
    if (prefersReducedMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion, mouseX, mouseY])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-50 hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}

interface DesktopCardProps {
  name: string
  category: string
  description: string
  color: string
  slug: string
  index: number
}

function DesktopCard({ name, category, color, slug, index }: DesktopCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = React.useState(false)

  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const springCardX = useSpring(cardX, { stiffness: 200, damping: 20 })
  const springCardY = useSpring(cardY, { stiffness: 200, damping: 20 })

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / 20
      const deltaY = (e.clientY - centerY) / 20
      cardX.set(Math.max(-8, Math.min(8, deltaX)))
      cardY.set(Math.max(-8, Math.min(8, deltaY)))
    },
    [prefersReducedMotion, cardX, cardY]
  )

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false)
    cardX.set(0)
    cardY.set(0)
  }, [cardX, cardY])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: EASE_OUT }}
      whileHover={{ y: -8, transition: CARD_SPRING }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-xl border border-gray-200/70 p-6 pt-7 pb-5 text-center cursor-default overflow-hidden"
      style={
        prefersReducedMotion
          ? undefined
          : {
              x: springCardX,
              y: springCardY,
            }
      }
    >
      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(180px circle at center, ${color}06, transparent)`,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -inset-px rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(120px circle at 50% 50%, ${color}10, transparent)`,
            }}
          />
        </>
      )}

      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}04, transparent 50%, ${color}04)`,
        }}
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -(2 + (index % 2)), 0],
                transition: {
                  duration: 4 + (index % 3) * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                },
              }
        }
        className="w-16 h-16 mx-auto mb-3.5 flex items-center justify-center"
      >
        <motion.img
          src={`/tech/${slug}.svg`}
          alt={`${name} logo`}
          whileHover={{ scale: 1.08 }}
          transition={CARD_SPRING}
          className="w-full h-full object-contain select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />
      </motion.div>

      <h3 className="text-sm font-semibold text-[#0F172A]">{name}</h3>
      <p className="text-[11px] text-[#6B7280] mt-0.5">{category}</p>

      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-1/4 right-1/4 h-[2px] rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-xl pointer-events-none"
            style={{
              boxShadow: `0 0 30px ${color}08`,
            }}
          />
        </>
      )}
    </motion.div>
  )
}

function DesktopGrid() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.15 },
    },
  }

  const grid = (
    <motion.div
      variants={!prefersReducedMotion ? containerVariants : undefined}
      initial={!prefersReducedMotion ? "hidden" : undefined}
      whileInView={!prefersReducedMotion ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-7 gap-4"
    >
      {technologies.map((tech, index) => (
        <DesktopCard key={tech.slug} {...tech} index={index} />
      ))}
    </motion.div>
  )

  return <div className="hidden lg:block">{grid}</div>
}

function TechMarquee() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const dragStartX = React.useRef(0)
  const dragScrollLeft = React.useRef(0)

  const duplicated = [...technologies, ...technologies, ...technologies]

  if (prefersReducedMotion) return null

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragScrollLeft.current = containerRef.current.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    const dx = e.clientX - dragStartX.current
    containerRef.current.scrollLeft = dragScrollLeft.current - dx
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="lg:hidden mt-8 overflow-hidden" role="region" aria-label="Technologies marquee">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false) }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={(e) => {
          setIsPaused(true)
          if (!containerRef.current) return
          dragStartX.current = e.touches[0].clientX
          dragScrollLeft.current = containerRef.current.scrollLeft
        }}
        onTouchMove={(e) => {
          if (!containerRef.current) return
          const dx = e.touches[0].clientX - dragStartX.current
          containerRef.current.scrollLeft = dragScrollLeft.current - dx
        }}
        onTouchEnd={() => {
          setIsPaused(false)
          setTimeout(() => setIsPaused(false), 2000)
        }}
        className="overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <motion.div
          className="flex gap-4 w-max"
          animate={isPaused ? { x: 0 } : { x: [0, -((technologies.length * 200))] }}
          transition={
            isPaused
              ? { duration: 0.3 }
              : {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: technologies.length * 3,
                    ease: "linear",
                  },
                }
          }
        >
          {duplicated.map((tech, i) => (
            <div
              key={`${tech.slug}-${i}`}
              className="flex items-center gap-3 bg-white rounded-xl border border-gray-200/70 px-5 py-3.5 shrink-0 select-none"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src={`/tech/${tech.slug}.svg`}
                  alt={tech.name}
                  className="w-full h-full object-contain pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="text-sm font-medium text-[#0F172A] whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function MobileCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const autoScrollRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const inactivityRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null)
  const [rippleIndex, setRippleIndex] = React.useState<number | null>(null)

  const prefersReducedMotion = useReducedMotion()

  const stopAutoScroll = React.useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
  }, [])

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
  }, [isDragging, stopAutoScroll])

  React.useEffect(() => {
    if (prefersReducedMotion) return
    startAutoScroll()
    return stopAutoScroll
  }, [startAutoScroll, stopAutoScroll, prefersReducedMotion])

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
    const index = Math.round(scrollLeft / (clientWidth * 0.85))
    setActiveIndex(Math.min(index, technologies.length - 1))
  }

  const handleTap = (index: number) => {
    setRippleIndex(index)
    setTimeout(() => setRippleIndex(null), 600)
    setExpandedIndex(expandedIndex === index ? null : index)
  }

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
              onClick={() => handleTap(index)}
              className="snap-center shrink-0 w-[170px] first:ml-0 last:mr-0 relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.45,
                  ease: EASE_OUT,
                }}
                whileTap={{ scale: 0.96 }}
                className="bg-white rounded-xl border border-gray-200/70 p-5 pt-6 pb-4 text-center transition-all duration-200 cursor-pointer select-none relative overflow-hidden"
                style={{
                  boxShadow: isExpanded
                    ? `0 8px 24px ${tech.color}20, 0 2px 8px rgba(0,0,0,0.06)`
                    : activeIndex === index
                      ? `0 4px 16px ${tech.color}12, 0 1px 3px rgba(0,0,0,0.04)`
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  borderColor: isExpanded
                    ? `${tech.color}40`
                    : activeIndex === index
                      ? `${tech.color}20`
                      : undefined,
                }}
              >
                {rippleIndex === index && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}15, transparent)`,
                    }}
                  />
                )}

                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <motion.img
                    src={`/tech/${tech.slug}.svg`}
                    alt={`${tech.name} logo`}
                    whileTap={{ scale: 0.9 }}
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

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tech.color}50, transparent)`,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-center gap-1.5 mt-2">
        {technologies.map((tech, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={tech.slug}
              onClick={() => {
                if (!scrollRef.current) return
                const target = i * (scrollRef.current.clientWidth * 0.85 + 16)
                scrollRef.current.scrollTo({ left: target, behavior: "smooth" })
                setActiveIndex(i)
              }}
              className={`rounded-full transition-all duration-500 ${
                isActive
                  ? "w-5 h-1.5 bg-[#0F172A]"
                  : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${tech.name}`}
            />
          )
        })}
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
      <CursorGlow />
      <SectionBackground />
      <FloatingShapes />

      <motion.div
        variants={!prefersReducedMotion ? headerVariants : undefined}
        initial={!prefersReducedMotion ? "hidden" : undefined}
        whileInView={!prefersReducedMotion ? "visible" : undefined}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={headerItemVariants}>
          <SectionHeader
            badge="Technologies"
            title="Built With Modern Technology"
            description="We leverage cutting-edge tools and frameworks to build scalable, high-performance solutions."
          />
        </motion.div>
      </motion.div>

      <DesktopGrid />
      <TechMarquee />
      <MobileCarousel />
    </Section>
  )
}
