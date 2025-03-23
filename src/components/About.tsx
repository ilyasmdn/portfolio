import { useContext } from "react";
import LanguageContext from "@/languages/LangugeContext";
import { about } from "@/languages/about";
import Timeline from "@/components/ui/Timeline";
import { GraduationCap } from "lucide-react";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutContent = about[language];

  return (
    <section id="about" className="flex flex-col items-center gap-16 py-20">
      <h2 className="section-title">{aboutContent.title}</h2>
      <div className="flex flex-col items-left relative border border-secondary p-12 rounded-2xl">
        <h3 className="section-subtitle">
          <GraduationCap />
          {aboutContent.education.title}
        </h3>
      <Timeline />
      </div>
    </section>
  );
};

export default About;
