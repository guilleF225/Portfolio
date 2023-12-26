import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = (language) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="presentation"
      id="about"
    >
      {language.language === "en" && (
        <>
          <div>
            <h1>
              Hello! I'm <span className="gradient">Guillermo</span>
            </h1>
            <h2>Full-Stack Developer</h2>
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
                    "https://www.linkedin.com/in/guillermo-fernandez-555ab5290/",
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="about"
          >
            <motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "easeIn",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                Welcome to my corner of the web! I am passionate about crafting
                seamless digital experiences and solving complex puzzles through
                code. Since 2020, I have immersed myself in the dynamic world of
                web development, where every line of code is an opportunity to
                bring
                <motion.span
                  initial={{ color: "white", scale: 0 }}
                  animate={{
                    color: ["#535bf2", "#ffffff", "#222222"],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                >
                  {" "}
                  creativity to life.
                </motion.span>
              </motion.span>
            </motion.p>
          </motion.div>{" "}
        </>
      )}
      {language.language === "es" && (
        <>
          {" "}
          <div>
            <h1>
              Hola! Soy <span className="gradient">Guillermo</span>
            </h1>
            <h2>Desarrollador Full-Stack</h2>
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
                    "https://www.linkedin.com/in/guillermo-fernandez-555ab5290/",
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="about"
          >
            <motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "easeIn",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                ¡Bienvenido a mi rincón en Internet! Me apasiona crear
                experiencias digitales disfrutables, además de resolver
                problemas complejos mediante la programación. Desde el año 2020,
                he sumergido mi pasión en el mundo del desarrollo web, donde
                cada línea de código es una oportunidad para dar
                <motion.span
                  initial={{ color: "white", scale: 0 }}
                  animate={{
                    color: ["#535bf2", "#ffffff", "#222222"],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                >
                  {" "}
                  vida a la creatividad.
                </motion.span>
              </motion.span>
            </motion.p>
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default About;
