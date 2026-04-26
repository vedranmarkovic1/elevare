"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#timetable", label: "Timetable" },
  { href: "#student-life", label: "Student Life" },
  { href: "#assessment", label: "Assessment" },
  { href: "#staff", label: "Staff" },
  { href: "/diploma-preview", label: "Diploma" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Elevare International Academy"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="hidden sm:block text-lg font-semibold text-primary"> Elevare International Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
