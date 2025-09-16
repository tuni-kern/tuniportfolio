"use client"

import * as React from "react"
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
  const [imageError, setImageError] = React.useState(false)
  return (
    <Link
      href={projectUrl}
      target={projectUrl.startsWith("http") ? "_blank" : undefined}
      rel={projectUrl.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md",
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-md overflow-hidden border bg-muted flex items-center justify-center" style={{ width: 48, height: 48 }}>
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={title}
                width={48}
                height={48}
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-xs font-semibold text-muted-foreground">
                {title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)
                  .toUpperCase()}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-base leading-tight line-clamp-1">{title}</h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description}</p>
          </div>
        </div>
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