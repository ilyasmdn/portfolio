import { useState, useContext, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import LanguageContext from "@/languages/LangugeContext"
import { about } from "@/languages/about"

export default function Timeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { language } = useContext(LanguageContext)
  const educationData = about[language].education.list

  // Detect if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches)
    }

    // Check on initial load
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Handle click for mobile devices
  const handleItemClick = (id: number) => {
    if (isMobile) {
      setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id))
    }
  }

  // Handle mouse enter for desktop
  const handleMouseEnter = (id: number) => {
    if (!isMobile) {
      setActiveItem(id)
    }
  }

  // Handle mouse leave for desktop
  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveItem(null)
    }
  }

  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-secondary opacity-50" />

      {/* Timeline items */}
      <div className="space-y-12">
        {educationData.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline dot */}
            <div
            aria-label="timeline dot"
              className={`absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${
                activeItem === item.id
                  ? "bg-accent text-white scale-125 shadow-lg"
                  : "bg-background text-accent border-2 border-accent hover:scale-110"
              }`}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              aria-expanded={activeItem === item.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleItemClick(item.id)
                }
              }}
            >
              <item.icon className="w-4 h-4" />
            </div>

            {/* Content container */}
            <div
              className={`ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleItemClick(item.id)
                }
              }}
            >
              {/* Year badge */}
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-text/60" />
                <span className="text-sm text-text/60">{item.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="text-text/60">{item.institution}</p>

              {/* Card (visible on hover/click) */}
              <div
                className={`mt-2 transition-all duration-300 ${
                  activeItem === item.id ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card className="bg-background border border-secondary shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-accent">{item.title}</CardTitle>
                    <CardDescription className="text-text/60">
                      {item.institution} • {item.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div>
                      <p className="text-text">{item.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-accent mb-2">
                        {language === "en" ? "Achievements" : "Réalisations"}
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-text">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-accent mb-2">
                        {language === "en" ? "Skills" : "Compétences"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary text-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}