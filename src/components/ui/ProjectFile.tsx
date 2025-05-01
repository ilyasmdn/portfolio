import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { FolderOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  name: string;
  type: string;
  description: string;
  details: string;
  tech: string[];
  link: string;
  isLinkActive: boolean;
  inProgress: boolean;
  openButton:string,
  activeButton: string,
  notActiveButton: string,
  inProgressButton: string,
}

interface ProjectComponentProps {
  project: Project;
}

const ProjectFile: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <Card className="bg-background border border-secondary shadow-lg">
      <CardHeader className="flex items-center gap-2">
        <FolderOpen className="text-primary w-5 h-5" />
        <CardTitle className="text-accent">{project.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-text/80 text-sm line-clamp-2">
          {project.description}
        </p>

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

      <CardFooter className="mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full text-text font-semibold py-1 rounded-md text-xs cursor-pointer"
            >
              {project.openButton}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-accent text-lg font-semibold">
                {project.name}
              </DialogTitle>
              <DialogDescription className="text-text/80 text-sm">
                {project.details}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-secondary rounded-md text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
            <DialogFooter>
              {project.inProgress 
              ? (<p className="text-orange-500 text-sm">
                {project.inProgressButton}
              </p>) 
              : (project.isLinkActive ? (
                <Button 
                asChild
                variant="outline"
                className="text-text font-semibold py-1 rounded-md text-xs cursor-pointer"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.activeButton}
                  </a>
                </Button>
              ) : (
                <p className="text-red-500 text-sm">{project.notActiveButton}</p>
              ))
              }
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectFile;
