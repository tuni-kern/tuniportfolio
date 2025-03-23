import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

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
  {
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview functionality.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/project-4.jpg",
    projectUrl: "/projects/markdown-editor",
  },
  {
    title: "Healthcare App",
    description: "A healthcare application for booking appointments and tracking health data.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    imageUrl: "/images/projects/project-5.jpg",
    projectUrl: "/projects/healthcare-app",
  },
  {
    title: "Dashboard UI",
    description: "A responsive admin dashboard interface with various data visualizations.",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    imageUrl: "/images/projects/project-6.jpg",
    projectUrl: "/projects/dashboard-ui",
  },
]

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Projects
              </h1>
              <p className="text-muted-foreground text-lg mb-12">
                Explore my portfolio of projects, showcasing my skills and experience as a software engineer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}