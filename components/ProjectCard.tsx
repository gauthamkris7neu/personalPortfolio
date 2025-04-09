import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Screenshot of ${project.title} project`}
          width={600}
          height={340}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-blue-900 dark:text-white">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="text-blue-700 border-blue-200 hover:bg-blue-50 hover:text-blue-800 dark:text-blue-300 dark:border-blue-800 dark:hover:bg-blue-900 dark:hover:text-white"
          asChild
        >
          <Link href={project.link} aria-label={`View ${project.title} project details`}>
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}