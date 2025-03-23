import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={projectUrl}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}