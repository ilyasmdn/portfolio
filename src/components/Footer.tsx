import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { header } from "@/languages/header";
import LanguageContext from "@/languages/LangugeContext";
import { useContext } from "react";

const Footer = () => {

  const {language} = useContext(LanguageContext)
  const links = header[language].links

  return (
    <footer id="footer" role="contentinfo" className="bg-background text-text py-18">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm font-medium">
          {links.map((link, index) => {
            return (
                <a key={index} href={link.href} className="hover:text-accent transition">
                  {link.text}
                </a>
            );
          })}
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/ilyasmdn/" target="_blank" aria-label="github link" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ilyas-elmadni/" target="_blank" aria-label="linkedin link" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
            <a href="https://x.com/ilyas__mdn" aria-label="X link" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-text/70 mt-12">
          © {new Date().getFullYear()} IlyasDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
