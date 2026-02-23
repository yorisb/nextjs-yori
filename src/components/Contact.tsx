'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'yorisaepulb@gmail.com',
      link: 'mailto:yorisaepulb@gmail.com',
      delay: 100
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+62 895 3616 39529',
      link: 'https://wa.me/62895361639529',
      delay: 200
    },
    {
      icon: 'ri-map-pin-2-line',
      label: 'Location',
      value: 'Tasikmalaya, West Java, Indonesia',
      link: null,
      delay: 300
    }
  ]

  return (
    <section id="contact" className="section bg-monochrome-100 dark:bg-monochrome-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-lines text-monochrome-200 dark:text-monochrome-800 opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-monochrome-200 dark:bg-monochrome-800 rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-monochrome-300 dark:bg-monochrome-700 rounded-full blur-3xl opacity-10 animate-float animation-delay-2000" />

      <div className="container relative z-10">
        <div className="section__header">
          <h2 className="section__title">Get In Touch</h2>
          <span className="section__subtitle">Let's Work Together</span>
        </div>

        <div 
          ref={ref} 
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk leading-tight">
                Let's work together on your next project
              </h2>
              <p className="text-monochrome-600 dark:text-monochrome-400 text-lg leading-relaxed">
                I'm currently available for freelance work or full-time positions. Whether you have a specific 
                project in mind or need consultation for your software development needs, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-monochrome-950 p-4 rounded-xl border border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    transitionDelay: `${method.delay}ms`,
                    animation: inView ? `slideUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-monochrome-100 dark:bg-monochrome-900 rounded-full group-hover:bg-monochrome-900 group-hover:text-monochrome-50 dark:group-hover:bg-monochrome-50 dark:group-hover:text-monochrome-900 transition-all duration-300">
                      <i className={`${method.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-monochrome-500 dark:text-monochrome-400 mb-1">{method.label}</p>
                      {method.link ? (
                        <Link
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-monochrome-900 dark:text-monochrome-50 font-medium hover:underline"
                        >
                          {method.value}
                        </Link>
                      ) : (
                        <p className="text-monochrome-900 dark:text-monochrome-50 font-medium">{method.value}</p>
                      )}
                    </div>
                    {method.link && (
                      <i className="ri-arrow-right-line text-monochrome-400 group-hover:text-monochrome-900 dark:group-hover:text-monochrome-50 transform group-hover:translate-x-1 transition-all duration-300"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Action Buttons */}
          <div className="space-y-6">
            <div 
              className="bg-white dark:bg-monochrome-950 p-8 rounded-2xl border border-monochrome-200 dark:border-monochrome-800 shadow-xl"
              style={{
                animation: inView ? 'scaleIn 0.8s ease-out 0.3s forwards' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.9)'
              }}
            >
              <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-center">Quick Response</h3>
              <p className="text-monochrome-600 dark:text-monochrome-400 text-center mb-8">
                I typically respond within 24 hours
              </p>

              <div className="space-y-4">
                <Link
                  href="https://wa.me/62895361639529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full"
                  onMouseEnter={() => setHoveredButton('whatsapp')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className={`absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform transition-transform duration-500 ${
                      hoveredButton === 'whatsapp' ? 'scale-110' : 'scale-100'
                    }`} />
                    <div className="relative flex items-center justify-center gap-3 bg-monochrome-900 dark:bg-monochrome-50 text-monochrome-50 dark:text-monochrome-900 px-8 py-4 rounded-xl group-hover:bg-transparent transition-all duration-300">
                      <i className="ri-whatsapp-line text-xl"></i>
                      <span className="font-medium">Chat on WhatsApp</span>
                      <i className={`ri-arrow-right-line transform transition-all duration-300 ${
                        hoveredButton === 'whatsapp' ? 'translate-x-1' : ''
                      }`}></i>
                    </div>
                  </div>
                </Link>

                <Link
                  href="mailto:yorisaepulb@gmail.com"
                  className="group relative block w-full"
                  onMouseEnter={() => setHoveredButton('email')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-monochrome-900 dark:border-monochrome-50">
                    <div className={`absolute inset-0 bg-monochrome-900 dark:bg-monochrome-50 transform transition-transform duration-500 ${
                      hoveredButton === 'email' ? 'scale-100' : 'scale-0'
                    }`} />
                    <div className="relative flex items-center justify-center gap-3 bg-transparent text-monochrome-900 dark:text-monochrome-50 px-8 py-4 rounded-xl group-hover:text-monochrome-50 dark:group-hover:text-monochrome-900 transition-all duration-300">
                      <i className="ri-mail-line text-xl"></i>
                      <span className="font-medium">Send Email</span>
                      <i className={`ri-arrow-right-line transform transition-all duration-300 ${
                        hoveredButton === 'email' ? 'translate-x-1' : ''
                      }`}></i>
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-monochrome-500 dark:text-monochrome-400">Online - Usually replies fast</span>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="text-center">
              <p className="text-sm text-monochrome-500 dark:text-monochrome-400">
                Prefer other platforms? Connect with me on{' '}
                <Link
                  href="https://linkedin.com/in/yori-saepul-barki-6056b1195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-monochrome-900 dark:text-monochrome-50 font-medium hover:underline"
                >
                  LinkedIn
                </Link>
                {' '}or{' '}
                <Link
                  href="https://github.com/yorisb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-monochrome-900 dark:text-monochrome-50 font-medium hover:underline"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact