"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, RotateCcw, Calendar, Zap } from "lucide-react"

const scheduleBlocks = [
  {
    time: "08:00 - 09:30",
    block: "Block A",
    zones: ["Focus Zone", "Collaboration Zone"],
    activity: "Core Subject Learning",
    color: "bg-blue-400/20 border-blue-400/30",
  },
  {
    time: "09:45 - 11:15",
    block: "Block B",
    zones: ["Life Skills Zone", "Focus Zone"],
    activity: "Practical Skills / Individual Study",
    color: "bg-emerald-400/20 border-emerald-400/30",
  },
  {
    time: "11:30 - 12:30",
    block: "Break",
    zones: ["Recreation Area"],
    activity: "Lunch & Social Time",
    color: "bg-orange-400/20 border-orange-400/30",
  },
  {
    time: "12:30 - 14:00",
    block: "Block C",
    zones: ["Collaboration Zone", "Life Skills Zone"],
    activity: "Group Projects / Mentorship",
    color: "bg-purple-400/20 border-purple-400/30",
  },
  {
    time: "14:15 - 15:45",
    block: "Block D",
    zones: ["Sports & Recreation", "Focus Zone"],
    activity: "Physical Activity / Optional Study",
    color: "bg-green-400/20 border-green-400/30",
  },
]

const features = [
  {
    icon: RotateCcw,
    title: "Rotational System",
    description: "Students rotate through zones, not static classrooms",
  },
  {
    icon: Clock,
    title: "Flexible Blocks",
    description: "90-minute learning blocks for deep engagement",
  },
  {
    icon: Calendar,
    title: "Personalized Schedule",
    description: "Adjusted based on student needs and goals",
  },
  {
    icon: Zap,
    title: "Dynamic Learning",
    description: "Varied activities keep energy and focus high",
  },
]

export function Timetable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="timetable" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Flexible</span> Timetable
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our rotational zone schedule replaces traditional class periods with dynamic learning blocks, 
            keeping students engaged and energized throughout the day.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
              <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-border">
              <CardTitle className="text-foreground text-center">Sample Daily Schedule</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left text-sm font-semibold text-muted-foreground">Time</th>
                      <th className="p-4 text-left text-sm font-semibold text-muted-foreground">Block</th>
                      <th className="p-4 text-left text-sm font-semibold text-muted-foreground">Zones</th>
                      <th className="p-4 text-left text-sm font-semibold text-muted-foreground">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleBlocks.map((block, index) => (
                      <motion.tr
                        key={block.block}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className={`border-b border-border last:border-b-0 ${block.color}`}
                      >
                        <td className="p-4 text-sm text-foreground font-mono">{block.time}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="border-foreground/20 text-foreground">
                            {block.block}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {block.zones.map((zone) => (
                              <span key={zone} className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                                {zone}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 text-sm text-foreground">{block.activity}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * Schedules are personalized based on student needs and may vary. Extracurricular activities available after school hours.
        </motion.p>
      </div>
    </section>
  )
}
