'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'qualification', 'project', 'webinar', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#qualification', label: 'Qualification' },
    { href: '#project', label: 'Projects' },
    { href: '#webinar', label: 'Certification' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 dark:bg-monochrome-950/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tighter hover:tracking-wider transition-all duration-300 glitch-text"
            data-text="Yori"
          >
            Yori<span className="text-monochrome-500 dark:text-monochrome-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm tracking-wider hover-underline ${
                    activeSection === link.href.slice(1) 
                      ? 'text-monochrome-900 dark:text-monochrome-50 font-medium' 
                      : 'text-monochrome-600 dark:text-monochrome-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border border-monochrome-200 dark:border-monochrome-800 rounded-full hover:bg-monochrome-100 dark:hover:bg-monochrome-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-full h-0.5 bg-monochrome-900 dark:bg-monochrome-50 transform transition-all duration-300 ${
                isOpen ? 'top-2 rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 w-full h-0.5 bg-monochrome-900 dark:bg-monochrome-50 top-2 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 w-full h-0.5 bg-monochrome-900 dark:bg-monochrome-50 transform transition-all duration-300 ${
                isOpen ? 'top-2 -rotate-45' : 'top-4'
              }`} />
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-white dark:bg-monochrome-950 z-40 md:hidden transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`} style={{ top: '80px' }}>
            <ul className="container py-8 space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.href} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className="block py-4 text-2xl font-light hover:font-medium transition-all duration-300 hover:translate-x-4"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animation: isOpen ? `slideDown 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              document.documentElement.classList.toggle('dark')
            }}
            className="w-10 h-10 flex items-center justify-center border border-monochrome-200 dark:border-monochrome-800 rounded-full hover:bg-monochrome-100 dark:hover:bg-monochrome-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            <i className="ri-moon-line dark:ri-sun-line text-xl"></i>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header