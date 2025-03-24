import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useMediaQuery } from "@/hooks/use-media-query"

interface InfiniteTechScrollAltProps {
  technologies: {
    name: string
    iconLink: string
    color: string
  }[]
}

export default function InfiniteTechScrollAlt({ technologies }: InfiniteTechScrollAltProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const [animationPlayState, setAnimationPlayState] = useState("running")
  const [animationDuration] = useState(20) // seconds

  // Check if the user is on a mobile device
  const isMobile = useMediaQuery("(max-width: 768px)")
  // Track which technology is currently selected on mobile
  const [selectedTech, setSelectedTech] = useState<number | null>(null)

  // Duplicate the technologies array to create a seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies]

  useEffect(() => {
    setAnimationPlayState(isPaused ? "paused" : "running")
  }, [isPaused])

  // Handle touch start (press) on mobile
  const handleTouchStart = (index: number) => (e: React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault() // Prevent default touch behavior
      setSelectedTech(index)
      setIsPaused(true)
    }
  }

  // Handle touch end (release) on mobile
  const handleTouchEnd = () => {
    if (isMobile) {
      setSelectedTech(null)
      setIsPaused(false)
    }
  }

  // Handle mouse events for desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsPaused(false)
    }
  }

  return (
    <div className="relative w-full overflow-hidden scroll-container">
      <TooltipProvider>
        <div
          ref={containerRef}
          className="flex gap-8 py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
            animationPlayState: animationPlayState,
            // This ensures smooth transitions when pausing/resuming
            transition: "animation-play-state 0.2s ease-out",
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <Tooltip key={index} open={isMobile ? selectedTech === index : undefined}>
              <TooltipTrigger asChild>
                <img
                  className="w-14 h-14 md:w-20 md:h-20 shrink-0 
                    dark:md:brightness-30 dark:md:saturate-30 dark:md:hover:brightness-100 dark:md:hover:saturate-100 
                    md:brightness-90 md:saturate-75 md:hover:brightness-100 md:hover:saturate-100 
                    md:hover:scale-150 transition-all duration-300"
                  src={tech.iconLink || "/placeholder.svg"}
                  alt={tech.name}
                  onTouchStart={handleTouchStart(index)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-text">
                <p className="font-bold text-base text-background">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${technologies.length * 2} * (80px + 2rem))); /* width + gap */
          }
        }
      `}</style>
    </div>
  )
}