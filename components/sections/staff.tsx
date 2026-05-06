"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, HeartHandshake, BookMarked } from "lucide-react"

const staffRoles = [
  {
    icon: GraduationCap,
    title: "Teacher Mentors",
    description: "Our teachers serve as mentors, guiding students through personalized learning journeys. Each mentor works with small groups, ensuring individual attention and support.",
    highlights: ["1:15 teacher-student ratio", "Personalized guidance", "Subject expertise"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookMarked,
    title: "Academic Coordinators",
    description: "Coordinators oversee curriculum delivery, ensure learning objectives are met, and help teachers adapt methods to student needs.",
    highlights: ["Curriculum oversight", "Quality assurance", "Teacher support"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: HeartHandshake,
    title: "School Counselors",
    description: "Professional counselors support student well-being, help with academic planning, and provide guidance for personal challenges.",
    highlights: ["Mental health support", "Career guidance", "Academic planning"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    icon: Users,
    title: "Support Staff",
    description: "Dedicated support staff ensure smooth daily operations, from administrative tasks to maintaining our learning environments.",
    highlights: ["Administrative support", "Facility management", "Student services"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
]

export function Staff() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="staff" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Staff</span> & Organization
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our dedicated team of educators and support staff work together to create 
            a nurturing environment where every student can thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {staffRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${role.bgColor} flex items-center justify-center`}>
                      <role.icon className={`w-7 h-7 ${role.color}`} />
                    </div>
                    <CardTitle className="text-foreground text-xl">{role.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground text-base">
                    {role.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Emphasis on personalized learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Personalized Learning at its Core</h3>
            <p className="text-muted-foreground text-pretty">
              Every member of our staff is committed to understanding each student&apos;s unique 
              learning style, strengths, and areas for growth. Through regular check-ins, 
              mentorship sessions, and collaborative planning, we ensure no student is left behind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
