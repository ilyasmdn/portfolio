import { useState, useRef, useEffect } from "react"

interface InfiniteTechScrollAltProps {
  technologies: {
    name: string;
    iconLink: string;
    color: string;
}[];
}

export default function InfiniteTechScrollAlt({ technologies }: InfiniteTechScrollAltProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const [animationPlayState, setAnimationPlayState] = useState("running")
  const [animationDuration] = useState(20) // seconds

  // Duplicate the technologies array to create a seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies]

  useEffect(() => {
    setAnimationPlayState(isPaused ? "paused" : "running")
  }, [isPaused])

  return (
    <div className="relative w-full overflow-hidden scroll-container bg-primary/7">
      <div
        ref={containerRef}
        className="flex gap-8 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: `scroll ${animationDuration}s linear infinite`,
          animationPlayState: animationPlayState,
          // This ensures smooth transitions when pausing/resuming
          transition: "animation-play-state 0.2s ease-out",
        }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <img className="w-20 h-20 shrink-0 brightness-30 saturate-30 hover:brightness-100 hover:saturate-100 hover:scale-150 transition-all duration-300" key={index} src={tech.iconLink} alt={tech.name} />
        ))}
      </div>

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

