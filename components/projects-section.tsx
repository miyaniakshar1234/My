'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Modal } from '@/components/ui/modal'

const projectsData = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built using HTML, CSS, and Bootstrap, showcasing my projects, skills, and contact details.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "CSS", "Bootstrap", "Font Awesome"],
    liveDemo: "#",
    github: "#",
    details: `
      This personal portfolio website was designed and developed to showcase my skills, projects, and experiences in web development. The project aimed to create a visually appealing and user-friendly platform that effectively communicates my professional profile to potential employers and clients.

      Key Features:
      - Responsive design that adapts to various screen sizes and devices
      - Clean and modern UI with smooth scrolling and animations
      - Sections for About Me, Skills, Projects, and Contact information
      - Integration with social media profiles and GitHub repositories
      - Contact form for easy communication

      Technical Implementation:
      - HTML5 for structuring the content
      - CSS3 and Bootstrap for styling and responsive layout
      - Custom JavaScript for interactive elements and smooth scrolling
      - Font Awesome icons for visual enhancements
      - Formspree integration for handling contact form submissions

      Challenges and Solutions:
      - Ensuring cross-browser compatibility: Extensive testing and CSS prefixing
      - Optimizing performance: Minification of assets and lazy loading of images
      - Implementing smooth scrolling: Custom JavaScript solution for better user experience

      Future Enhancements:
      - Integration of a blog section using a headless CMS
      - Adding a dark mode toggle for improved accessibility
      - Implementing more interactive elements using JavaScript libraries
    `
  },
  {
    title: "Public Library Management System",
    description: "Designed a web-based library system that allows users to search for books across multiple libraries, check availability, and reserve books.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    liveDemo: "#",
    github: "#",
    details: `
      The Public Library Management System is a comprehensive web application designed to streamline the operations of public libraries. This project aims to digitize and automate various library processes, making it easier for both librarians and patrons to manage and access library resources.

      Key Features:
      - User authentication and role-based access control
      - Book catalog with advanced search and filtering options
      - Book reservation and renewal system
      - Fine calculation for overdue books
      - Librarian dashboard for managing books, users, and transactions
      - Reporting system for library statistics and analytics

      Technical Implementation:
      - Frontend: HTML5, CSS3, and JavaScript for the user interface
      - Backend: PHP for server-side logic and API endpoints
      - Database: MySQL for storing book, user, and transaction data
      - AJAX for asynchronous data fetching and real-time updates
      - PDO for secure database connections and query execution

      Challenges and Solutions:
      - Handling concurrent book reservations: Implemented a queue-based reservation system
      - Ensuring data consistency: Used database transactions for critical operations
      - Improving search performance: Implemented full-text search and indexing in MySQL

      Future Enhancements:
      - Integration with external book databases for automatic catalog updates
      - Implementation of a recommendation system based on user reading history
      - Mobile app development for on-the-go access to library services
    `
  },
  {
    title: "Cyber Security Awareness Blog",
    description: "Created a blog explaining the basics of cybersecurity for beginners, focusing on common threats and how to stay secure online.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["WordPress", "Canva"],
    liveDemo: "#",
    github: "#",
    details: `
      The Cyber Security Awareness Blog is an educational platform designed to inform and empower individuals about the importance of cybersecurity in today's digital age. This project aims to bridge the knowledge gap between technical experts and everyday internet users by providing accessible, easy-to-understand content on various cybersecurity topics.

      Key Features:
      - User-friendly interface with categorized articles and search functionality
      - Interactive quizzes to test and reinforce cybersecurity knowledge
      - Regular updates on the latest cybersecurity threats and prevention techniques
      - Resources section with links to tools and further reading materials
      - Newsletter subscription for staying updated on new content

      Technical Implementation:
      - WordPress as the content management system for easy content creation and management
      - Custom WordPress theme developed for a unique and branded look
      - Canva for creating engaging infographics and visual aids
      - Integration of social media sharing buttons for increased reach
      - SEO optimization using Yoast SEO plugin

      Challenges and Solutions:
      - Simplifying complex technical concepts: Utilized analogies and real-world examples
      - Keeping content up-to-date: Implemented a content review and update schedule
      - Encouraging user engagement: Introduced comment sections and user-submitted question features

      Future Enhancements:
      - Development of a mobile app for on-the-go access to cybersecurity tips
      - Integration of a forum for community discussions on cybersecurity topics
      - Creation of video content to complement written articles
    `
  },
  {
    title: "Circular Queue Visualization",
    description: "Developed a Python-based visualization tool to explain the flow and functionality of a circular queue, complete with animations.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Tkinter", "Matplotlib"],
    liveDemo: "#",
    github: "#",
    details: `
      The Circular Queue Visualization project is an educational tool designed to help computer science students and enthusiasts understand the concept and operations of a circular queue data structure. This interactive application provides a visual representation of how elements are enqueued, dequeued, and managed within a circular queue.

      Key Features:
      - Interactive GUI for adding and removing elements from the queue
      - Step-by-step visualization of circular queue operations
      - Customizable queue size and element values
      - Animation of front and rear pointers movement
      - Explanation panel describing each step of the operation

      Technical Implementation:
      - Python as the primary programming language
      - Tkinter for creating the graphical user interface
      - Matplotlib for rendering the circular queue visualization
      - Custom algorithms for managing the circular queue logic
      - Threading for smooth animations and responsive UI

      Challenges and Solutions:
      - Representing the circular nature of the queue: Implemented a circular layout algorithm
      - Handling edge cases (full queue, empty queue): Developed robust error checking and user feedback
      - Creating smooth animations: Utilized Matplotlib's animation features with custom easing functions

      Future Enhancements:
      - Addition of more data structure visualizations (e.g., stack, linked list)
      - Implementation of a comparison mode to visualize differences between linear and circular queues
      - Development of a web-based version using JavaScript and HTML5 Canvas
    `
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                      Learn More
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Project Details:</h3>
              <p className="text-gray-300 whitespace-pre-line">{selectedProject.details}</p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

