'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Calendar, Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const educationData = [
  {
    institution: "Gyanmanjari Innovative University",
    degree: "BCA (Cyber Security)",
    period: "2023 - 2027 (Expected)",
    details: "Currently pursuing a Bachelor's degree in Computer Applications with a specialization in Cyber Security. Maintaining a CGPA of 8.5/10.",
  },
  {
    institution: "Shree Vidhayadhish Vidhaya Sankul",
    degree: "HSC (Commerce)",
    period: "2021 - 2023",
    details: "Completed Higher Secondary Education with a focus on Commerce. Achieved 77.89% in the final examinations.",
  },
  {
    institution: "Shree Swaminarayan Gurukul",
    degree: "SSC",
    period: "2019 - 2021",
    details: "Completed Secondary School Education. Secured 59.68% in the board examinations.",
  },
]

const certificatesData = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "June 2023",
    description: "Gained comprehensive knowledge in ethical hacking methodologies and techniques."
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "August 2023",
    description: "Acquired foundational knowledge of core security functions and best practices."
  },
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "March 2023",
    description: "Learned full-stack web development including HTML, CSS, JavaScript, Node.js, and React."
  },
  {
    name: "Python for Cybersecurity Specialization",
    issuer: "Coursera",
    date: "October 2023",
    description: "Mastered Python programming skills specifically tailored for cybersecurity applications."
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "December 2023",
    description: "Gained foundational understanding of AWS Cloud services, security, and architecture."
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Academic Background</h3>
            {educationData.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">{item.institution}</h4>
                    <p className="text-purple-400 flex items-center"><BookOpen className="w-4 h-4 mr-2" />{item.degree}</p>
                    <p className="text-gray-400 flex items-center mt-2"><Calendar className="w-4 h-4 mr-2" />{item.period}</p>
                    <p className="text-gray-300 mt-2">{item.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Certifications</h3>
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      {cert.name}
                    </h4>
                    <p className="text-purple-400">{cert.issuer}</p>
                    <p className="text-gray-400 flex items-center mt-2"><Calendar className="w-4 h-4 mr-2" />{cert.date}</p>
                    <p className="text-gray-300 mt-2">{cert.description}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

