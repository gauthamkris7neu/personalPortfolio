"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ParticleBackground } from "./ParticleBackground"

export function HeroSection() {
  const { theme } = useTheme()
  
  // Function to handle smooth scrolling
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      className="relative flex flex-col items-center justify-center px-4 py-40 text-center md:py-48"
      style={{
        backgroundColor: theme === 'dark' ? '#111827' : 'transparent',
        background: theme === 'dark' 
          ? '#111827' 
          : 'linear-gradient(to bottom, #DBEAFE, #EFF6FF, #FFFFFF)'
      }}
    >
      <ParticleBackground />
      <div className="relative z-10">
        <h1 
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E3A8A' }}
        >
          Gautham V
        </h1>
        <p 
          className="mt-4 text-xl md:text-2xl"
          style={{ color: theme === 'dark' ? '#93C5FD' : '#1D4ED8' }}
        >
          Full-Stack Developer
        </p>
        <Button 
          className="mt-8 animate-pulse-scale" 
          size="lg" 
          style={{
            backgroundColor: theme === 'dark' ? '#2563EB' : '#1D4ED8',
            color: 'white'
          }}
          asChild
        >
          <a 
            href="#projects" 
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="hover:bg-blue-700"
          >
            View Projects
            <span className="sr-only">(scrolls to projects section)</span>
          </a>
        </Button>
      </div>
    </section>
  )
}