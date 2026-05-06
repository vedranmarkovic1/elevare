import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  explore: [
    { href: "#about", label: "About Us" },
    { href: "#subjects", label: "Subjects" },
    { href: "#timetable", label: "Timetable" },
    { href: "#student-life", label: "Student Life" },
  ],
  academics: [
    { href: "#assessment", label: "Assessment System" },
    { href: "#staff", label: "Our Staff" },
    { href: "#diploma", label: "Final Diploma" },
    { href: "https://esdnevnik-rs.vercel.app/", label: "ES Dnevnik" },
  ],
  connect: [
    { href: "#contact", label: "Contact Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "News" },
    { href: "#", label: "Events" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Elevare International Academy"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
            <h3 className="text-xl font-semibold text-primary">Elevare International Academy</h3>
            <p className="text-muted-foreground text-sm">Learn. Grow. Elevate.</p>
            <p className="text-muted-foreground text-sm">
              An innovative, future-oriented institution preparing students for real-world success.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Academics</h4>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elevare International Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
