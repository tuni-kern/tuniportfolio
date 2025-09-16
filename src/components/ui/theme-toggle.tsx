"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      onClick={() => setTheme((resolvedTheme ?? "light") === "light" ? "dark" : "light")}
      className="rounded-md p-2 text-foreground bg-secondary hover:bg-secondary/80 transition-colors"
      title="Toggle theme"
    >
      {!mounted ? null : (resolvedTheme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
    </button>
  )
}