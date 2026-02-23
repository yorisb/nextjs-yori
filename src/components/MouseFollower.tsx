'use client'

import { useMousePosition } from '@/hooks/useMousePosition'
import { useEffect, useState } from 'react'

export const MouseFollower = () => {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden lg:block"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease',
      }}
    >
      <div className="w-full h-full border-2 border-monochrome-900 dark:border-monochrome-50 rounded-full animate-pulse-slow" />
    </div>
  )
}