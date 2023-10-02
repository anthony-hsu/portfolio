import PropTypes from "prop-types";

const Project = ({ title, description, githubLink, liveLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default Project;
