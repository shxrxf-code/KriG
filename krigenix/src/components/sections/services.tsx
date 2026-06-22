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
  Layout,
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
  visual?: "neural" | "code" | "device" | "cloud" | "chat" | "decision"
}

const services: ServiceItem[] = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Automate operations and reduce manual work with intelligent AI systems.",
    color: "#2563EB",
    size: "large",
    visual: "neural",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and applications built with modern frameworks.",
    color: "#06B6D4",
    size: "large",
    visual: "code",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver native-quality experiences.",
    color: "#10B981",
    size: "large",
    visual: "device",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous AI agents that handle complex tasks and adapt in real-time.",
    color: "#2563EB",
    size: "medium",
    visual: "decision",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise cloud infrastructure, migration, and optimization services.",
    color: "#06B6D4",
    size: "medium",
    visual: "cloud",
  },
  {
    icon: Layout,
    title: "SaaS Development",
    description: "Scalable multi-tenant platforms with robust architecture and rapid deployment.",
    color: "#10B981",
    size: "medium",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description: "Conversational AI that provides instant support and qualifies leads.",
    color: "#2563EB",
    size: "small",
    visual: "chat",
  },
  {
    icon: ArrowLeftRight,
    title: "Digital Transformation",
    description: "End-to-end strategies that future-proof your business and unlock new opportunities.",
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
    icon: GitBranch,
    title: "Business Process Automation",
    description: "End-to-end automation for improved accuracy and operational consistency.",
    color: "#2563EB",
    size: "small",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "User-centered designs that capture brand identity and drive engagement.",
    color: "#06B6D4",
    size: "small",
  },
]

function NeuralVisual() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity="0.4">
        <line x1="40" y1="30" x2="100" y2="20" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="40" y1="30" x2="80" y2="60" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="40" y1="30" x2="50" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="100" y1="20" x2="160" y2="40" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="100" y1="20" x2="130" y2="70" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="80" y1="60" x2="130" y2="70" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="80" y1="60" x2="50" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="50" y1="80" x2="130" y2="70" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        <line x1="160" y1="40" x2="130" y2="70" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
        {[[40, 30], [100, 20], [160, 40], [80, 60], [130, 70], [50, 80]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="#2563EB" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="1.5;3;1.5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  )
}

function CodeVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      <div className="absolute top-5 left-4 text-[7px] font-mono text-[#06B6D4] leading-relaxed">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 1, 1, 1] }} transition={{ duration: 6, repeat: Infinity }}>
          {"import { motion } from \"framer-motion\""}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [1, 1, 1, 0, 1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
          {"const App = () => {"}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [1, 1, 0, 1, 1, 1] }} transition={{ duration: 5, repeat: Infinity }}>
          {"  return <motion.div />"}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [1, 0, 1, 1, 1, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
          {"}"}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-3 right-3 w-2 h-3 bg-[#06B6D4] rounded-sm"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  )
}

function DeviceVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-15">
      <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="56" height="96" rx="8" stroke="#10B981" strokeWidth="0.8" opacity="0.3" />
        <rect x="8" y="10" width="44" height="70" rx="2" stroke="#10B981" strokeWidth="0.4" opacity="0.15" />
        <motion.circle cx="30" cy="86" r="2.5" fill="#10B981" opacity="0.2"
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }} />
        <rect x="20" y="29" width="20" height="2" rx="1" fill="#10B981" opacity="0.2" />
        <rect x="14" y="35" width="32" height="2" rx="1" fill="#10B981" opacity="0.12" />
        <rect x="14" y="41" width="24" height="2" rx="1" fill="#10B981" opacity="0.12" />
        <motion.rect x="14" y="50" width="32" height="12" rx="2" fill="#10B981" opacity="0.1"
          animate={{ opacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 3, repeat: Infinity }} />
      </svg>
    </div>
  )
}

function CloudVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-12">
      <svg className="absolute top-2 right-4" width="60" height="40" viewBox="0 0 60 40" fill="none">
        <motion.path
          d="M10 28 C10 22 15 18 20 18 C20 12 28 8 35 10 C38 6 46 6 48 12 C54 12 56 18 52 22 C56 26 52 32 46 30 C42 34 32 34 28 30 C22 32 14 30 10 28Z"
          fill="#06B6D4" opacity="0.12"
          animate={{ d: [
            "M10 28 C10 22 15 18 20 18 C20 12 28 8 35 10 C38 6 46 6 48 12 C54 12 56 18 52 22 C56 26 52 32 46 30 C42 34 32 34 28 30 C22 32 14 30 10 28Z",
            "M10 30 C10 24 15 20 22 20 C22 14 30 10 37 12 C40 8 48 8 50 14 C56 14 58 20 54 24 C58 28 54 34 48 32 C44 36 34 36 30 32 C24 34 14 32 10 30Z",
            "M10 28 C10 22 15 18 20 18 C20 12 28 8 35 10 C38 6 46 6 48 12 C54 12 56 18 52 22 C56 26 52 32 46 30 C42 34 32 34 28 30 C22 32 14 30 10 28Z",
          ] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <svg className="absolute bottom-4 left-3" width="40" height="28" viewBox="0 0 40 28" fill="none">
        <motion.path
          d="M6 20 C6 16 10 13 14 13 C14 9 20 6 26 8 C28 5 34 5 36 10 C40 10 42 14 38 18 C40 20 36 24 32 22 C28 24 20 24 18 22 C14 24 8 22 6 20Z"
          fill="#06B6D4" opacity="0.08"
          animate={{ x: [0, 4, 0], y: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      <svg className="absolute bottom-5 right-4" width="70" height="50" viewBox="0 0 70 50" fill="none">
        <motion.rect x="2" y="2" width="30" height="16" rx="6" fill="#2563EB" opacity="0.12"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="9" cy="10" r="1.5" fill="#2563EB" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="16" cy="10" r="1.5" fill="#2563EB" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="23" cy="10" r="1.5" fill="#2563EB" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
        </motion.circle>
        <motion.rect x="38" y="28" width="30" height="16" rx="6" fill="#2563EB" opacity="0.08"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.circle cx="45" cy="36" r="1.5" fill="#2563EB" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="52" cy="36" r="1.5" fill="#2563EB" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </motion.circle>
      </svg>
    </div>
  )
}

function DecisionVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      <svg className="absolute top-3 right-3" width="80" height="60" viewBox="0 0 80 60" fill="none">
        <motion.circle cx="15" cy="15" r="4" fill="#2563EB" opacity="0.2"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="40" cy="8" r="3" fill="#2563EB" opacity="0.15"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
        <motion.circle cx="65" cy="15" r="4" fill="#2563EB" opacity="0.2"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
        <motion.circle cx="40" cy="35" r="5" fill="#2563EB" opacity="0.25"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
        <motion.circle cx="10" cy="50" r="3" fill="#2563EB" opacity="0.12"
          animate={{ opacity: [0.06, 0.25, 0.06] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="70" cy="50" r="3" fill="#2563EB" opacity="0.12"
          animate={{ opacity: [0.06, 0.25, 0.06] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }} />

        <line x1="19" y1="15" x2="37" y2="8" stroke="#2563EB" strokeWidth="0.3" opacity="0.15" />
        <line x1="43" y1="8" x2="61" y2="15" stroke="#2563EB" strokeWidth="0.3" opacity="0.15" />
        <line x1="19" y1="15" x2="35" y2="32" stroke="#2563EB" strokeWidth="0.4" opacity="0.15" />
        <line x1="61" y1="15" x2="45" y2="32" stroke="#2563EB" strokeWidth="0.4" opacity="0.15" />
        <line x1="40" y1="40" x2="13" y2="50" stroke="#2563EB" strokeWidth="0.3" opacity="0.12" />
        <line x1="40" y1="40" x2="67" y2="50" stroke="#2563EB" strokeWidth="0.3" opacity="0.12" />

        <path d="M35 32 L40 35 L45 32" stroke="#2563EB" strokeWidth="0.4" fill="none" opacity="0.12" />
      </svg>
    </div>
  )
}

const sizeToPadding = {
  large: "p-8",
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
      rotateX.set(-(y - 0.5) * 10)
      rotateY.set((x - 0.5) * 10)
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

  const visualMap: Record<string, React.ReactNode> = {
    neural: <NeuralVisual />,
    code: <CodeVisual />,
    device: <DeviceVisual />,
    cloud: <CloudVisual />,
    chat: <ChatVisual />,
    decision: <DecisionVisual />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.55, ease: EASE_OUT }}
      className={`relative ${sizeToPadding[service.size]}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        whileTap={{ scale: 0.97 }}
        style={
          prefersReducedMotion
            ? undefined
            : {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 800,
              }
        }
        className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-sm transition-shadow duration-300 overflow-hidden cursor-default group hover:shadow-lg"
      >
        {isHovered && !prefersReducedMotion && (
          <motion.div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(280px circle at ${springGlowX}% ${springGlowY}%, ${service.color}10, transparent 60%)`,
            }}
          />
        )}

        {isHovered && !prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${springGlowX}% ${springGlowY}%, ${service.color}05, transparent 50%)`,
            }}
          />
        )}

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-px left-6 right-6 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.color}40, transparent)`,
            }}
          />
        )}

        {service.visual && visualMap[service.visual]}

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
            background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
            color: service.color,
            ...(prefersReducedMotion
              ? {}
              : {
                  rotateX: iconRotateX,
                  rotateY: iconRotateY,
                  z: iconZ,
                }),
          }}
          className={`relative flex items-center justify-center rounded-xl shadow-sm transition-shadow duration-300 group-hover:shadow-md ${
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
            className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full origin-left"
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

  const bySize = (size: ServiceItem["size"]) =>
    services.filter((s) => s.size === size)

  const [large, medium, small] = [bySize("large"), bySize("medium"), bySize("small")]

  return (
    <motion.div
      variants={!prefersReducedMotion ? containerVariants : undefined}
      initial={!prefersReducedMotion ? "hidden" : undefined}
      whileInView={!prefersReducedMotion ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      className="hidden lg:grid lg:grid-cols-4 gap-5"
    >
      <div className="lg:col-span-2 lg:row-span-2 flex flex-col gap-5">
        <TiltCard service={large[0]} index={0} />
      </div>

      <div className="flex flex-col gap-5">
        <TiltCard service={large[1]} index={1} />
        <TiltCard service={medium[0]} index={3} />
      </div>

      <div className="flex flex-col gap-5">
        <TiltCard service={large[2]} index={2} />
        <TiltCard service={medium[1]} index={4} />
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 gap-5">
        <TiltCard service={medium[2]} index={5} />
        <TiltCard service={small[0]} index={6} />
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 gap-5">
        <TiltCard service={small[1]} index={7} />
        <TiltCard service={small[2]} index={8} />
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 gap-5">
        <TiltCard service={small[3]} index={9} />
        <TiltCard service={small[4]} index={10} />
      </div>
    </motion.div>
  )
}

function TabletGrid() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  }

  return (
    <motion.div
      variants={!prefersReducedMotion ? containerVariants : undefined}
      initial={!prefersReducedMotion ? "hidden" : undefined}
      whileInView={!prefersReducedMotion ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      className="hidden md:grid lg:hidden grid-cols-2 gap-4"
    >
      {services.map((service, i) => (
        <TiltCard key={service.title} service={service} index={i} />
      ))}
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
            className="snap-center shrink-0 w-[270px] sm:w-[310px] first:ml-0 last:mr-0"
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
      <TabletGrid />
      <MobileCarousel />
    </Section>
  )
}
