'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Certifications = () => {
  const swiperRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-monochrome-400 dark:!bg-monochrome-600 !opacity-50',
          bulletActiveClass: '!bg-monochrome-900 dark:!bg-monochrome-50 !opacity-100',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        on: {
          slideChange: () => {
            setActiveIndex(swiper.activeIndex)
          }
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [])

  const certifications = [
        {
      title: 'Sertifikasi Kompetensi',
      image: '/assets/img/idnsertif.png',
      link: '/assets/SERTIFIKASIYORI1.pdf',
      issuer: 'BNSP',
      date: '2024'
    },
    {
      title: 'Introduction to Cisco Software-Defined WAN',
      image: '/assets/img/webinaryori.jpg',
      link: '/assets/webinaryori.pdf',
      issuer: 'Cisco',
      date: '2024'
    },
    {
      title: 'Introduction to Linux (LFS101)',
      image: '/assets/img/lfs.png',
      link: '/assets/SERTIFIKASIYORI2.pdf',
      issuer: 'Linux Foundation',
      date: '2023'
    },
  ]

  return (
    <section id="webinar" className="section bg-monochrome-50 dark:bg-monochrome-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots text-monochrome-200 dark:text-monochrome-800 opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-monochrome-200 dark:bg-monochrome-800 rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-monochrome-300 dark:bg-monochrome-700 rounded-full blur-3xl opacity-10 animate-float animation-delay-2000" />

      <div className="container relative z-10">
        <div className="section__header">
          <h2 className="section__title">Certifications</h2>
          <span className="section__subtitle">My Learning Achievements</span>
        </div>

        {/* Counter */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-monochrome-200 dark:bg-monochrome-800 text-monochrome-600 dark:text-monochrome-400 rounded-full text-sm">
            {activeIndex + 1} / {certifications.length}
          </span>
        </div>

        <div className="webinar__wrapper swiper relative" ref={swiperRef}>
          <div className="swiper-wrapper">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="webinar__card swiper-slide group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white dark:bg-monochrome-900 rounded-2xl overflow-hidden border-2 border-monochrome-200 dark:border-monochrome-800 hover:border-monochrome-900 dark:hover:border-monochrome-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-monochrome-900/20 dark:bg-monochrome-50/20 z-10 transition-opacity duration-500 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredCard === index ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    
                    {/* Issuer Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-monochrome-900/90 dark:bg-monochrome-50/90 text-monochrome-50 dark:text-monochrome-900 text-xs font-medium rounded-full backdrop-blur-sm border border-monochrome-700 dark:border-monochrome-300">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-monochrome-900/90 dark:bg-monochrome-50/90 text-monochrome-50 dark:text-monochrome-900 text-xs font-medium rounded-full backdrop-blur-sm">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="text-lg font-bold font-space-grotesk mb-3 text-monochrome-900 dark:text-monochrome-50 line-clamp-2 group-hover:translate-x-1 transition-transform duration-300">
                      {cert.title}
                    </h3>

                    {/* Certificate Link */}
                    <Link
                      href={cert.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-monochrome-600 dark:text-monochrome-400 hover:text-monochrome-900 dark:hover:text-monochrome-50 font-medium group/link transition-colors duration-300"
                    >
                      <span className="relative">
                        View Certificate
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-monochrome-900 dark:bg-monochrome-50 group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <i className={`ri-external-link-line transform group-hover/link:translate-x-1 transition-transform duration-300 ${
                        hoveredCard === index ? 'translate-x-1' : ''
                      }`}></i>
                    </Link>

                    {/* Decorative Corner */}
                    <div className={`absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                      hoveredCard === index ? 'w-10 h-10 border-monochrome-900 dark:border-monochrome-50' : ''
                    }`} />
                    <div className={`absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-monochrome-300 dark:border-monochrome-700 transition-all duration-500 ${
                      hoveredCard === index ? 'w-10 h-10 border-monochrome-900 dark:border-monochrome-50' : ''
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination mt-8 relative">
            <div className="flex justify-center gap-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-monochrome-900 dark:bg-monochrome-50'
                      : 'bg-monochrome-300 dark:bg-monochrome-700 hover:bg-monochrome-500 dark:hover:bg-monochrome-500'
                  }`}
                  onClick={() => {
                    if (swiperRef.current && (swiperRef.current as any).swiper) {
                      (swiperRef.current as any).swiper.slideTo(index)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-monochrome-300 dark:border-monochrome-700 text-monochrome-600 dark:text-monochrome-400 hover:bg-monochrome-900 hover:text-monochrome-50 dark:hover:bg-monochrome-50 dark:hover:text-monochrome-900 transition-all duration-300 hover:scale-110 swiper-button-prev-custom"
            onClick={() => {
              if (swiperRef.current && (swiperRef.current as any).swiper) {
                (swiperRef.current as any).swiper.slidePrev()
              }
            }}
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-monochrome-300 dark:border-monochrome-700 text-monochrome-600 dark:text-monochrome-400 hover:bg-monochrome-900 hover:text-monochrome-50 dark:hover:bg-monochrome-50 dark:hover:text-monochrome-900 transition-all duration-300 hover:scale-110 swiper-button-next-custom"
            onClick={() => {
              if (swiperRef.current && (swiperRef.current as any).swiper) {
                (swiperRef.current as any).swiper.slideNext()
              }
            }}
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Certifications