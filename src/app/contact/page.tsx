"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useRef } from "react"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      })
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Contact Me
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
              </p>
              
              {submitStatus.type && (
                <div
                  className={`mb-6 rounded-md p-4 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[150px]"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Email'}
                </button>
              </form>
              
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:tuni.kern@gmail.com"
                      className="text-primary hover:underline"
                    >
                      tuni.kern@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/tuni-kern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/tuni-kern
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com/tuni-kern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/tuni-kern
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}