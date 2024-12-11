'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const socialLinks = [
  { icon: Mail, href: "mailto:miyaniakshar1234@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshar-miyani-248067286/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/miyaniakshar1234", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/akshar__miyani/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/AksharM74615", label: "X (Twitter)" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out to me for collaboration or queries. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <Button key={link.href} asChild variant="outline" className="w-full justify-start">
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-5 h-5 mr-3" />
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-700 text-white"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 text-white"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-gray-700 text-white"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitStatus === 'success' && (
                    <p className="text-green-500">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500">Error sending message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

