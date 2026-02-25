"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { FATLogo } from "@/components/fat/fat-logo"

const sections = [
  { id: "brand-story", label: "Our Story" },
  { id: "mission-vision", label: "FAT Mission & Vision" },
  { id: "event-overview", label: "Event Overview S/S26" },
  { id: "audience-impact", label: "Audience & Impact" },
  { id: "partnership-tiers", label: "Partnership Tiers" },
  { id: "social-media-packages", label: "Social Media Packages" },
  { id: "activations", label: "Activation Opportunities" },
  { id: "past-partners", label: "Previous Partners" },
  { id: "contact", label: "Contact Us" },
]

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest(".mobile-nav-menu") && !target.closest(".hamburger-button")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Hamburger Button - Fixed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-button fixed top-6 right-6 z-[60] md:hidden bg-black text-white p-3 rounded-md hover:bg-[#FF0033] transition-colors duration-300"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Fixed Sidebar */}
      <nav
        aria-label="Table of contents"
        className={cn(
          "hidden md:block fixed left-0 top-0 h-screen w-72 bg-black text-white z-50 overflow-y-auto",
          "border-r border-white/10",
          className
        )}
      >
        <div className="p-8 flex flex-col h-full">
          <FATLogo variant="compact" className="mb-8" />
          <span className="text-[#FF0033] font-sans text-xs tracking-[0.25em] uppercase block mb-8">
            In This Report
          </span>
          <ul className="flex flex-col gap-4 flex-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "font-sans text-sm block py-2 transition-colors duration-300 cursor-pointer border-l-2",
                    activeSection === section.id
                      ? "border-[#FF0033] text-[#FF0033] pl-4 font-semibold"
                      : "border-transparent text-white/70 hover:text-[#FF0033] hover:border-[#FF0033] pl-4"
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={cn(
          "mobile-nav-menu fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-black text-white z-50 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          "border-l border-white/10",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-8 pt-20 flex flex-col h-full">
          <FATLogo variant="compact" className="mb-8" />
          <span className="text-[#FF0033] font-sans text-xs tracking-[0.25em] uppercase block mb-8">
            In This Report
          </span>
          <ul className="flex flex-col gap-4 flex-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={handleLinkClick}
                  className={cn(
                    "font-sans text-sm block py-2 transition-colors duration-300 cursor-pointer border-l-2",
                    activeSection === section.id
                      ? "border-[#FF0033] text-[#FF0033] pl-4 font-semibold"
                      : "border-transparent text-white/70 hover:text-[#FF0033] hover:border-[#FF0033] pl-4"
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
