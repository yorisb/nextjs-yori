'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Qualification = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState('experience')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const experiences = [
    {
      title: 'IT Support at PT CKL Cargo',
      logo: '/assets/img/ckl.png',
      description: 'Managed IT infrastructure for a local retail company in Tasikmalaya. Responsibilities included system maintenance, troubleshooting hardware/software issues, and implementing technology solutions to improve business operations.',
      date: 'December 2025 - Present',
      tags: ['IT Support', 'Infrastructure', 'Troubleshooting']
    },
    {
      title: 'IT Staff at Tasco Minimart',
      logo: '/assets/img/LOGOTASCO.png',
      description: 'Managed IT infrastructure for a local retail company in Tasikmalaya. Responsibilities included system maintenance, troubleshooting hardware/software issues, and implementing technology solutions to improve business operations.',
      date: 'October 2024 - October 2025',
      tags: ['IT Staff', 'System Maintenance', 'Hardware']
    },
    {
      title: 'IT Intern at Right Notebook',
      logo: '/assets/img/rnlogo.png',
      description: 'Gained hands-on experience in computer hardware repair, software installation, and customer service at a computer service business. Assisted in troubleshooting various technical issues for clients.',
      date: 'August 2019 - November 2019',
      tags: ['Internship', 'Hardware Repair', 'Customer Service']
    },
  ]

  const education = [
    {
      title: "Bachelor's Degree in Informatics Engineering",
      logo: '/assets/img/unperlogo.png',
      description: 'Graduated with comprehensive knowledge in algorithms, data structures, software design and development. Completed several projects demonstrating practical application of programming concepts and problem-solving skills.',
      date: '2019 - 2024',
      tags: ['Algorithms', 'Data Structures', 'Software Design']
    },
  ]

  const organization = [
    {
      title: 'Documentation & PR at HMMC',
      logo: '/assets/img/hmmclogo.png',
      description: 'Served in a youth organization managing documentation and public relations activities. Developed communication and teamwork skills while organizing community events and programs.',
      date: '2022 - 2024',
      tags: ['Documentation', 'Public Relations', 'Event Management']
    },
  ]

  const tabs = [
    { id: 'experience', label: 'Experience', icon: 'ri-briefcase-fill' },
    { id: 'education', label: 'Education', icon: 'ri-booklet-fill' },
    { id: 'organization', label: 'Organization', icon: 'ri-team-fill' },
  ]

  return (
    <section id="qualification" className="section bg-monochrome-50 dark:bg-monochrome-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots text-monochrome-200 dark:text-monochrome-800 opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-monochrome-200 dark:bg-monochrome-800 rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-monochrome-300 dark:bg-monochrome-700 rounded-full blur-3xl opacity-10 animate-float animation-delay-2000" />

      <div className="container relative z-10">
        <div className="section__header">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My Journey</span>
        </div>
        
        <div ref={ref} className="space-y-8">
          {/* Custom Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-monochrome-100 dark:bg-monochrome-900 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-monochrome-900 text-monochrome-50 dark:bg-monochrome-50 dark:text-monochrome-900 shadow-lg'
                      : 'text-monochrome-600 dark:text-monochrome-400 hover:text-monochrome-900 dark:hover:text-monochrome-50'
                  }`}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content dengan animasi fade */}
          <div className={`transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Professional Experience */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold font-space-grotesk flex items-center justify-center gap-3 text-monochrome-900 dark:text-monochrome-50">
                  <i className="ri-briefcase-fill"></i>
                  Professional Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-monochrome-900 p-6 rounded-2xl border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Hover Effect Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 rounded-2xl transition-opacity duration-500 ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      <div className="relative z-10">
                        {/* Logo dengan efek */}
                        <div className="relative w-20 h-20 mb-6">
                          <div className={`absolute inset-0 bg-monochrome-900 dark:bg-monochrome-50 rounded-full transform transition-all duration-500 ${
                            hoveredCard === index ? 'scale-110 opacity-20' : 'scale-0 opacity-0'
                          }`} />
                          <div className="relative w-full h-full bg-white dark:bg-monochrome-800 rounded-full p-3 border-2 border-monochrome-200 dark:border-monochrome-700 group-hover:border-monochrome-900 dark:group-hover:border-monochrome-50 transition-all duration-300">
                            <Image
                              src={exp.logo}
                              alt={exp.title}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold font-space-grotesk mb-2 text-monochrome-900 dark:text-monochrome-50">
                          {exp.title}
                        </h3>

                        {/* Date Badge */}
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-700">
                          {exp.date}
                        </span>

                        {/* Description */}
                        <p className="text-monochrome-600 dark:text-monochrome-400 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded border border-monochrome-200 dark:border-monochrome-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                          hoveredCard === index ? 'w-12 h-12 border-monochrome-900 dark:border-monochrome-50' : ''
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold font-space-grotesk flex items-center justify-center gap-3 text-monochrome-900 dark:text-monochrome-50">
                  <i className="ri-booklet-fill"></i>
                  Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-monochrome-900 p-8 rounded-2xl border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:col-span-2"
                      onMouseEnter={() => setHoveredCard(100 + index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 rounded-2xl transition-opacity duration-500 ${
                        hoveredCard === 100 + index ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-32 h-32">
                          <div className={`absolute inset-0 bg-monochrome-900 dark:bg-monochrome-50 rounded-full transform transition-all duration-500 ${
                            hoveredCard === 100 + index ? 'scale-110 opacity-20' : 'scale-0 opacity-0'
                          }`} />
                          <div className="relative w-full h-full bg-white dark:bg-monochrome-800 rounded-full p-4 border-4 border-monochrome-200 dark:border-monochrome-700 group-hover:border-monochrome-900 dark:group-hover:border-monochrome-50 transition-all duration-300">
                            <Image
                              src={edu.logo}
                              alt={edu.title}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-monochrome-900 dark:text-monochrome-50">
                            {edu.title}
                          </h3>
                          
                          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-700">
                            {edu.date}
                          </span>

                          <p className="text-monochrome-600 dark:text-monochrome-400 leading-relaxed mb-4">
                            {edu.description}
                          </p>

                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {edu.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-sm bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                        hoveredCard === 100 + index ? 'w-16 h-16 border-monochrome-900 dark:border-monochrome-50' : ''
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Organizational Experience */}
            {activeTab === 'organization' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold font-space-grotesk flex items-center justify-center gap-3 text-monochrome-900 dark:text-monochrome-50">
                  <i className="ri-team-fill"></i>
                  Organizational Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {organization.map((org, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-monochrome-900 p-8 rounded-2xl border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:col-span-2"
                      onMouseEnter={() => setHoveredCard(200 + index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 rounded-2xl transition-opacity duration-500 ${
                        hoveredCard === 200 + index ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-32 h-32">
                          <div className={`absolute inset-0 bg-monochrome-900 dark:bg-monochrome-50 rounded-full transform transition-all duration-500 ${
                            hoveredCard === 200 + index ? 'scale-110 opacity-20' : 'scale-0 opacity-0'
                          }`} />
                          <div className="relative w-full h-full bg-white dark:bg-monochrome-800 rounded-full p-4 border-4 border-monochrome-200 dark:border-monochrome-700 group-hover:border-monochrome-900 dark:group-hover:border-monochrome-50 transition-all duration-300">
                            <Image
                              src={org.logo}
                              alt={org.title}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-monochrome-900 dark:text-monochrome-50">
                            {org.title}
                          </h3>
                          
                          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-700">
                            {org.date}
                          </span>

                          <p className="text-monochrome-600 dark:text-monochrome-400 leading-relaxed mb-4">
                            {org.description}
                          </p>

                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {org.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-sm bg-monochrome-100 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                        hoveredCard === 200 + index ? 'w-16 h-16 border-monochrome-900 dark:border-monochrome-50' : ''
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Download Resume Section */}
          <div className="qualification__footer text-center mt-16 reveal" ref={ref}>
            <div className="inline-block p-8 bg-white dark:bg-monochrome-900 rounded-3xl border border-monochrome-200 dark:border-monochrome-800 shadow-xl">
              <p className="text-lg mb-6 text-monochrome-600 dark:text-monochrome-400">
                Want to know more about my professional journey?
              </p>
              <Link 
                href="/assets/resume-yorisb.pdf" 
                download 
                className="btn btn--secondary group inline-flex items-center gap-2"
              >
                <i className="ri-download-line group-hover:animate-bounce"></i>
                Download Resume
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification  