import { Card } from "@mui/material";
import { aboutImageUrl } from "../projectsData";

function About() {
  // const imageUrl = new URL("../assets/anthony_hsu.jpg", import.meta.url).href;
  const githubLink = "https://github.com/anthony-hsu/";
  const linkedinLink = "https://www.linkedin.com/in/anthony-hsu-73a28985/";

  const openLink = (link) => {
    window.open(link);
  };

  return (
    <div className="about-container">
      <Card className="about-image-card" elevation={20} square>
        <h1 className="about-name">Anthony Hsu</h1>
        <img src={aboutImageUrl} className="about-image" />
      </Card>
      <Card className="about-text-card" elevation={10} square>
        <h1 className="about-text-title">About Me</h1>
        <p className="about-text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="about-icon-container">
          <i
            className="devicon-github-original colored about-icon icon"
            onClick={() => openLink(githubLink)}
          ></i>
          <i
            className="devicon-linkedin-plain about-icon icon"
            onClick={() => openLink(linkedinLink)}
          ></i>
          <i className="devicon-twitter-original about-icon icon"></i>
        </div>
      </Card>
    </div>
  );
}

export default About;
