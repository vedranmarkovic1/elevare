import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Subjects } from "@/components/sections/subjects"
import { Timetable } from "@/components/sections/timetable"
import { StudentLife } from "@/components/sections/student-life"
import { Assessment } from "@/components/sections/assessment"
import { Staff } from "@/components/sections/staff"
import { Diploma } from "@/components/sections/diploma"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Subjects />
      <Timetable />
      <StudentLife />
      <Assessment />
      <Staff />
      <Diploma />
      <Contact />
      <Footer />
    </main>
  )
}
