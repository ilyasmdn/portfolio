import type React from "react";

import { useContext, useState } from "react";
import LanguageContext from "../languages/LangugeContext";
import { header } from "../languages/header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

type Language = "en" | "fr";

interface HeaderProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = header[language].links;
  const btnContent = header[language].languageText.btnContent;
  const dropdownContent = header[language].languageText.dropdownContent;

  const handleLanguageChange = (e: React.MouseEvent) => {
    const lang = (e.target as HTMLDivElement).dataset.lang as Language;
    if (lang) {
      toggleLanguage(lang);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between fixed top-0 p-2 px-4 sm:px-8 md:px-12 lg:px-20 bg-background border-secondary border-b w-full z-10 transition-all duration-500">
      <h1 className="text-text font-extrabold text-2xl sm:text-3xl md:text-4xl">
        IlyasDev<span className="text-primary">.</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 lg:gap-12">
          {links.map((link, index) => {
            return (
              <li className="relative" key={index}>
                <a href={link.href} className="header-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop Language Dropdown */}
      <div className="hidden md:flex md:items-center md:gap-8">
        <Button
          className="h-9 w-9 rounded-full text-text transition-all"
          onClick={toggleTheme}
          variant="outline"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="dropdown-btn">
            {btnContent}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-text bg-background border border-secondary rounded-lg shadow-md p-2">
            <DropdownMenuLabel className="text-text font-bold">
              {dropdownContent}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-secondary h-[1px]" />
            <DropdownMenuItem
              data-lang="en"
              className="text-text font-semibold hover:bg-secondary px-3 py-2 rounded-md cursor-pointer"
              onClick={(e) => handleLanguageChange(e)}
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              data-lang="fr"
              className="text-text font-semibold hover:bg-secondary px-3 py-2 rounded-md cursor-pointer"
              onClick={(e) => handleLanguageChange(e)}
            >
              Français
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex flex-row-reverse items-center gap-8">
        <button
          className="md:hidden text-text p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Button
          className=" md:hidden h-9 w-9 rounded-full text-text transition-all"
          onClick={toggleTheme}
          variant="outline"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-background z-40 border-t border-secondary">
          <div className="flex flex-col h-full p-4">
            <nav className="mb-8">
              <ul className="flex flex-col gap-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text text-lg font-medium block py-2 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-secondary pt-4">
              <p className="text-text font-bold mb-2">{dropdownContent}</p>
              <div className="flex flex-col gap-2">
                <button
                  data-lang="en"
                  className="text-text font-semibold hover:bg-secondary px-3 py-2 rounded-md text-left"
                  onClick={(e) => handleLanguageChange(e)}
                >
                  English
                </button>
                <button
                  data-lang="fr"
                  className="text-text font-semibold hover:bg-secondary px-3 py-2 rounded-md text-left"
                  onClick={(e) => handleLanguageChange(e)}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
