import PropTypes from "prop-types";
import "../App.css";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiMui,
  SiExpress,
  SiMongoose,
  SiMongodb,
} from "react-icons/si";
const ProjectCard = (props) => {
  ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    image: PropTypes.string,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.array,
  };

  const stackIcons = (stack) => {
    switch (stack) {
      case "react":
        return (
          <FaReact
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "html":
        return (
          <FaHtml5
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "css":
        return (
          <FaCss3
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "js":
        return (
          <FaJs
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "bootstrap":
        return (
          <FaBootstrap
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "tailwind":
        return (
          <SiTailwindcss
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "framer":
        return (
          <SiFramer
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "node":
        return (
          <FaNodeJs
            style={{
              color: "#535bf2",
              width: "30px",
              height: "30px",
            }}
          />
        );
      case "mui":
        return (
          <SiMui style={{ color: "#535bf2", width: "30px", height: "30px" }} />
        );
      case "express":
        return (
          <SiExpress
            style={{ color: "#535bf2", width: "30px", height: "30px" }}
          />
        );
      case "mongo":
        return (
          <>
            <SiMongodb
              style={{ color: "#535bf2", width: "30px", height: "30px" }}
            />
            <SiMongoose
              style={{ color: "#535bf2", width: "30px", height: "30px" }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      className="card"
      key={props.id}
    >
      <h2>{props.name}</h2>
      {props.image && <img src={props.image} alt={props.name} />}
      <p>{props.description}</p>
      <div className="stack">
        {props.stack.map((item) => {
          return stackIcons(item);
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
