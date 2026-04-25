"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Trophy, 
  Code2, 
  MessageSquare, 
  Palette, 
  Music, 
  Camera,
  Gamepad2,
  Rocket
} from "lucide-react"

const activities = [
  {
    icon: Trophy,
    title: "Sports Teams",
    description: "Football, basketball, volleyball, swimming, and more. Compete or play for fun.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    icon: Code2,
    title: "Coding Club",
    description: "Learn programming, build apps, participate in hackathons and tech competitions.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: MessageSquare,
    title: "Debate Club",
    description: "Develop critical thinking and public speaking through structured debates.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Palette,
    title: "Art Studio",
    description: "Express yourself through painting, sculpture, digital art, and mixed media.",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: Music,
    title: "Music & Band",
    description: "Learn instruments, join the school band, or explore music production.",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
  {
    icon: Camera,
    title: "Photography Club",
    description: "Capture moments, learn techniques, and showcase your work in exhibitions.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Gamepad2,
    title: "E-Sports Team",
    description: "Competitive gaming teams for various games with organized tournaments.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Rocket,
    title: "Science Club",
    description: "Experiments, robotics, science fairs, and exploration of STEM fields.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
]

export function StudentLife() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="student-life" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Student</span> Life
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Education extends beyond academics. Our extracurricular activities help students 
            discover passions, build friendships, and develop well-rounded personalities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${activity.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <activity.icon className={`w-6 h-6 ${activity.color}`} />
                  </div>
                  <CardTitle className="text-foreground text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">20+ Clubs & Activities</span>
            <span className="text-muted-foreground">available for all students</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
