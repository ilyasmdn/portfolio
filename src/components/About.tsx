import { useContext } from "react";
import LanguageContext from "@/languages/LangugeContext";
import { about } from "@/languages/about";
import Timeline from "@/components/ui/Timeline";
import { GraduationCap, BookOpen } from "lucide-react";
import Technologies from "./ui/Technologies";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutContent = about[language];

  return (
    <section id="about" className="flex flex-col items-center gap-16 py-20">
      <h2 className="section-title">{aboutContent.title}</h2>
      <div className="flex flex-col items-left relative border border-secondary p-6 pt-8 pb-16 md:p-10 rounded-2xl">
        <h3 className="section-subtitle">
          <GraduationCap />
          {aboutContent.education.title}
        </h3>
      <Timeline />
      </div>
      <div className="w-full flex flex-col items-left relative border border-secondary p-6 md:p-10 rounded-2xl">
        <h3 className="section-subtitle mb-12!">
        <BookOpen />
          {aboutContent.technologies.title}
        </h3>
        <p className="text-text text-base text-center md:text-lg mb-6">{aboutContent.technologies.description}</p>
        <Technologies />
      </div>
    </section>
  );
};

export default About;
