'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Qualification from '@/components/Qualification'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { MouseFollower } from '@/components/MouseFollower'
import { Loading } from '@/components/Loading'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <MouseFollower />
      <Header />
      <main>
        <Hero />
        <About />
        <Qualification />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}