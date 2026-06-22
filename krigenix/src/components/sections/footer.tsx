import * as React from "react"
import { Container } from "@/components/ui/container"

const company = {
  title: "KriGenix",
  description: "Transforming businesses through AI and technology. We design, build, and automate digital solutions that help businesses grow.",
}

const navLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  solutions: [
    { label: "AI Automation", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "App Development", href: "#services" },
    { label: "SaaS Development", href: "#services" },
  ],
  ecosystem: [
    { label: "Brandex", href: "#ecosystem" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "Instagram", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                KriGenix
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {company.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {navLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-3">
              {navLinks.ecosystem.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mt-6 mb-4">
              Social
            </h4>
            <ul className="space-y-3">
              {navLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KriGenix. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs">
              Built with precision by{" "}
              <span className="text-gray-400">KriGenix × Brandex</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
