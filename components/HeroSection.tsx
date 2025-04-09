"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  // Function to handle smooth scrolling
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-40 text-center md:py-48">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-200 via-blue-100 to-white" aria-hidden="true" />
      <h1 className="text-5xl font-bold tracking-tight text-blue-950 sm:text-6xl md:text-7xl">Gautham V</h1>
      <p className="mt-4 text-xl text-blue-700 md:text-2xl">Full-Stack Developer</p>
      <Button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white animate-pulse-scale" size="lg" asChild>
        <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
          View Projects
          <span className="sr-only">(scrolls to projects section)</span>
        </a>
      </Button>
    </section>
  )
}
