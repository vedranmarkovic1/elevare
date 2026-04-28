import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SpecialTabPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Dimitrije Đuknić – Head Janitor
          </h1>

          {/* Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-2xl aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/djuknic.jpg"
                alt="Dimitrije Đuknić"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-6">
              Dimitrije Đuknić serves as the Head Janitor at our school, playing a vital role in maintaining the safety, cleanliness, and overall functionality of our school environment. With dedication and strong leadership, he oversees a team of janitorial staff, ensuring that every part of the campus meets the highest standards.
            </p>
            <p className="mb-6">
              Together with his colleagues, Dimitrije works tirelessly behind the scenes to provide students and staff with a well-maintained and welcoming space for learning and development. From daily maintenance to handling unexpected challenges, his commitment ensures that the school operates smoothly at all times.
            </p>
            <p>
              His attention to detail, responsibility, and teamwork make him an essential part of the Elevare community.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
