"use client"
import { Portfolio } from "@/components/Portfolio"
import { projects } from "@/data/projects"

export default function Page() {
  return <Portfolio projects={projects} />
}
