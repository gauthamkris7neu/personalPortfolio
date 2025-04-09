import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { ProjectsSection } from "./ProjectsSection"
import { ContactSection } from "./ContactSection"
import type { Project } from "@/types"

interface PortfolioProps {
  projects: Project[]
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main" className="pt-16">
        {" "}
        {/* Added id for skip link target */}
        <HeroSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  )
}
