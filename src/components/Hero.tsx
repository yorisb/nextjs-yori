'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const heroRef = useRef<HTMLElement>(null)

  const professions = [
    'IT Technician', 
    'Software Developer'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = heroRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % professions.length
      const fullText = professions[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(prev => prev + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, professions, typingSpeed])

  // Parallax effect on mouse move
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (clientX - left) / width - 0.5
        const y = (clientY - top) / height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="section min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-monochrome-100 dark:from-monochrome-950 dark:to-monochrome-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-dots text-monochrome-200 dark:text-monochrome-800 opacity-30" />
      
      {/* Floating orbs */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-monochrome-200 dark:bg-monochrome-800 rounded-full filter blur-3xl opacity-20 animate-float"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-monochrome-300 dark:bg-monochrome-700 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk">
              <span className="block text-monochrome-600 dark:text-monochrome-400 text-2xl md:text-3xl mb-2">
                Hello, I'm
              </span>
              <span className="glitch-text text-monochrome-900 dark:text-monochrome-50" data-text="Yori Saepul Barki">
                Yori Saepul Barki
              </span>
            </h1>

            {/* Typing effect */}
            <div className="h-16">
              <p className="text-xl md:text-2xl text-monochrome-700 dark:text-monochrome-300">
                <span className="font-medium">{text || ''}</span>
                <span className="animate-blink border-r-2 border-monochrome-900 dark:border-monochrome-50 ml-1"></span>
              </p>
            </div>

            <p className="text-monochrome-600 dark:text-monochrome-400 text-lg leading-relaxed">
              I am an IT Technician excelling in Software Development with a Bachelor's degree in Informatics Engineering from the 
              University of Perjuangan, Tasikmalaya. I have professional experience in the IT field as an IT Staff. I am committed to 
              continued growth and development in the IT industry, with a strong dedication to providing effective and innovative 
              solutions.
            </p>

            {/* Stats with hover effect */}
            <div className="flex gap-8 py-4">
              {[
                { value: '4+', label: 'Projects', delay: '0ms' },
                { value: '1+', label: 'Years Exp', delay: '100ms' },
                { value: '3+', label: 'Certificates & Webinar', delay: '200ms' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: stat.delay }}
                >
                  <div className="text-3xl font-bold text-monochrome-900 dark:text-monochrome-50">{stat.value}</div>
                  <div className="text-sm text-monochrome-500 dark:text-monochrome-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#contact" 
                className="btn btn--primary group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-monochrome-800 dark:bg-monochrome-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link 
                href="#project" 
                className="btn btn--secondary group"
              >
                <span>View Projects</span>
                <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: 'github', link: 'https://github.com/yorisb', delay: '0ms' },
                { icon: 'linkedin', link: 'https://linkedin.com/in/yori-saepul-barki-6056b1195', delay: '100ms' },
                { icon: 'instagram', link: 'https://instagram.com/yorisaepulbarki', delay: '200ms' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-monochrome-300 dark:border-monochrome-700 rounded-full hover:bg-monochrome-900 hover:text-monochrome-50 dark:hover:bg-monochrome-50 dark:hover:text-monochrome-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ transitionDelay: social.delay }}
                >
                  <i className={`ri-${social.icon}-fill text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Image with interactive effects */}
          <div 
            className={`relative transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Decorative rings */}
              <div 
                className="absolute inset-0 border-2 border-monochrome-900 dark:border-monochrome-50 rounded-full animate-ping opacity-20"
                style={{
                  transform: `scale(${1 + mousePosition.x * 0.1})`,
                }}
              />
              <div 
                className="absolute -inset-4 border border-monochrome-300 dark:border-monochrome-700 rounded-full animate-pulse-slow"
                style={{
                  transform: `rotate(${mousePosition.x * 10}deg)`,
                }}
              />
              
              {/* Image container */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-monochrome-900 dark:border-monochrome-50 shadow-2xl group"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <Image
                  src="/assets/img/yori1.JPG"
                  alt="Portrait of Yori Saepul Barki"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-monochrome-900/0 group-hover:bg-monochrome-900/20 transition-all duration-300"></div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-monochrome-900 dark:border-monochrome-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-monochrome-900 dark:border-monochrome-50"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero