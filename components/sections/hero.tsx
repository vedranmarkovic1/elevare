"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="Elevare International Academy"
              width={180}
              height={180}
              className="mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Future-Oriented Education</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            <span className="text-foreground">Elevare</span>{" "}
            <span className="text-primary">International</span>{" "}
            <span className="text-foreground">Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Learn at your level. Grow without limits.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground mb-10 max-w-2xl text-pretty"
          >
            An innovative institution using rotational zone learning, flexible schedules, 
            and mentorship-based teaching to prepare students for real-world success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Link href="#about">
                Explore School
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
              <Link href="#contact">Apply Now</Link>
            </Button>
          </motion.div>

          {/* Features preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { label: "Zone-Based Learning", value: "4 Zones" },
              { label: "Flexible Timetable", value: "Personalized" },
              { label: "Real-Life Skills", value: "Practical" },
              { label: "Mentorship System", value: "1:15 Ratio" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  )
}
