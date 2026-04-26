"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, ArrowLeft, Sparkles, Loader2 } from "lucide-react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import "@fontsource/playfair-display/400.css"
import "@fontsource/playfair-display/600.css"
import "@fontsource/playfair-display/700.css"

export default function DiplomaPreviewPage() {
  const [studentName, setStudentName] = useState("Alex Johnson")
  const [isDownloading, setIsDownloading] = useState(false)
  const diplomaRef = useRef<HTMLDivElement>(null)
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleDownloadPDF = async () => {
    if (!diplomaRef.current) {
      console.log("[v0] diplomaRef is null")
      return
    }
    
    setIsDownloading(true)
    console.log("[v0] Starting PDF generation...")
    
    try {
      console.log("[v0] Creating canvas...")
      const canvas = await html2canvas(diplomaRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fdfcf7",
        logging: true,
      })
      
      console.log("[v0] Canvas created, dimensions:", canvas.width, canvas.height)
      
      const imgData = canvas.toDataURL("image/png")
      console.log("[v0] Image data created")
      
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })
      
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = (pdfHeight - imgHeight * ratio) / 2
      
      console.log("[v0] Adding image to PDF...")
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      
      // Add SPECIMEN watermark diagonally
      console.log("[v0] Adding watermark...")
      
      const watermarkText = "SPECIMEN"
      
      // Center of page
      const centerX = pdfWidth / 2
      const centerY = pdfHeight / 2
      
      // Draw watermarks with red color
      pdf.setTextColor(200, 200, 200)
      pdf.setFontSize(80)
      
      // Draw multiple watermarks
      pdf.text(watermarkText, centerX, centerY, {
        align: "center",
        angle: 45,
      })
      
      pdf.setFontSize(60)
      pdf.text(watermarkText, pdfWidth / 5, pdfHeight / 4, {
        align: "center", 
        angle: 45,
      })
      
      pdf.text(watermarkText, (pdfWidth * 4) / 5, (pdfHeight * 3) / 4, {
        align: "center",
        angle: 45,
      })
      
      console.log("[v0] Saving PDF...")
      pdf.save(`Elevare_Diploma_${studentName.replace(/\s+/g, "_")}.pdf`)
      console.log("[v0] PDF saved successfully!")
    } catch (error) {
      console.error("[v0] Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Elevare International Academy"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="hidden sm:block text-lg font-semibold text-primary">Elevare</span>
            </Link>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Warning Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-4 mb-8 text-center"
          >
            <p className="text-amber-400 font-semibold text-sm md:text-base">
              THIS IS ONLY A WORK VERSION. IT IS NOT OFFICIAL DIPLOMA.
            </p>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Diploma Preview</h1>
            <p className="text-muted-foreground">See what your diploma from Elevare International Academy will look like</p>
          </motion.div>

          {/* Customize Name Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <label htmlFor="studentName" className="text-foreground font-medium">
                Customize Name:
              </label>
            </div>
            <Input
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student name"
              className="max-w-xs bg-secondary border-border text-center"
            />
          </motion.div>

          {/* Diploma */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75" />
            
            {/* Diploma Card */}
            <div 
              ref={diplomaRef}
              className="relative bg-gradient-to-br from-[#fdfcf7] via-[#fffef9] to-[#f8f6f0] rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 border-8 border-double border-primary/30 mx-auto max-w-3xl"
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/40" />

              {/* Inner Border */}
              <div className="border border-primary/20 p-6 md:p-10">
                {/* Logo and School Name */}
                <div className="flex flex-col items-center mb-8">
                  <img
                    src="/images/logo.png"
                    alt="Elevare International Academy"
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h2 
                    className="text-2xl md:text-3xl text-[#0a1628] tracking-widest"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ELEVARE INTERNATIONAL ACADEMY
                  </h2>
                  <p className="text-[#6b7280] text-sm tracking-wider mt-1">Learn. Grow. Elevate.</p>
                </div>

                {/* Diploma Title */}
                <div className="text-center mb-8">
                  <h1 
                    className="text-4xl md:text-5xl text-primary font-semibold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Diploma of Completion
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                </div>

                {/* Certificate Text */}
                <div className="text-center mb-8">
                  <p className="text-[#4b5563] text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    This certifies that
                  </p>
                  <p 
                    className="text-3xl md:text-4xl text-[#0a1628] font-semibold border-b-2 border-primary/30 pb-2 mb-4 inline-block px-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {studentName || "Student Name"}
                  </p>
                  <p 
                    className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    has successfully completed the full educational program and demonstrated both academic knowledge and real-life competencies.
                  </p>
                </div>

                {/* Special Mention */}
                <div className="text-center mb-8 bg-primary/5 rounded-lg py-4 px-6">
                  <p 
                    className="text-[#4b5563] italic text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The student has shown exceptional ability in{" "}
                    <span className="text-primary font-semibold not-italic">Chemistry</span>.
                  </p>
                </div>

                {/* Final Assessment */}
                <div className="text-center mb-10">
                  <div className="inline-block bg-primary/10 rounded-full px-8 py-3">
                    <p 
                      className="text-xl text-[#0a1628] font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Final Assessment: <span className="text-primary">Distinction</span>
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="text-center mb-10">
                  <p className="text-[#6b7280] text-sm">Awarded on</p>
                  <p 
                    className="text-[#0a1628] text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {currentDate}
                  </p>
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-8 md:gap-16 mb-8">
                  <div className="text-center">
                    <div className="border-b border-[#0a1628]/30 mb-2 h-12" />
                    <p 
                      className="text-[#0a1628] font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Principal
                    </p>
                    <p className="text-[#6b7280] text-sm">Dr. Vedran Markovic</p>
                  </div>
                  <div className="text-center">
                    <div className="border-b border-[#0a1628]/30 mb-2 h-12" />
                    <p 
                      className="text-[#0a1628] font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Academic Coordinator
                    </p>
                    <p className="text-[#6b7280] text-sm">Prof. Veljko Stevanic</p>
                  </div>
                </div>

                {/* Official Seal */}
                <div className="flex justify-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/60 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <div className="text-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-1">
                          <img
                            src="/images/logo.png"
                            alt="Official Seal"
                            width={56}
                            height={56}
                            className="rounded-full opacity-80"
                          />
                        </div>
                        <p className="text-[8px] md:text-[10px] text-primary/80 font-semibold tracking-wider">OFFICIAL SEAL</p>
                      </div>
                    </div>
                    {/* Seal Ring */}
                    <div className="absolute inset-[-4px] rounded-full border-2 border-dashed border-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button 
              size="lg" 
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download as PDF
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
