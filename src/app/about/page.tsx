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
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                    Tuni Kern
                  </h1>
                  <h2 className="text-xl text-muted-foreground mb-6">
                    Principal Software Engineer
                  </h2>
                  <p className="text-lg">
                    Hi, I'm Tuni Kern, an innovative Principal Software Engineer and AI/ML leader with a passion for architecting scalable solutions that drive real business impact. I specialize in full-stack development, AI-native applications, and workflow automation, leveraging cutting-edge technologies to solve complex challenges.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                
                <h2 className="text-2xl font-semibold mt-8">Professional Journey</h2>
                <p>
                  My journey in technology started with a strong foundation in Computer Engineering, fueling my drive to build robust, distributed systems in dynamic environments. With over 8 years of experience, I've led cross-functional teams, mentored talent, and delivered high-impact projects across full-stack engineering, cloud deployment, and AI/ML integration, always with a "builder" mindset focused on innovation and customer needs.
                </p>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium">Owner & Fractional CTO</h3>
                      <p className="text-muted-foreground">Allytic.ai • April 2025 - Present</p>
                      <p className="mt-2">
                        Founded and led an AI and automation agency, architecting distributed AI-native applications for clients. Directed teams in designing scalable, secure solutions using Node.js, Python, AWS, and tools like n8n and Make.com, resulting in significant revenue growth (e.g., 46% profit increase for a vending client and $12,600/month for a childcare client). Drove adoption of LLMs, LangChain, and Prompt Engineering while mentoring engineers on code quality and emerging technologies.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium">Full Stack Web Developer</h3>
                      <p className="text-muted-foreground">Wellness Vending Solutions • January 2017 - Present</p>
                      <p className="mt-2">
                        Developed and maintained distributed vending management applications using JavaScript, Node.js, Express.js, and React. Implemented responsive UX/UI with Flexbox/Grid for high performance and availability. Configured Linux/Ubuntu servers with NGINX for secure deployments and collaborated with operations teams to deliver business-critical features.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium">Front End Web Developer</h3>
                      <p className="text-muted-foreground">Tiny Trots Childcare • August 2019 - June 2021</p>
                      <p className="mt-2">
                        Enhanced customer acquisition through SEO optimization and web presence improvements, growing the client base by 30% in six months. Designed intuitive, accessible user interfaces in partnership with marketing and business stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium">B.S. in Computer Engineering</h3>
                    <p className="text-muted-foreground">Mississippi State University</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Node.js",
                      "Express.js",
                      "Python",
                      "Java",
                      "MongoDB",
                      "PostgreSQL",
                      "REST-APIs",
                      "HTML/CSS",
                      "Git/GitHub",
                      "Linux/Ubuntu",
                      "NGINX",
                      "Docker",
                      "Docker Compose",
                      "AWS",
                      "VPS",
                      "Stripe",
                      "Supabase",
                      "Cloudflare",
                      "Sharp",
                      "Google Gemini AI",
                      "n8n",
                      "Make.com",
                      "LLMs",
                      "GPT-4",
                      "Claude",
                      "LangChain",
                      "DialogFlow",
                      "Agile/Scrum",
                      "Flexbox/Grid",
                      "Responsive-Design",
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
                    Beyond coding, I enjoy hiking, spending time with my family, and diving into all things AI and automation related. I'm always exploring new tools and innovations in these areas to fuel both my professional and personal growth.
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