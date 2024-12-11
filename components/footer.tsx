import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Mail, href: "mailto:miyaniakshar1234@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshar-miyani-248067286/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/miyaniakshar1234", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/akshar__miyani/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/AksharM74615", label: "X (Twitter)" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Akshar Miyani</h3>
            <p className="text-sm text-gray-400">BCA (Cyber Security) Student</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Akshar Miyani. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

