"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 md:h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0F172A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-[#0F172A] tracking-tight">
              KriGenix
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-[#0F172A]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-[#6B7280] hover:text-[#0F172A] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
