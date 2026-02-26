'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState(0)

  const skills = {
    programming: [
      { name: 'PHP (Laravel, CodeIgniter)', level: 85 },
      { name: 'Python (Flask, Tkinter)', level: 75 },
      { name: 'HTML/CSS (Tailwind, Bootstrap)', level: 90 },
      { name: 'JavaScript', level: 70 },
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'SQLite', level: 75 },
      { name: 'Git', level: 80 },
    ],
    other: [
      { name: 'Computer Hardware', level: 90 },
      { name: 'Operating Systems', level: 85 },
      { name: 'Networking', level: 75 },
      { name: 'Problem Solving', level: 95 },
    ],
  }

  const tabs = ['Programming', 'Database & Tools', 'Other Skills']

  return (
    <section id="about" className="section bg-monochrome-100 dark:bg-monochrome-900">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">Who am I</span>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className={`space-y-6 reveal ${inView ? 'active' : ''}`}>
            <h3 className="text-3xl font-bold font-space-grotesk">
              Experienced in web development and IT solutions
            </h3>
            
            <div className="space-y-4 text-monochrome-600 dark:text-monochrome-400">
              <p>
                As an Informatics Engineering graduate, I specialize in web development using PHP frameworks 
                like Laravel and Codeigniter (MVC). My expertise extends to database management with MySQL, 
                SQLite, and PostgreSQL.
              </p>
              <p>
                Currently expanding my skills in GoLang for backend development. I frequently work with 
                Linux-based systems such as Ubuntu, Linux Mint, and Kali Linux for both development and 
                troubleshooting purposes.
              </p>
            </div>

            <Link href="#qualification" className="btn btn--secondary">
              <span>Explore My Work</span>
              <span className="ml-2 hover:translate-x-2 transition-transform inline-block">→</span>
            </Link>
          </div>

          {/* Right Column - Skills */}
          <div className={`space-y-8 reveal animation-delay-200 ${inView ? 'active' : ''}`}>
            {/* Tabs */}
            <div className="flex border-b border-monochrome-300 dark:border-monochrome-700">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 relative ${
                    activeTab === index 
                      ? 'text-monochrome-900 dark:text-monochrome-50' 
                      : 'text-monochrome-500 dark:text-monochrome-400 hover:text-monochrome-700 dark:hover:text-monochrome-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-monochrome-900 dark:bg-monochrome-50" />
                  )}
                </button>
              ))}
            </div>

            {/* Skills Content */}
            <div className="space-y-6">
              {activeTab === 0 && skills.programming.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-monochrome-500 dark:text-monochrome-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-monochrome-200 dark:bg-monochrome-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-monochrome-900 dark:bg-monochrome-50 rounded-full transition-all duration-1000"
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}

              {activeTab === 1 && skills.database.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-monochrome-500 dark:text-monochrome-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-monochrome-200 dark:bg-monochrome-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-monochrome-900 dark:bg-monochrome-50 rounded-full transition-all duration-1000"
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}

              {activeTab === 2 && skills.other.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-monochrome-500 dark:text-monochrome-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-monochrome-200 dark:bg-monochrome-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-monochrome-900 dark:bg-monochrome-50 rounded-full transition-all duration-1000"
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-monochrome-300 dark:border-monochrome-700 hover:bg-monochrome-900 hover:text-monochrome-50 dark:hover:bg-monochrome-50 dark:hover:text-monochrome-900 transition-all duration-300 cursor-pointer">
                <div className="text-3xl font-bold mb-2">1+</div>
                <div className="text-sm tracking-wider">Years Experience</div>
              </div>
              <div className="p-4 border border-monochrome-300 dark:border-monochrome-700 hover:bg-monochrome-900 hover:text-monochrome-50 dark:hover:bg-monochrome-50 dark:hover:text-monochrome-900 transition-all duration-300 cursor-pointer">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-sm tracking-wider">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About