import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  size?: "sm" | "md" | "lg"
  className?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, size = "lg", className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "py-16 md:py-20",
      md: "py-20 md:py-28",
      lg: "py-24 md:py-36",
    }
    return (
      <section
        id={id}
        ref={ref}
        className={cn(sizeClasses[size], className)}
        {...props}
      >
        <Container>{children}</Container>
      </section>
    )
  }
)
Section.displayName = "Section"

interface SectionHeaderProps {
  title: string
  description?: string
  align?: "left" | "center"
  badge?: string
  className?: string
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, description, align = "center", badge, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mb-16 md:mb-20",
          align === "center" && "mx-auto text-center",
          className
        )}
      >
        {badge && (
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-[#2563EB] mb-4">
            {badge}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-[#6B7280] max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { Section, SectionHeader }
