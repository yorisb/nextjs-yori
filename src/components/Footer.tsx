'use client'

import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const socialLinks = [
    { href: 'https://wa.me/62895361639529', icon: 'ri-whatsapp-fill', label: 'WhatsApp' },
    { href: 'https://www.instagram.com/yorisaepulbarki', icon: 'ri-instagram-fill', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/yori-saepul-barki-6056b1195/', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
    { href: 'https://github.com/yorisb', icon: 'ri-github-fill', label: 'GitHub' },
  ]

  const quickLinks = [
    { href: '#hero', label: 'Home', icon: 'ri-home-line' },
    { href: '#about', label: 'About', icon: 'ri-user-line' },
    { href: '#qualification', label: 'Qualification', icon: 'ri-book-open-line' },
    { href: '#project', label: 'Projects', icon: 'ri-code-line' },
    { href: '#webinar', label: 'Certification', icon: 'ri-award-line' },
    { href: '#contact', label: 'Contact', icon: 'ri-mail-line' },
  ]

  return (
    <footer className="relative bg-monochrome-900 dark:bg-monochrome-950 text-monochrome-300 overflow-hidden border-t border-monochrome-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid text-monochrome-800 opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-monochrome-800 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-monochrome-700 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000" />

      <div className="container relative z-10 py-16">
        {/* Main Footer Grid - Sekarang 3 kolom karena newslatter dihapus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold font-space-grotesk text-monochrome-50 mb-2">
                Yori<span className="text-monochrome-500">.</span>
              </h3>
              <p className="text-monochrome-400 text-sm leading-relaxed">
                IT Technician and Software Developer with passion for creating efficient solutions and solving technical challenges.
              </p>
            </div>

            {/* Social Links with hover effects */}
            <div>
              <h4 className="text-sm font-semibold text-monochrome-400 uppercase tracking-wider mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.label}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-monochrome-700 rounded-full transform transition-all duration-300 ${
                        hoveredSocial === social.label ? 'scale-110 opacity-100' : 'scale-0 opacity-0'
                      }`} />
                      <div className="relative w-10 h-10 flex items-center justify-center border border-monochrome-700 rounded-full hover:border-monochrome-50 transition-all duration-300 hover:-translate-y-1">
                        <i className={`${social.icon} text-xl text-monochrome-400 group-hover:text-monochrome-50 transition-colors duration-300`}></i>
                      </div>
                    </div>
                    <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-monochrome-400 whitespace-nowrap transition-all duration-300 ${
                      hoveredSocial === social.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-monochrome-400 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-monochrome-400 hover:text-monochrome-50 transition-all duration-300"
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <i className={`${link.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-monochrome-50 group-hover:w-full transition-all duration-300" />
                    </span>
                    <i className="ri-arrow-right-line text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-monochrome-400 uppercase tracking-wider mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:yorisaepulb@gmail.com"
                  className="group flex items-start gap-3 text-monochrome-400 hover:text-monochrome-50 transition-all duration-300"
                >
                  <i className="ri-mail-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="flex-1 break-all group-hover:translate-x-1 transition-transform duration-300">
                    yorisaepulb@gmail.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/62895361639529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-monochrome-400 hover:text-monochrome-50 transition-all duration-300"
                >
                  <i className="ri-phone-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                    +62 895 3616 39529
                  </span>
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-monochrome-400">
                  <i className="ri-map-pin-2-line text-lg"></i>
                  <span className="flex-1">
                    Tasikmalaya,<br />West Java, Indonesia
                  </span>
                </div>
              </li>
            </ul>

            {/* Availability Indicator - Dipindah ke bawah Contact Info */}
            <div className="mt-6 pt-6 border-t border-monochrome-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-monochrome-300">Available for work</span>
              </div>
              <p className="text-sm text-monochrome-400 mt-2">
                Currently open for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-monochrome-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-monochrome-500">
              &copy; {currentYear} Yori Saepul Barki. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer