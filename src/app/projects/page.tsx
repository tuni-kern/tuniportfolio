import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const projects = [
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