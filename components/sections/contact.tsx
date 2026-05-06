"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { sendApplication } from "@/app/actions/send-application"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    const result = await sendApplication(data)

    setIsLoading(false)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError("An error occurred while sending. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Join</span> Elevare International School
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to begin your journey with us? Reach out to learn more about enrollment,
            schedule a visit, or ask any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We&apos;d love to hear from you. Whether you&apos;re a prospective student, parent,
                or just curious about our approach to education.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">33, Milana Rakica St.<br />Belgrade, Serbia 11000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@elevare.academy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">011 2412 682</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we&apos;ll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="name">Name and Surname</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          disabled={isLoading}
                          className="bg-secondary border-border"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          disabled={isLoading}
                          className="bg-secondary border-border"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about yourself and what you'd like to know..."
                          rows={5}
                          required
                          disabled={isLoading}
                          className="bg-secondary border-border resize-none"
                        />
                      </Field>
                      {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                      )}
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Application
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
