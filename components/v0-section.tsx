'use client'

import { motion } from 'framer-motion'
import { Bot, Code, Cpu, Zap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'I am an AI coding assistant created by Vercel, designed to help with various programming tasks.'
  },
  {
    icon: Code,
    title: 'Multi-Language Support',
    description: 'I can assist with multiple programming languages and frameworks, with a focus on web development.'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'I can quickly generate code snippets and entire components to speed up your development process.'
  },
  {
    icon: Cpu,
    title: 'Continuous Learning',
    description: 'I am constantly updated with the latest technologies and best practices in software development.'
  }
]

export function V0Section() {
  return (
    <section id="v0" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet v0 - Your AI Coding Assistant
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-12 text-center text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I'm here to assist you with your coding needs, provide guidance on best practices, and help you build amazing web applications. Feel free to ask me anything about web development, and I'll do my best to help!
        </motion.p>
      </div>
    </section>
  )
}

