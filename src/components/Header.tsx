'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isDark, setIsDark] = useState(false)

  // Cek preferensi dark mode saat komponen dimount
  useEffect(() => {
    // Cek localStorage atau preferensi sistem
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
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

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    if (isDark) {
      // Switch ke light mode
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      // Switch ke dark mode
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#qualification', label: 'Qualification' },
    { href: '#project', label: 'Projects' },
    { href: '#webinar', label: 'Certification' },
    { href: '#contact', label: 'Contact' },
  ]

  // Warna berdasarkan mode
  const colors = {
    bg: isDark ? '#0a0a0a' : '#ffffff', // monochrome-950 : white
    text: {
      primary: isDark ? '#fafafa' : '#171717', // monochrome-50 : monochrome-900
      secondary: isDark ? '#a3a3a3' : '#525252', // monochrome-400 : monochrome-600
      muted: isDark ? '#737373' : '#737373', // monochrome-500
    },
    border: {
      light: isDark ? '#262626' : '#e5e5e5', // monochrome-800 : monochrome-200
      medium: isDark ? '#404040' : '#a3a3a3', // monochrome-700 : monochrome-400
    },
    accent: isDark ? '#262626' : '#f5f5f5', // monochrome-800 : monochrome-100
  }

  return (
    <>
      {/* Header dengan z-index sangat tinggi */}
      <header 
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          isScrolled ? 'py-4 shadow-lg' : 'py-6'
        }`}
        style={{ 
          backgroundColor: colors.bg,
          borderBottom: `1px solid ${colors.border.light}`,
        }}
      >
        {/* Gunakan div dengan max-width dari container di global CSS */}
        <div className="container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tighter hover:tracking-wider transition-all duration-300 glitch-text"
              data-text="Yori"
              style={{ color: colors.text.primary }}
            >
              Yori<span style={{ color: colors.text.muted }}>.</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-sm tracking-wider transition-all duration-300 ${
                      activeSection === link.href.slice(1) 
                        ? 'font-medium' 
                        : ''
                    }`}
                    style={{
                      color: activeSection === link.href.slice(1) 
                        ? colors.text.primary 
                        : colors.text.secondary,
                    }}
                  >
                    {link.label}
                    {/* Underline indicator untuk active section */}
                    {activeSection === link.href.slice(1) && (
                      <span 
                        className="absolute bottom-0 left-0 w-full h-0.5"
                        style={{ backgroundColor: colors.text.primary }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons Container */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${isOpen ? colors.border.medium : colors.border.light}`,
                }}
              >
                <div className="relative w-5 h-4">
                  <span 
                    className="absolute left-0 w-full h-0.5 transform transition-all duration-300"
                    style={{
                      backgroundColor: colors.text.primary,
                      top: isOpen ? '8px' : '0',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  />
                  <span 
                    className="absolute left-0 w-full h-0.5 top-2 transition-all duration-300"
                    style={{
                      backgroundColor: colors.text.primary,
                      opacity: isOpen ? 0 : 1,
                    }}
                  />
                  <span 
                    className="absolute left-0 w-full h-0.5 transform transition-all duration-300"
                    style={{
                      backgroundColor: colors.text.primary,
                      top: isOpen ? '8px' : '16px',
                      transform: isOpen ? 'rotate(-45deg)' : 'none',
                    }}
                  />
                </div>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border.light}`,
                }}
                aria-label="Toggle dark mode"
              >
                <i 
                  className={`${isDark ? 'ri-sun-line' : 'ri-moon-line'} text-xl transition-all duration-300`}
                  style={{ color: colors.text.primary }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          {/* Backdrop dengan background hitam transparan */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel */}
          <div 
            className="absolute right-0 top-0 h-full w-72 shadow-2xl transition-all duration-300"
            style={{ 
              backgroundColor: colors.bg,
              borderLeft: `1px solid ${colors.border.light}`,
            }}
          >
            <div className="flex flex-col h-full pt-20 pb-6">
              <nav className="flex-1 px-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-4 text-base font-medium rounded-lg transition-all duration-300 hover:translate-x-2"
                    style={{
                      color: activeSection === link.href.slice(1) 
                        ? colors.text.primary 
                        : colors.text.secondary,
                      backgroundColor: activeSection === link.href.slice(1) 
                        ? colors.accent 
                        : 'transparent',
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s forwards`,
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 py-8" style={{ borderTop: `1px solid ${colors.border.light}` }}>
                <p className="text-sm text-center" style={{ color: colors.text.muted }}>
                  © 2024 Yori. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hover effect untuk desktop menu */
        .hover-underline {
          position: relative;
        }

        .hover-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${colors.text.primary};
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Header