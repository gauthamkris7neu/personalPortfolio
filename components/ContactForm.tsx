"use client"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted")
  }

  return (
    <Card className="border-blue-100 bg-white dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="pt-6">
        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="space-y-2">
            <Label htmlFor="name" className="dark:text-gray-200">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              className="border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              aria-required="true"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              aria-required="true"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="dark:text-gray-200">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="min-h-[120px] border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              aria-required="true"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
            <Send className="mr-2 h-4 w-4" aria-hidden="true" /> Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}