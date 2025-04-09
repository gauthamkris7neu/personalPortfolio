"use client"

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  baseSize: number
  speedX: number
  speedY: number
  opacity: number
  baseOpacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  
  // Get current theme
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    
    // Particle settings
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000))
    const particles: Particle[] = []
    const connectionDistance = Math.min(150, Math.max(80, canvas.width / 10))
    
    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
    
    const handleMouseEnter = () => {
      setIsMouseInCanvas(true)
    }
    
    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    // Colors based on theme
    const getParticleColor = () => {
      return currentTheme === 'dark' 
        ? 'rgba(59, 130, 246, ' // Blue color for dark mode
        : 'rgba(37, 99, 235, '  // Darker blue for light mode
    }
    
    // Create particles with variety
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: Math.random() * 3 + 1,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        baseOpacity: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1
      })
    }
    
    // Draw connections between particles if they're close enough
    const drawLines = (particle: Particle, particles: Particle[]) => {
      for (const otherParticle of particles) {
        if (particle === otherParticle) continue
        
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) +
          Math.pow(particle.y - otherParticle.y, 2)
        )
        
        if (distance < connectionDistance) {
          ctx.beginPath()
          const opacity = 0.15 * (1 - distance / connectionDistance)
          ctx.strokeStyle = `${getParticleColor()}${opacity})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (const particle of particles) {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Bounce off edges
        if (particle.x > canvas.width) {
          particle.x = canvas.width
          particle.speedX = -particle.speedX
        } else if (particle.x < 0) {
          particle.x = 0
          particle.speedX = -particle.speedX
        }
        
        if (particle.y > canvas.height) {
          particle.y = canvas.height
          particle.speedY = -particle.speedY
        } else if (particle.y < 0) {
          particle.y = 0
          particle.speedY = -particle.speedY
        }
        
        // Interact with mouse
        if (isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150
          
          if (distance < maxDistance) {
            // Particles grow and become more opaque near the mouse
            const scale = 1 + (1 - distance / maxDistance) * 1.5
            particle.size = particle.baseSize * scale
            particle.opacity = Math.min(1, particle.baseOpacity * scale)
            
            // Light push effect
            const angle = Math.atan2(dy, dx)
            const force = (maxDistance - distance) / maxDistance * 0.1
            particle.speedX -= Math.cos(angle) * force
            particle.speedY -= Math.sin(angle) * force
            
            // Add some randomness for lively effect
            particle.speedX += (Math.random() - 0.5) * 0.05
            particle.speedY += (Math.random() - 0.5) * 0.05
          } else {
            // Reset to base values when far from mouse
            particle.size = particle.baseSize
            particle.opacity = particle.baseOpacity
          }
        } else {
          // Reset when mouse leaves canvas
          particle.size = particle.baseSize
          particle.opacity = particle.baseOpacity
        }
        
        // Add some subtle randomness for more organic movement
        particle.speedX += (Math.random() - 0.5) * 0.01
        particle.speedY += (Math.random() - 0.5) * 0.01
        
        // Speed limiter to prevent particles from moving too fast
        const maxSpeed = 1
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed
          particle.speedY = (particle.speedY / speed) * maxSpeed
        }
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${getParticleColor()}${particle.opacity})`
        ctx.fill()
        
        // Draw connections
        drawLines(particle, particles)
      }
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [currentTheme, mousePosition, isMouseInCanvas])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-5"
      aria-hidden="true"
    />
  )
}