'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const workExperience = [
  {
    position: "Cyber Security Intern",
    company: "TechGuard Solutions",
    period: "June 2023 - August 2023",
    responsibilities: [
      "Assisted in conducting vulnerability assessments and penetration testing on web applications",
      "Developed and implemented security policies and procedures for client organizations",
      "Participated in incident response drills and contributed to the creation of incident response playbooks",
      "Conducted research on emerging cyber threats and presented findings to the security team",
      "Collaborated with the SOC team to analyze and respond to security alerts",
    ],
    achievements: [
      "Identified and helped patch 3 critical vulnerabilities in a client's web application",
      "Developed an automated script that reduced the time for routine security checks by 40%",
      "Received commendation for exceptional performance and innovative problem-solving skills",
    ],
  },
  {
    position: "Web Development Project Lead",
    company: "University Hackathon",
    period: "April 2023",
    responsibilities: [
      "Led a team of 3 developers to create a responsive web application for event management",
      "Designed and implemented the frontend using React and Tailwind CSS",
      "Developed RESTful APIs using Node.js and Express for backend functionality",
      "Implemented user authentication and authorization using JWT",
      "Set up and managed the MongoDB database for storing event and user data",
    ],
    achievements: [
      "Won 2nd place for best user experience and innovative features",
      "Completed the project within the 48-hour hackathon timeframe",
      "Successfully integrated real-time notifications using Socket.io",
    ],
  },
  {
    position: "IT Support Volunteer",
    company: "Local Community Center",
    period: "January 2023 - March 2023",
    responsibilities: [
      "Provided technical support and troubleshooting for computer systems and networks",
      "Conducted basic computer literacy workshops for senior citizens",
      "Assisted in setting up and maintaining the center's website using WordPress",
      "Implemented basic security measures to protect the center's digital assets",
      "Created user guides and documentation for common IT procedures",
    ],
    achievements: [
      "Improved the center's website load time by 50% through optimization techniques",
      "Received positive feedback from 95% of workshop participants",
      "Implemented a ticketing system that improved IT support response time by 30%",
    ],
  }
]

export function WorkExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{job.position}</h3>
                  <p className="text-purple-400 mb-2">{job.company}</p>
                  <p className="text-gray-400 flex items-center mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.period}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-purple-400" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-purple-400" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

