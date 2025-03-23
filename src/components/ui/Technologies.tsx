import { about } from "@/languages/about";
import LanguageContext from "@/languages/LangugeContext";
import { useContext } from "react";
import InfiniteTechScrollAlt from "./infinite-tech-scroll-alt";

const Technologies = () => {

    const { language } = useContext(LanguageContext);
    const technologies = about[language].technologies.list;

  return (
    <div className="relative overflow-hidden w-full">
      <InfiniteTechScrollAlt technologies={technologies} />
    </div>
  );
};

export default Technologies;
