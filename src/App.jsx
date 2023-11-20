import "./App.css";
import { motion } from "framer-motion";
import Projects from "./componentes/Projects";
import { useEffect, useState } from "react";
import About from "./componentes/About";
import MyWork from "./componentes/MyWork";

function App() {
  const [language, setLanguage] = useState("");
  const [langSwitcher, setLangSwitcher] = useState(true);
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const languageDetector = () => {
    if (navigator.language.includes("es")) {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };
  useEffect(() => {
    languageDetector();
  }, []);

  const HandleClickLanguage = () => {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
    setLangSwitcher(!langSwitcher);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <motion.p
            onClick={() => handleClickScroll("about")}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "#535bf2",
              cursor: "pointer",
              transition: { duration: 0.1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {language === "en" ? "About" : "Acerca de mi"}
          </motion.p>
          <motion.p
            onClick={() => handleClickScroll("work")}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "#535bf2",
              cursor: "pointer",
              transition: { duration: 0.1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {language === "en" ? "Work" : "Trabajo"}
          </motion.p>
          <motion.p
            onClick={() => handleClickScroll("projects")}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "#535bf2",
              cursor: "pointer",
              transition: { duration: 0.1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {language === "en" ? "Projects" : "Proyectos"}
          </motion.p>
        </nav>
        <div className="languageSwitch">
          {language === "es" ? "Español" : "English"}{" "}
          <div
            data-language={langSwitcher}
            onClick={() => HandleClickLanguage()}
            className="switch"
          >
            <motion.div
              layout
              transition={{ duration: 0.3, type: "spring" }}
              className="circle"
            ></motion.div>
          </div>{" "}
        </div>
      </header>
      <motion.main className="cards">
        <About language={language} />
        <MyWork language={language} />
        <section className="projects" id="projects">
          <Projects language={language} />
        </section>
      </motion.main>
    </div>
  );
}

export default App;
