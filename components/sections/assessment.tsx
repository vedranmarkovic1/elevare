"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Star, Smile, FileCheck, TrendingUp } from "lucide-react"

const grades = [
  { grade: "5", label: "Excellent", emoji: "🌟", color: "bg-green-400/20 border-green-400/50 text-green-400" },
  { grade: "4", label: "Very Good", emoji: "😊", color: "bg-blue-400/20 border-blue-400/50 text-blue-400" },
  { grade: "3", label: "Good", emoji: "🙂", color: "bg-yellow-400/20 border-yellow-400/50 text-yellow-400" },
  { grade: "2", label: "Satisfactory", emoji: "😐", color: "bg-orange-400/20 border-orange-400/50 text-orange-400" },
  { grade: "1", label: "Needs Work", emoji: "📚", color: "bg-red-400/20 border-red-400/50 text-red-400" },
]

const methods = [
  {
    icon: FileCheck,
    title: "Project-Based Evaluation",
    description: "Students demonstrate understanding through real projects, presentations, and practical applications.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Assessment",
    description: "Regular check-ins track progress over time, reducing stress from single high-stakes tests.",
  },
  {
    icon: Smile,
    title: "Emoji Performance System",
    description: "Visual feedback helps students understand their standing in an accessible, friendly format.",
  },
  {
    icon: Star,
    title: "Portfolio Development",
    description: "Students build portfolios showcasing their best work and growth throughout the year.",
  },
]

export function Assessment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="assessment" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Assessment</span> System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe in measuring understanding, not memorization. Our assessment system 
            focuses on growth, practical application, and individual progress.
          </p>
        </motion.div>

        {/* Grading Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Grading Scale (1-5)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {grades.map((item, index) => (
              <motion.div
                key={item.grade}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border ${item.color}`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="text-2xl font-bold">{item.grade}</div>
                  <div className="text-xs opacity-80">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assessment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full bg-card border-border">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground text-lg">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* External Platform Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <Card className="inline-block bg-card border-border p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-left">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">External Platform</Badge>
                <p className="text-foreground font-medium">Access grades and progress reports online</p>
                <p className="text-muted-foreground text-sm">ES Dnevnik - Digital Grade Book</p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shrink-0">
                <Link href="https://esdnevnik-rs.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Open ES Dnevnik
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
