import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Bubblebeam",
    description:
      "AI-powered image generator - Full-stack SaaS application with AI integration, payments, and containerized deployment.",
    tags: ["React", "Node.js", "Express", "Google Gemini AI", "Stripe", "Supabase", "PostgreSQL", "Docker", "Docker Compose", "Tailwind CSS", "Cloudflare", "Nginx", "Sharp"],
    imageUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=bubblebeam.app",
    projectUrl: "https://bubblebeam.app/",
  },
  {
    title: "Allytic.ai",
    description:
      "AI-driven analytics platform delivering actionable insights and automation for business operations.",
    tags: ["Next.js", "TypeScript", "AI", "Analytics"],
    imageUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=allytic.ai",
    projectUrl: "https://allytic.ai",
  },
  {
    title: "Wellness Vending Solutions",
    description:
      "Modern vending solutions focused on healthy products, telemetry, and cashless payments.",
    tags: ["React", "Node.js", "Payments", "IoT"],
    imageUrl: "/images/projects/wvs-logo.png",
    projectUrl: "https://wellnessvendingsolutions.com",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-24 md:py-32">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Hey, I'm <span className="text-primary">Tuni Kern</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  Software Engineer focused on building intuitive, responsive, and user-friendly web applications.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="w-64 h-64 rounded-full overflow-hidden relative shrink-0 border-4 border-primary shadow-lg">
                <Image 
                  src="/TuniProfilePic.jpg" 
                  alt="Tuni Kern" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <Link
                href="/projects"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "JavaScript",
                "Node.js",
                "Express",
                "Docker",
                "Docker Compose",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "Git",
                "Stripe",
                "Supabase",
                "Cloudflare",
                "Nginx",
                "Sharp",
                "Google Gemini AI",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-background rounded-lg p-4 text-center shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}