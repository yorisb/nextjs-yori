'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const projects = [
    {
      title: 'Stock Opname System for Tasco',
      image: '/assets/img/SOTASCO.png',
      description: 'A custom web application developed to streamline the audit process by enabling efficient data upload and management for stock inventory calculations.',
      tags: ['Web Application', 'Native PHP', 'MySQL', 'TailwindCSS'],
      link: '#',
      category: 'Web Application',
      year: '2024'
    },
    {
      title: 'Soil Monitoring IoT System',
      image: '/assets/img/skripsi.jpg',
      description: 'An IoT solution for monitoring soil moisture and pH levels in tomato plantations, developed as part of my thesis project to support agricultural operations.',
      tags: ['Arduino Uno', 'NodeMCU', 'IoT'],
      link: 'https://drive.google.com/file/d/1jX3SzU1GLt-EEtHlGCV_URg2lJj-BlYs/view?usp=sharing',
      category: 'IoT',
      year: '2024'
    },
    {
      title: 'E-MJPS: E-Learning Platform',
      image: '/assets/img/kp.jpg',
      description: 'A comprehensive web-based learning platform for computer assembly courses, featuring modules, quizzes, assignments, and assessment tools for vocational school students.',
      tags: ['Web Application', 'CodeIgniter', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/yorisb/e-mjps',
      category: 'Web Application',
      year: '2023'
    },
    {
      title: 'Housing Information System – Bumi Tamansari Indah Regency',
      image: '/assets/img/perumahan.png',
      description: 'A web-based information system developed to manage residential unit data, house type listings, and user inquiries for Bumi Tamansari Indah Regency, designed for better communication between developer and buyers.',
      tags: ['Web Application', 'PHP Native', 'MySQL', 'TailwindCSS'],
      link: '#',
      category: 'Web Application',
      year: '2024'
    },
  ]

  // Get unique tags for filtering
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = selectedTag 
    ? projects.filter(p => p.tags.includes(selectedTag))
    : projects

  return (
    <section id="project" className="section bg-monochrome-100 dark:bg-monochrome-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid text-monochrome-200 dark:text-monochrome-800 opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-monochrome-200 dark:bg-monochrome-800 rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-monochrome-300 dark:bg-monochrome-700 rounded-full blur-3xl opacity-10 animate-float animation-delay-2000" />

      <div className="container relative z-10">
        <div className="section__header">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My Recent Work</span>
        </div>

        {/* Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedTag(category === 'All' ? null : category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                  (category === 'All' && !selectedTag) || selectedTag === category
                    ? 'bg-monochrome-900 text-monochrome-50 dark:bg-monochrome-50 dark:text-monochrome-900 shadow-lg'
                    : 'bg-monochrome-200 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 hover:bg-monochrome-300 dark:hover:bg-monochrome-700'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-1.5 text-xs rounded-full transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-monochrome-900 text-monochrome-50 dark:bg-monochrome-50 dark:text-monochrome-900 shadow-md'
                    : 'bg-monochrome-200 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 hover:bg-monochrome-300 dark:hover:bg-monochrome-700'
                }`}
                style={{
                  transitionDelay: `${index * 30}ms`
                }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-monochrome-950 rounded-2xl overflow-hidden border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-monochrome-900/20 dark:bg-monochrome-50/20 z-10 transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`} />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-monochrome-900/90 dark:bg-monochrome-50/90 text-monochrome-50 dark:text-monochrome-900 text-sm font-medium rounded-full backdrop-blur-sm border border-monochrome-700 dark:border-monochrome-300">
                    {project.year}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-monochrome-900/90 dark:bg-monochrome-50/90 text-monochrome-50 dark:text-monochrome-900 text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold font-space-grotesk mb-3 text-monochrome-900 dark:text-monochrome-50 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                
                <p className="text-monochrome-600 dark:text-monochrome-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-monochrome-100 dark:bg-monochrome-900 text-monochrome-600 dark:text-monochrome-400 rounded-full border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-colors duration-300 cursor-pointer"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.link}
                  target={project.link !== '#' ? '_blank' : undefined}
                  className="inline-flex items-center gap-2 text-monochrome-900 dark:text-monochrome-50 font-medium group/link"
                >
                  <span className="relative">
                    View Details
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-monochrome-900 dark:bg-monochrome-50 group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <i className={`ri-arrow-right-line transform group-hover/link:translate-x-1 transition-transform duration-300 ${
                    hoveredCard === index ? 'translate-x-1' : ''
                  }`}></i>
                </Link>

                {/* Decorative Corner */}
                <div className={`absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                  hoveredCard === index ? 'w-12 h-12 border-monochrome-900 dark:border-monochrome-50' : ''
                }`} />
                <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                  hoveredCard === index ? 'w-12 h-12 border-monochrome-900 dark:border-monochrome-50' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white dark:bg-monochrome-900 rounded-2xl border border-monochrome-200 dark:border-monochrome-800">
              <i className="ri-folder-close-line text-5xl text-monochrome-400 dark:text-monochrome-600 mb-4"></i>
              <p className="text-monochrome-600 dark:text-monochrome-400 mb-4">No projects found with this filter</p>
              <button
                onClick={() => setSelectedTag(null)}
                className="btn btn--secondary text-sm"
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12 reveal" ref={ref}>
          <Link
            href="https://github.com/yorisb"
            target="_blank"
            className="btn btn--secondary group inline-flex items-center gap-2"
          >
            <i className="ri-github-fill text-xl"></i>
            View More on GitHub
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects