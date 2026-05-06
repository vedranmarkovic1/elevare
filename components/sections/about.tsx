"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Focus, Users, Leaf, Dumbbell } from "lucide-react"

const zones = [
  {
    icon: Focus,
    title: "Focus Zone",
    description: "Quiet, individual learning spaces designed for deep concentration and self-paced study.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Users,
    title: "Collaboration Zone",
    description: "Interactive spaces for group projects, discussions, and peer-to-peer learning experiences.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    icon: Leaf,
    title: "Life Skills Zone",
    description: "Practical areas for learning finance, law, mental health, and essential real-world skills.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Dumbbell,
    title: "Sports & Recreation",
    description: "Physical activity spaces promoting health, teamwork, and balanced development.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Revolutionizing</span> Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We&apos;ve reimagined the traditional classroom model. At Elevare, students rotate through 
            specialized learning zones, focusing on progress rather than pressure.
          </p>
        </motion.div>

        {/* Key Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">No Traditional Classrooms</h3>
            <p className="text-muted-foreground">
              Instead of static rooms, students move through dynamic zones tailored to different learning styles and activities.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">Rotational System</h3>
            <p className="text-muted-foreground">
              Scheduled rotations ensure varied learning experiences throughout the day, keeping engagement high.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">Progress, Not Pressure</h3>
            <p className="text-muted-foreground">
              Our assessment focuses on individual growth and understanding, not competition or standardized testing.
            </p>
          </div>
        </motion.div>

        {/* Learning Zones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Learning Zones</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${zone.bgColor} flex items-center justify-center mb-2`}>
                      <zone.icon className={`w-6 h-6 ${zone.color}`} />
                    </div>
                    <CardTitle className="text-foreground">{zone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {zone.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
