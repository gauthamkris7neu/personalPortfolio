"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function Header() {
  // Function to handle smooth scrolling
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-blue-100 py-4 dark:bg-gray-900 dark:border-gray-800">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <a
          href="#"
          className="text-xl font-bold text-blue-900 dark:text-blue-100"
          aria-label="Gautham - Home"
          onClick={(e) => handleScrollToSection(e, "main")}
        >
          Gautham
        </a>
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-white focus:outline-none focus:underline"
                onClick={(e) => handleScrollToSection(e, "main")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-white focus:outline-none focus:underline"
                onClick={(e) => handleScrollToSection(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-white focus:outline-none focus:underline"
                onClick={(e) => handleScrollToSection(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button className="bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700" asChild>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}