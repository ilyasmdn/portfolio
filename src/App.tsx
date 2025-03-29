import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


type Theme = 'light' | 'dark';

const App = () => {

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme ? savedTheme : 'dark';
  });

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main role="main" className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
