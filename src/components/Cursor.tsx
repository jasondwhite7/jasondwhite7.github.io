import React, { useEffect, useRef } from 'react'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px'
        cursorRef.current.style.top = mouseY + 'px'
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      animationFrameId = requestAnimationFrame(animateRing)
    }

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .project-card, .carousel-dot, .modal-close, .carousel-btn')) {
        if (cursorRef.current && ringRef.current) {
          cursorRef.current.style.width = '6px'
          cursorRef.current.style.height = '6px'
          ringRef.current.style.width = '50px'
          ringRef.current.style.height = '50px'
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .project-card, .carousel-dot, .modal-close, .carousel-btn')) {
        if (cursorRef.current && ringRef.current) {
          cursorRef.current.style.width = '10px'
          cursorRef.current.style.height = '10px'
          ringRef.current.style.width = '36px'
          ringRef.current.style.height = '36px'
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    
    animateRing()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
