import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";  // Import ShadCN components
import { Button } from "./button"; // Assuming you're using your custom button component
import { FolderOpen } from "lucide-react"; // File icon

interface Project {
  name: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
  isLinkActive: boolean;
}

interface ProjectComponentProps {
  project: Project;
}

const ProjectFile: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <Card className="bg-background border border-secondary shadow-lg">
      <CardHeader className="flex items-center gap-2">
        <FolderOpen className="text-primary w-5 h-5" />
        <CardTitle className="text-accent">
          {project.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1 mt-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-background border border-secondary text-text/90 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          asChild
          variant={project.isLinkActive ? "outline" : "ghost"}
          className={`w-full ${project.isLinkActive ? " text-text" : "text-text/60! cursor-not-allowed bg-secondary/20 hover:bg-secondary/20!"} font-semibold py-1 rounded-md text-xs`}
        >
          <a 
            href={project.link} 
            onClick={(e) => {e.preventDefault()}} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectFile;
