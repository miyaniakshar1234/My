'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Shield, Brain, Book, Users } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Proficient in creating responsive and modern web applications using latest technologies.'
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Focused on understanding and implementing robust security measures in digital systems.'
  },
  {
    icon: Globe,
    title: 'Problem Solving',
    description: 'Passionate about solving complex technical challenges with innovative solutions.'
  },
  {
    icon: Brain,
    title: 'Continuous Learning',
    description: 'Always eager to learn new technologies and stay updated with the latest industry trends.'
  },
  {
    icon: Book,
    title: 'Research Skills',
    description: 'Experienced in conducting in-depth research on various tech topics and security vulnerabilities.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Skilled in working effectively in team environments and contributing to group projects.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <motion.p 
            className="text-lg text-zinc-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hello! I'm Akshar Miyani, a dedicated and passionate BCA (Cyber Security) student currently studying at
            Gyanmanjari Innovative University. I have always been fascinated by technology and its ability to solve
            real-world problems.
          </motion.p>
          <motion.p 
            className="text-lg text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My journey in the world of technology began with a curiosity about how digital systems work and how they can be
            secured. This curiosity has driven me to constantly expand my knowledge and skills in various areas of computer
            science, with a particular focus on cybersecurity and web development.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              <div className="relative p-8 rounded-lg border border-white/10 bg-black/50 group-hover:border-purple-500/50 transition-colors">
                <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

