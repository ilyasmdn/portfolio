import { Button } from "@/components/ui/button";
import { hero } from "@/languages/hero";
import { useContext } from "react";
import LanguageContext from "@/languages/LangugeContext";
import { MailOpen } from "lucide-react";
import person from "@/assets/person.png";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { title, subtitle, role, description, button } = hero[language];

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-around items-center gap-8 md:gap-12 min-h-screen pb-12 pt-20 w-full"
    >
      <div className="flex flex-col max-w-full md:max-w-1/2 gap-2 md:gap-3">
        <h1 className="text-text text-3xl md:text-4xl font-extrabold text-center md:text-left">
          {title}
          <span className="text-accent">Ilyas</span>
        </h1>
        {language === "en" ? (
          <h2 className="mb-3 text-text text-4xl text-center md:text-left md:text-5xl font-extrabold">
            {subtitle}
            <span className="text-primary">{role}</span>
          </h2>
        ) : (
          <h2 className="text-text text-4xl text-center md:text-left md:text-5xl font-extrabold">
            <span className="text-primary">{role}</span>
            {subtitle}
          </h2>
        )}
        <p className="text-text text-base text-center md:text-left md:text-lg">
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className="flex items-center gap-2 max-w-fit self-center md:self-auto bg-primary text-text text-md h-auto font-bold py-3 px-10 rounded-md mt-4 hover:bg-primary/80 hover:shadow-[0_5px_55px_-10px_primary] hover:shadow-primary transition-all"
        >
          <a href="#contact">
            <MailOpen className="w-5 h-5" /> {button}
          </a>
        </Button>
      </div>
      <div className="relative w-full md:w-1/2 rounded-full max-w-52 md:max-w-96 overflow-hidden shadow-xl">
        <img src={person} alt="Ilyas" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
