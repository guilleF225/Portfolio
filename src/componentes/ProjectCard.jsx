import PropTypes from "prop-types";
import "../App.css";
import "./ProjectCard.css";
import { motion } from "framer-motion";
const ProjectCard = (props) => {
  ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  return (
    <motion.div
      onClick={() => {
        window.open(props.url, "_blank");
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="card"
      key={props.id}
    >
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>{props.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
