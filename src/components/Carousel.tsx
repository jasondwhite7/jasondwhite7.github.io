import React, { useState, useEffect } from 'react'

export function Carousel({ images, inModal = false }: { images: string[], inModal?: boolean }) {
  const [index, setIndex] = useState(0)

  // Reset index when images prop changes (useful for modals)
  useEffect(() => {
    setIndex(0)
  }, [images])

  const slide = (dir: number) => {
    if (images.length === 0) return
    setIndex((prev) => (prev + dir + images.length) % images.length)
  }

  const goTo = (i: number) => setIndex(i)

  // Arrow key support specifically for modal overlay (can be added here or in Modal.tsx, but here is localized)
  useEffect(() => {
    if (!inModal) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') slide(-1)
      if (e.key === 'ArrowRight') slide(1)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [inModal, images.length])

  return (
    <div className="carousel">
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          className={`carousel-img ${i === index ? 'active' : ''}`}
          src={src}
          alt={`Image ${i + 1}`}
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            className="carousel-btn prev"
            onClick={(e) => {
              e.stopPropagation()
              slide(-1)
            }}
          >
            ‹
          </button>
          <button
            className="carousel-btn next"
            onClick={(e) => {
              e.stopPropagation()
              slide(1)
            }}
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <div
                key={i}
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(i)
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
