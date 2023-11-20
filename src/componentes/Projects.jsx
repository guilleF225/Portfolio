import { motion } from "framer-motion";
import { projectsListEn, projectsListEs } from "./ProjectsList";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects(language) {
  return (
    <div className="projects">
      {language.language === "en" && (
        <>
          {" "}
          <h2>Some of my projects you can check out!</h2>
          <motion.div className="cards">
            {projectsListEn.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                image={project.image}
                url={project.url}
                description={project.description}
              />
            ))}
          </motion.div>{" "}
        </>
      )}
      {language.language === "es" && (
        <>
          {" "}
          <h2>Algunos de mis proyectos que puedes ver!</h2>
          <motion.div className="cards">
            {projectsListEs.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                image={project.image}
                url={project.url}
                description={project.description}
              />
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Projects;
