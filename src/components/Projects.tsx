import LanguageContext from "@/languages/LangugeContext";
import { projects } from "@/languages/projects";
import { useContext } from "react";
import ProjectFile from "./ui/ProjectFile";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectsContent = projects[language];

  return (
    <section id="projects" className="flex flex-col items-center gap-16 py-20">
      <h2 className="section-title">{projectsContent.title}</h2>
      <div className="section-container grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 w-full">
        {projectsContent.list.map((project, index) => {
          return <ProjectFile key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
