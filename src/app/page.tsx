import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/projects/project-1.jpg",
    projectUrl: "/projects/e-commerce",
  },
  {
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality.",
    tags: ["React", "Redux", "Node.js"],
    imageUrl: "/images/projects/project-2.jpg",
    projectUrl: "/projects/task-management",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecast weather data.",
    tags: ["JavaScript", "API Integration", "CSS"],
    imageUrl: "/images/projects/project-3.jpg",
    projectUrl: "/projects/weather-dashboard",
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
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "Git",
                "Docker",
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