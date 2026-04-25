"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Brain, Target, Lightbulb, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Understanding-Based Assessment",
    description: "Yearly evaluations focus on demonstrating true understanding rather than memorizing facts for a single exam.",
  },
  {
    icon: Target,
    title: "Life-Oriented Evaluation",
    description: "80% of the final assessment focuses on practical skills, real-world applications, and personal development.",
  },
  {
    icon: Lightbulb,
    title: "Core Knowledge Component",
    description: "20% covers essential academic knowledge, ensuring students have a strong foundation in key subjects.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Questioning",
    description: "Final evaluations are tailored to each student&apos;s strengths, interests, and learning journey.",
  },
]

const diplomaIncludes = [
  "Academic achievement records",
  "Life skills competency certification",
  "Project portfolio summary",
  "Mentor evaluation & recommendations",
  "Extracurricular achievements",
  "Community service hours",
]

export function Diploma() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diploma" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Final Assessment</span> & Diploma
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            No traditional final exams. Our diploma represents genuine understanding, 
            practical capabilities, and readiness for the real world.
          </p>
        </motion.div>

        {/* No Traditional Exams Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 p-6 rounded-2xl bg-primary/10 border border-primary/30 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">No High-Stakes Final Exams</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe your entire learning journey matters more than a single test day. 
            Assessment is continuous, meaningful, and stress-free.
          </p>
        </motion.div>

        {/* Assessment Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full bg-card border-border">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Diploma Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-foreground text-xl">Your Elevare Diploma Includes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {diplomaIncludes.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
