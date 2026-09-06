import React, { useState, useEffect } from 'react'

export function Carousel({ images, inModal = false }: { images: string[], inModal?: boolean }) {
  const [index, setIndex] = useState(0)

  // Filter out invalid or placeholder paths like '/'
  const validImages = (images || []).filter((src) => src && src.trim() !== '' && src !== '/')

  // Reset index when images prop changes (useful for modals)
  useEffect(() => {
    setIndex(0)
  }, [images])

  const slide = (dir: number) => {
    if (validImages.length === 0) return
    setIndex((prev) => (prev + dir + validImages.length) % validImages.length)
  }

  const goTo = (i: number) => setIndex(i)

  // Arrow key support specifically for modal overlay
  useEffect(() => {
    if (!inModal) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') slide(-1)
      if (e.key === 'ArrowRight') slide(1)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [inModal, validImages.length])

  if (validImages.length === 0) {
    return (
      <div className="carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', color: 'var(--muted)' }}>
        <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>Image coming soon</span>
      </div>
    )
  }

  return (
    <div className="carousel">
      {validImages.map((src, i) => {
        return (
          <img
            key={`${src}-${i}`}
            className={`carousel-img ${i === index ? 'active' : ''}`}
            src={src}
            alt={`Image ${i + 1}`}
            loading="lazy"
          />
        )
      })}
      {validImages.length > 1 && (
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
            {validImages.map((_, i) => (
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
