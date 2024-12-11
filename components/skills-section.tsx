'use client'

import { motion } from 'framer-motion'
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiPhp, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss, SiGit, SiGithub, SiFigma, SiNodedotjs, SiMysql, SiMongodb, SiDocker, SiKubernetes } from 'react-icons/si'
import { FaJava, FaCode, FaServer, FaShieldAlt, FaNetworkWired, FaAws } from 'react-icons/fa'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML", icon: SiHtml5, level: 90, description: "Proficient in creating semantic and accessible HTML5 structures" },
      { name: "CSS", icon: SiCss3, level: 85, description: "Strong skills in responsive design and CSS animations" },
      { name: "JavaScript", icon: SiJavascript, level: 80, description: "Experienced in ES6+ features and asynchronous programming" },
      { name: "Python", icon: SiPython, level: 75, description: "Skilled in data analysis and automation scripting" },
      { name: "C", icon: SiC, level: 70, description: "Solid understanding of memory management and low-level programming" },
      { name: "Java", icon: FaJava, level: 65, description: "Familiar with object-oriented programming and Android development" },
      { name: "PHP", icon: SiPhp, level: 60, description: "Basic knowledge of server-side scripting and WordPress development" },
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React", icon: SiReact, level: 85, description: "Proficient in building complex UIs with hooks and context API" },
      { name: "Next.js", icon: SiNextdotjs, level: 80, description: "Experienced in server-side rendering and static site generation" },
      { name: "Node.js", icon: SiNodedotjs, level: 75, description: "Skilled in building RESTful APIs and real-time applications" },
      { name: "Bootstrap", icon: SiBootstrap, level: 90, description: "Extensive experience in rapid prototyping and responsive layouts" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, description: "Proficient in utility-first CSS and custom design systems" },
    ]
  },
  {
    category: "Databases & DevOps",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 80, description: "Experienced in database design and complex SQL queries" },
      { name: "MongoDB", icon: SiMongodb, level: 75, description: "Skilled in NoSQL database management and aggregation pipelines" },
      { name: "Git", icon: SiGit, level: 85, description: "Proficient in version control and collaborative development workflows" },
      { name: "Docker", icon: SiDocker, level: 70, description: "Familiar with containerization and microservices architecture" },
      { name: "AWS", icon: FaAws, level: 60, description: "Basic knowledge of cloud services and serverless computing" },
    ]
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Network Security", icon: FaNetworkWired, level: 75, description: "Understanding of firewalls, VPNs, and intrusion detection systems" },
      { name: "Web Application Security", icon: FaShieldAlt, level: 80, description: "Experienced in identifying and mitigating common web vulnerabilities" },
      { name: "Penetration Testing", icon: FaCode, level: 70, description: "Familiar with ethical hacking tools and methodologies" },
    ]
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{category.category}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <motion.div 
                        key={skill.name} 
                        className="space-y-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon className="w-5 h-5 text-purple-400" />
                            <span className="text-gray-300 font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        >
                          <Progress value={skill.level} className="h-2" indicatorClassName="bg-purple-500" />
                        </motion.div>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </motion.div>
                    ))}
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

