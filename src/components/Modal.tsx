import React, { useEffect } from 'react'
import { Project } from '../data/projects'
import { Carousel } from './Carousel'

interface Props {
  project: Project | null
  onClose: () => void
}

export function Modal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (project) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div 
      className="modal-backdrop open" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-thumb">
          <Carousel images={project.images} inModal={true} />
        </div>
        <div className="modal-body">
          <p className="modal-number">{project.number}</p>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-org">{project.org}</p>
          <p className="modal-desc">{project.desc}</p>
          <ul className="modal-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <div className="modal-tags">
            {project.tags.map((t, i) => (
              <span key={i} className="tag">{t}</span>
            ))}
          </div>
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{ marginTop: '24px', display: 'flex' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Presentation on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
