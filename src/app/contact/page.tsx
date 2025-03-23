import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Contact() {
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
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
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
                    placeholder="Your message"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[150px]"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:contact@tunikern.com"
                      className="text-primary hover:underline"
                    >
                      contact@tunikern.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/tunikern
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/tunikern
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