"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator, 
  FlaskConical, 
  Languages, 
  Globe, 
  BookOpen,
  Wallet,
  Scale,
  Brain,
  Briefcase,
  Heart,
  Code,
  Palette
} from "lucide-react"

const coreSubjects = [
  { icon: Calculator, name: "Mathematics", description: "Algebra, geometry, statistics, and applied math" },
  { icon: FlaskConical, name: "Sciences", description: "Physics, chemistry, biology, and environmental science" },
  { icon: Languages, name: "Languages", description: "English, Serbian, and optional foreign languages" },
  { icon: Globe, name: "Geography", description: "Physical and human geography, global studies" },
  { icon: BookOpen, name: "History", description: "World history, national history, and civics" },
  { icon: Code, name: "Technology", description: "Computer science, digital literacy, and programming" },
]

const lifeSkills = [
  { icon: Wallet, name: "Personal Finance", description: "Budgeting, investing, taxes, and financial planning" },
  { icon: Scale, name: "Legal Literacy", description: "Basic law, rights, contracts, and civic responsibilities" },
  { icon: Brain, name: "Mental Health", description: "Emotional intelligence, stress management, well-being" },
  { icon: Briefcase, name: "Career Development", description: "Resume building, interviews, workplace skills" },
  { icon: Heart, name: "Health & Wellness", description: "Nutrition, first aid, physical health awareness" },
  { icon: Palette, name: "Creative Arts", description: "Visual arts, music, design thinking, and expression" },
]

export function Subjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="subjects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Subjects</span> & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A balanced curriculum combining core academics with essential life skills. 
            Small groups of 10–15 students per teacher ensure personalized attention.
          </p>
        </motion.div>

        {/* Core Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold">Core Subjects</h3>
            <Badge variant="outline" className="border-primary/50 text-primary">Required</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <subject.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{subject.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Life Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold">Life Skills</h3>
            <Badge variant="outline" className="border-emerald-400/50 text-emerald-400">Practical</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSkills.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-emerald-400/50 transition-all duration-300 group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                      <subject.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{subject.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note about optional subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 p-6 rounded-xl bg-secondary border border-border text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Optional Specialization:</span> Students can choose 
            additional electives based on their interests and career goals, with guidance from their mentors.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
