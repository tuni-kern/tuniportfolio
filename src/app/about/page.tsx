import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden relative">
                  <Image 
                    src="/TuniProfilePic.jpg" 
                    alt="Tuni Kern" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    About Me
                  </h1>
                  <p className="text-lg">
                    Hi, I'm Tuni Kern, a software engineer with a passion for creating
                    elegant solutions to complex problems. I specialize in building modern web
                    applications with a focus on user experience and performance.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                
                <h2 className="text-2xl font-semibold mt-8">Professional Journey</h2>
                <p>
                  My journey in software development began with a curiosity about how
                  technology can improve our daily lives. I hold a degree in Computer
                  Science and have worked with a variety of technologies across the full
                  stack.
                </p>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium">Senior Software Engineer</h3>
                      <p className="text-muted-foreground">XYZ Tech • 2020 - Present</p>
                      <p className="mt-2">
                        Led the development of a customer-facing application that increased
                        user engagement by 45%. Implemented modern frontend architecture
                        using React and TypeScript.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium">Software Developer</h3>
                      <p className="text-muted-foreground">ABC Solutions • 2017 - 2020</p>
                      <p className="mt-2">
                        Developed and maintained multiple web applications. Collaborated with
                        design and product teams to implement new features and improve user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium">BSc in Computer Science</h3>
                    <p className="text-muted-foreground">University of Technology • 2013 - 2017</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
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
                      <span
                        key={skill}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                  <p>
                    Beyond coding, I enjoy hiking, reading science fiction, and experimenting
                    with new recipes. I'm also an avid contributor to open-source projects
                    and enjoy sharing my knowledge through technical blog posts.
                  </p>
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