import "./App.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import Projects from "./componentes/Projects";

function App() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            About
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
            My work
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
            Projects
          </motion.p>
          <motion.p
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "#535bf2",
              cursor: "pointer",
              transition: { duration: 0.1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </motion.p>
        </nav>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        layout
        className="cards"
      >
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="presentation"
          id="about"
        >
          <div>
            <h1>
              Hello! I'm <span className="name">Guillermo</span>
            </h1>
            <h2>Front-End Developer</h2>
            <div className="icons">
              <FaGithub
                onClick={() => {
                  window.open("https://github.com/guilleF225", "_blank");
                }}
                style={{
                  color: "#535bf2",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
              <FaLinkedin
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/guille-fernandez-555ab5290/",
                    "_blank"
                  );
                }}
                style={{
                  color: "#535bf2",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="about">
            <p>
              Welcome to my corner of the web! I am passionate about crafting
              seamless digital experiences and solving complex puzzles through
              code. Since 2020, I have immersed myself in the dynamic world of
              front-end development, where every line of code is an opportunity
              to bring{" "}
              <motion.span
                initial={{ color: "white", scale: 0 }}
                animate={{
                  color: ["#535bf2", "#fc08fc"],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {" "}
                creativity to life.
              </motion.span>
            </p>
          </motion.div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="my-work"
          id="work"
        >
          <div className="aboutwork">
            <h2>How I work?</h2>

            <p>
              I thrive on logical problem-solving and enjoy navigating the
              intricate details of web development. My journey has equipped me
              with a keen eye for design and an innate ability to find
              innovative solutions to challenges. From responsive layouts to
              interactive user interfaces, I take pride in creating web
              experiences that not only meet but exceed expectations.
            </p>
            <div className="stack">
              <h2>My stack includes : </h2>
              <motion.div
                animate={{ scale: [1, 1.1] }}
                initial={{ x: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="stack-icons"
              >
                <FaReact
                  style={{
                    color: "#535bf2",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <FaHtml5
                  style={{
                    color: "#535bf2",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <FaJs
                  style={{ color: "#535bf2", width: "30px", height: "30px" }}
                />
                <FaCss3
                  style={{ color: "#535bf2", width: "30px", height: "30px" }}
                />
                <FaBootstrap
                  style={{ color: "#535bf2", width: "30px", height: "30px" }}
                />
                <SiTailwindcss
                  style={{ color: "#535bf2", width: "30px", height: "30px" }}
                />
                <SiFramer
                  style={{ color: "#535bf2", width: "30px", height: "30px" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
        <section className="projects" id="projects">
          <Projects />
        </section>
      </motion.main>
    </div>
  );
}

export default App;
