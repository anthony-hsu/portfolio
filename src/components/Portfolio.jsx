import Project from "./Project";
import projectsData from "../projectsData";

const Portfolio = () => {
  const showProject = (project, index) => {
    return <Project key={index} {...project} />;
  };
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects">{projectsData.map(showProject)}</div>
    </div>
  );
};

export default Portfolio;
