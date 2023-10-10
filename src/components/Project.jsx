import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PropTypes from "prop-types";

const Project = ({ title, description, githubLink, liveLink, image }) => {
  const openLink = (link) => {
    window.open(link);
  };

  return (
    <Card className="project-card" elevation={5}>
      <CardActionArea onClick={() => openLink(liveLink)} className="project-action-area">
        <CardMedia className="project-image" component="img" image={image} />
      </CardActionArea>
      <CardContent className="project-contents">
        <div className="project-first-row">
          <h1 className="project-title">{title}</h1>
          <div className="project-icons">
            <i className="devicon-github-original colored project-icon icon" onClick={() => openLink(githubLink)}></i>
            <OpenInNewIcon className="icon project-icon" onClick={() => openLink(liveLink)}/>
          </div>
        </div>
        <div className="project-second-row">
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
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
