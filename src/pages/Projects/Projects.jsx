import { projectData } from "../../data";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const gridBackground = {
    one: "green",
    two: "pink",
    three: "purple",
    four: "green",
    five: "pink",
    six: "green",
    seven: "purple",
    eight: "green",
    nine: "pink",
    ten: "purple",
    eleven: "green",
  };

  function getSkillClass(index, backgroundColour) {
    const labelClasses = ["green", "pink", "yellow"];
    let label = labelClasses[index % labelClasses.length];

    switch (backgroundColour) {
      case "green":
        label = "pink label";
        break;
      case "pink":
        label = "green label";
        break;
      case "purple":
        label = "yellow label";
        break;
      default:
        label = labelClasses[index % labelClasses.length];
    }
    return label;
  }

  const projectElements = projectData.map((project) => {
    const isWide = project.cardLayout === "wide";
    const backgroundColour = gridBackground[project.gridPosition];

    const projectSkills = project.skills.map((skill, index) => {
      return (
        <p key={index} className={getSkillClass(index, backgroundColour)}>
          {skill}
        </p>
      );
    });

    const projectName = project.name;
    const projectShortDesc = project.shortDescription;
    const projectThumbnail = project.thumbnailImg;
    const projectAltText = project.img1Alt;
    const projectGridPosition = `${project.gridPosition} card `;

    return (
      <section
        key={project.id}
        className={`${projectGridPosition} ${backgroundColour} ${isWide ? "wideCard" : ""}`}
      >
        <div className={isWide ? "wideInnerContent" : ""}>
          <img
            className={isWide ? "wideGridImg" : "normalGridImg"}
            alt={projectAltText}
            src={projectThumbnail}
          />
          <div className={isWide ? "wideInnerText" : ""}>
            <h3 className="projectTitle">{projectName}</h3>
            <p className="description">{projectShortDesc}</p>
            <Link
              className="smallCtaLink"
              to={`projects/${project.urlSlug}`}
              title={`More details about ${projectName}`}
              key={project.id}
            >
              Find out more <FaArrowRight className="icon" />{" "}
            </Link>
            <div className="project-skills-container">{projectSkills}</div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <section className="grid" id="projects">
      <h2>My portfolio of projects</h2>
      <p className="subText">
        While learning the fundamentals of frontend development, I have been
        practicing my skills and applying the languages and frameworks I've
        learned by creating various projects. Over time, I’ve also revisited
        these projects to improve them with my new knowledge.{" "}
      </p>
      <div className="wrapper">{projectElements}</div>
    </section>
  );
}
