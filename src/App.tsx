import { useState, useEffect } from "react";
import './index.css'
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Inicializar dark leyendo localStorage desde el inicio
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Cada vez que dark cambie, actualizar clase en <html> y localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen antialiased transition-colors duration-500 bg-white dark:bg-gray-900">
      <Navbar />

      {/* ThemeToggle se puede poner dentro del Navbar o aquí */}
      <div className="fixed z-50 top-4 right-4">
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;