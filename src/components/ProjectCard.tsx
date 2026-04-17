import React from 'react'
import { Project } from '../data/projects'
import { Carousel } from './Carousel'

interface Props {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: Props) {
  return (
    <div className="project-card reveal" onClick={onClick}>
      <div className="project-card-inner">
        <div className="project-thumbnail">
          <Carousel images={project.images} isThumbnail={true} />
        </div>
        <div className="project-thumb-overlay">
          <span>↗</span> View Project
        </div>
      </div>
      <div className="project-body">
        <p className="project-number">{project.number}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-org">{project.org}</p>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
