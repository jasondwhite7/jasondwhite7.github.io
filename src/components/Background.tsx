import React, { useEffect, useRef } from 'react'

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.003 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }))

    let lastFrame = -33
    let animationFrameId: number

    const drawStars = (t: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(drawStars)
        return
      }
      if (t - lastFrame < 33) {
        animationFrameId = requestAnimationFrame(drawStars)
        return
      }
      lastFrame = t
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach((s) => {
        const a = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      })
      animationFrameId = requestAnimationFrame(drawStars)
    }

    animationFrameId = requestAnimationFrame(drawStars)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <canvas id="stars" ref={canvasRef} />
    </>
  )
}
