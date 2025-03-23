import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold mb-6">404</h1>
            <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}