import { createContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

export const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: (lang: Language) => void;
}>({
  language: "fr",
  toggleLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
