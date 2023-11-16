import { motion } from "framer-motion";
import projectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Some of my projects you can check out!</h2>
      <motion.div className="cards">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            url={project.url}
            description={project.description}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
