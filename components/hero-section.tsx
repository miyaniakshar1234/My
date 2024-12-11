'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,50,255,0.1),transparent)]" />
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-white via-purple-200 to-purple-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Akshar Miyani
              </motion.h1>
              <motion.p 
                className="text-xl text-zinc-400 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                BCA (Cyber Security) student passionate about bridging innovation and security in the digital landscape
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => {
                  const element = document.querySelector('#projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Akshar Miyani"
                width={300}
                height={400}
                className="rounded-lg object-cover border-4 border-white/10 shadow-2xl relative z-10 w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => {
              const aboutSection = document.querySelector('#about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

