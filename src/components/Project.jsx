import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";

const Project = ({ title, description, githubLink, liveLink, image }) => {
  const openLiveLink = () => {
    window.open(liveLink);
  };

  return (
    <div className="project">
      <div className="project-info">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        {githubLink}
      </a>
      </div>
      <Card className="project-card">
        <CardActionArea onClick={openLiveLink}>
          <CardMedia className="project-image" component="img" image={image} />
          <CardContent className="project-contents">
            <h1>{title}</h1>
            <p>{description}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  image: PropTypes.string,
};

export default Project;
