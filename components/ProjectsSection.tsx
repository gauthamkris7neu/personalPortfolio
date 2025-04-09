import type { Project } from "@/types"
import { ProjectCard } from "./ProjectCard"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-24" aria-labelledby="projects-heading">
      <div className="container px-4 md:px-6">
        <h2
          id="projects-heading"
          className="mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold tracking-tight text-blue-950 lg:text-4xl"
        >
          My Projects
        </h2>
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
