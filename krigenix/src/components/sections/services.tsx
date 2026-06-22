"use client"

import * as React from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import {
  Cpu,
  Bot,
  GitBranch,
  Workflow,
  MessageSquareText,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  ArrowLeftRight,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const SPRING_TILT = { stiffness: 300, damping: 25, mass: 0.5 }

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
  color: string
  size: "large" | "medium" | "small"
}

const services: ServiceItem[] = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Automate operations and reduce manual work with intelligent AI systems.",
    color: "#2563EB",
    size: "large",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and applications built with modern frameworks.",
    color: "#06B6D4",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver native-quality experiences.",
    color: "#10B981",
    size: "large",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous AI agents that handle complex tasks and adapt in real-time.",
    color: "#2563EB",
    size: "medium",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise cloud infrastructure, migration, and optimization services.",
    color: "#06B6D4",
    size: "medium",
  },
  {
    icon: ArrowLeftRight,
    title: "Digital Transformation",
    description: "End-to-end strategies that future-proof your business and unlock new opportunities.",
    color: "#10B981",
    size: "medium",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description: "Conversational AI that provides instant support and qualifies leads.",
    color: "#2563EB",
    size: "small",
  },
  {
    icon: GitBranch,
    title: "Business Process Automation",
    description: "End-to-end automation for improved accuracy and operational consistency.",
    color: "#06B6D4",
    size: "small",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom workflows that connect tools, teams, and data seamlessly.",
    color: "#10B981",
    size: "small",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "User-centered designs that capture brand identity and drive engagement.",
    color: "#2563EB",
    size: "small",
  },
]

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2 p-8",
  medium: "p-6",
  small: "p-5",
}

function TiltCard({ service, index }: { service: ServiceItem; index: number }) {
  const prefersReducedMotion = useReducedMotion()
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const springRotateX = useSpring(rotateX, SPRING_TILT)
  const springRotateY = useSpring(rotateY, SPRING_TILT)
  const springGlowX = useSpring(glowX, SPRING_TILT)
  const springGlowY = useSpring(glowY, SPRING_TILT)

  const iconRotateX = useTransform(springRotateX, (v) => v * 1.4)
  const iconRotateY = useTransform(springRotateY, (v) => v * 1.4)
  const iconZ = useTransform(springRotateY, (v) => Math.abs(v) * 0.5 + 2)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      rotateX.set(-(y - 0.5) * 18)
      rotateY.set((x - 0.5) * 18)
      glowX.set(x * 100)
      glowY.set(y * 100)
    },
    [prefersReducedMotion, rotateX, rotateY, glowX, glowY]
  )

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }, [rotateX, rotateY, glowX, glowY])

  const Icon = service.icon

  const floatDuration = 4 + (index % 5) * 1.2
  const floatDelay = index * 0.15

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.55, ease: EASE_OUT }}
      className={`relative ${sizeClasses[service.size]}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        whileTap={{ scale: 0.98 }}
        style={
          prefersReducedMotion
            ? undefined
            : {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 800,
              }
        }
        className="relative h-full bg-white rounded-2xl border border-gray-200/70 transition-all duration-300 overflow-hidden cursor-default group"
      >
        {isHovered && !prefersReducedMotion && (
          <motion.div
            className="absolute -inset-[1px] rounded-2xl pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(280px circle at ${springGlowX}% ${springGlowY}%, ${service.color}12, transparent 60%)`,
            }}
          />
        )}

        {isHovered && !prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${springGlowX}% ${springGlowY}%, ${service.color}06, transparent 50%)`,
            }}
          />
        )}

        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.color}04, transparent 50%, ${service.color}04)`,
          }}
        />

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-px left-8 right-8 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
            }}
          />
        )}

        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -(2 + (index % 2)), 0],
                  transition: {
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatDelay,
                  },
                }
          }
          style={{
            background: `linear-gradient(135deg, ${service.color}12, ${service.color}06)`,
            color: service.color,
            ...(prefersReducedMotion
              ? {}
              : {
                  rotateX: iconRotateX,
                  rotateY: iconRotateY,
                  z: iconZ,
                }),
          }}
          className={`relative flex items-center justify-center rounded-xl transition-all duration-300 ${
            service.size === "small" ? "w-9 h-9 mb-3" : "w-12 h-12 mb-4"
          }`}
        >
          <Icon className={service.size === "small" ? "w-4 h-4" : "w-6 h-6"} />
        </motion.div>

        <div className="relative">
          <h3
            className={`font-semibold text-[#0F172A] mb-1.5 ${
              service.size === "small" ? "text-sm" : "text-lg"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-[#6B7280] leading-relaxed ${
              service.size === "small" ? "text-xs" : "text-sm"
            }`}
          >
            {service.description}
          </p>
        </div>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full origin-left"
            style={{
              background: `linear-gradient(90deg, ${service.color}50, ${service.color}20, transparent)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

function DesktopGrid() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  }

  const largeServices = services.filter((s) => s.size === "large")
  const mediumServices = services.filter((s) => s.size === "medium")
  const smallServices = services.filter((s) => s.size === "small")

  return (
    <motion.div
      variants={!prefersReducedMotion ? containerVariants : undefined}
      initial={!prefersReducedMotion ? "hidden" : undefined}
      whileInView={!prefersReducedMotion ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <div className="md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col gap-5">
        <TiltCard service={largeServices[0]} index={0} />
      </div>

      <div className="flex flex-col gap-5">
        <TiltCard service={largeServices[1]} index={1} />
        <TiltCard service={mediumServices[0]} index={3} />
      </div>

      <div className="md:hidden lg:flex lg:flex-col lg:gap-5">
        <TiltCard service={largeServices[2]} index={2} />
      </div>

      <div className="flex flex-col gap-5">
        <TiltCard service={mediumServices[1]} index={4} />
        <TiltCard service={mediumServices[2]} index={5} />
      </div>

      <div className="md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-5">
        {smallServices.slice(0, 2).map((service, i) => (
          <TiltCard key={service.title} service={service} index={6 + i} />
        ))}
      </div>

      <div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-5">
        {smallServices.slice(2).map((service, i) => (
          <TiltCard key={service.title} service={service} index={8 + i} />
        ))}
      </div>
    </motion.div>
  )
}

function MobileCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (clientWidth * 0.8))
    setActiveIndex(Math.min(index, services.length - 1))
  }

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, i) => (
          <div
            key={service.title}
            className="snap-center shrink-0 w-[260px] sm:w-[300px] first:ml-0 last:mr-0"
          >
            <TiltCard service={service} index={i} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {services.map((s, i) => (
          <button
            key={s.title}
            onClick={() => {
              if (!scrollRef.current) return
              const target = i * (scrollRef.current.clientWidth * 0.8 + 16)
              scrollRef.current.scrollTo({ left: target, behavior: "smooth" })
              setActiveIndex(i)
            }}
            className={`rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-5 h-1.5 bg-[#0F172A]"
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${s.title}`}
          />
        ))}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <Section id="services" size="lg" className="bg-gray-50/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2563EB]/03 to-transparent rounded-full -translate-y-1/3 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#06B6D4]/03 to-transparent rounded-full translate-y-1/4 translate-x-1/5" />
      </div>

      <SectionHeader
        badge="Our Services"
        title="Intelligent Solutions for Modern Businesses"
        description="From AI automation to custom software development, we build technology that helps businesses scale faster and operate smarter."
      />

      <DesktopGrid />
      <MobileCarousel />
    </Section>
  )
}
