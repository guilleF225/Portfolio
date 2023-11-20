import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const MyWork = (language) => {
  return (
    <>
      {language.language === "en" && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
      )}
      {language.language === "es" && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="my-work"
          id="work"
        >
          <div className="aboutwork">
            <h2>¿Cómo me gusta trabajar?</h2>

            <p>
              Me encanta la resolución de problemas lógicos y disfruto indagando
              en los detalles del desarrollo web. Mi experiencia me ha dotado de
              una visión para el diseño y habilidad para encontrar soluciones
              innovadoras a desafíos. Desde diseños responsivos hasta interfaces
              interactivas, amo crear experiencias web que cumplen y superan
              expectativas.
            </p>
            <div className="stack">
              <h2>Mis tecnologías incluyen : </h2>
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
      )}
    </>
  );
};

export default MyWork;
