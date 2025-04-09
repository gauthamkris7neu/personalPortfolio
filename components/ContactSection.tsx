import Link from "next/link"
import { ContactForm } from "./ContactForm"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-blue-100 bg-blue-50 py-12 md:py-16 lg:py-24 dark:border-blue-900 dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4 md:px-6">
        <h2
          id="contact-heading"
          className="mb-6 text-center text-2xl md:text-3xl font-bold tracking-tight text-blue-950 lg:text-4xl dark:text-white"
        >
          Get In Touch
        </h2>
        <p className="mx-auto mb-8 max-w-md text-center text-blue-700 text-sm md:text-base dark:text-blue-200">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="mx-auto max-w-3xl grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Connect With Me</h3>
              <p className="text-blue-700 text-sm md:text-base dark:text-blue-200">
                I'm always open to new opportunities and collaborations.
              </p>
              <p className="text-blue-700 text-sm md:text-base dark:text-blue-200">
                Email me at:{" "}
                <a
                  href="mailto:gauthamperam@gmail.com"
                  className="font-medium underline hover:text-blue-800 dark:hover:text-blue-100"
                  aria-label="Email Gautham at gauthamperam@gmail.com"
                >
                  gauthamperam@gmail.com
                </a>
              </p>
            </div>

            <div className="flex justify-center md:justify-start space-x-4" aria-label="Social media links">
              <Link
                href="mailto:gauthamperam@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700"
                aria-label="Email Gautham"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/gauthamvenkat"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700"
                aria-label="Gautham's GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://x.com/gauthamperam_v" 
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700"
                aria-label="Gautham's Twitter profile"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://linkedin.com/in/gauthamperamv"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700"
                aria-label="Gautham's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs md:text-sm text-blue-500 dark:text-blue-400">
          © {new Date().getFullYear()} Gautham V. All rights reserved.
        </p>
      </div>
    </section>
  )
}