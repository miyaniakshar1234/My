'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function NavHeader() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="#" className="text-2xl font-bold relative">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white">AM</span>
              </motion.div>
            </Link>
          </motion.div>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="outline" className="hidden md:inline-flex" onClick={() => scrollToSection('#contact')}>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

