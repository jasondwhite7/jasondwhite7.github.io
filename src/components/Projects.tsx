import React, { useState } from 'react'
import { projectsList, Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Modal } from './Modal'

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects">
      <h2 className="reveal">Highlighted Projects</h2>

      <div className="projects-grid">
        {projectsList.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => setActiveProject(p)} />
        ))}
      </div>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
