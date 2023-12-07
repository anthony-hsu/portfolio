import { Card } from "@mui/material";

function About() {
  const imageUrl = new URL("../assets/anthony_hsu.jpg", import.meta.url).href;
  const githubLink = "https://github.com/anthony-hsu/";
  const linkedinLink = "https://www.linkedin.com/in/anthony-hsu-73a28985/";
  const aboutTextHeader = `Full-stack developer with a passion for delivering solutions.`;
  const aboutTextMain = `With a background spanning 7 years in software engineering and consulting, I have honed my skills primarily in languages like C++ and C#. I have recently shifted my focus to crafting full-stack web applications—a deliberate step towards evolving my skills as a software engineer. From responsive UI design to robust back-end functionalities, I am excited about future opportunities to bring ideas to life in the dynamic realm of web development.`;

  const openLink = (link) => {
    window.open(link);
  };

  return (
    <>
      <div className="about-container">
        <Card className="about-image-card" elevation={20} square>
          <h1 className="about-name">Anthony Hsu</h1>
          <img src={imageUrl} className="about-image" />
        </Card>
        <h1 className="about-name-tablet">Anthony Hsu</h1>
        <Card className="about-text-card-desktop" elevation={10} square>
          <div className="about-icon-container-tablet">
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
          <h1 className="about-text-title">About Me</h1>
          <div className="about-text-body">
            <p className="about-text-header">{aboutTextHeader}</p>
            <p className="about-text-main">{aboutTextMain}</p>
          </div>
          <div className="about-icon-container">
            <i
              className="devicon-github-original colored about-icon icon"
              onClick={() => openLink(githubLink)}
            ></i>
            <i
              className="devicon-linkedin-plain about-icon icon"
              onClick={() => openLink(linkedinLink)}
            ></i>
            {/* <i className="devicon-twitter-original about-icon icon"></i> */}
          </div>
        </Card>
      </div>
      <div className="about-text-card-mobile">
        <h1 className="about-text-title">About Me</h1>
        <div className="about-text-body">
          <p className="about-text-header">{aboutTextHeader}</p>
          <p className="about-text-main">{aboutTextMain}</p>
        </div>
        <div className="about-icon-container">
          <i
            className="devicon-github-original colored about-icon icon"
            onClick={() => openLink(githubLink)}
          ></i>
          <i
            className="devicon-linkedin-plain about-icon icon"
            onClick={() => openLink(linkedinLink)}
          ></i>
          {/* <i className="devicon-twitter-original about-icon icon"></i> */}
        </div>
      </div>
    </>
  );
}

export default About;
