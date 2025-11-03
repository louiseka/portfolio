import { projectData } from "../../data";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const gridBackground = {
    one: "green-bg",
    two: "pink-bg",
    three: "purple-bg",
    four: "green-bg",
    five: "pink-bg",
    six: "green-bg",
    seven: "purple-bg",
    eight: "green-bg",
    nine: "pink-bg",
    ten: "purple-bg",
  };

  function getSkillClass(index, backgroundColour) {
    const labelClasses = ["green-label", "pink-label", "yellow-label"];
    let label = labelClasses[index % labelClasses.length];

    switch (backgroundColour) {
      case "green-bg":
        label = "pink-label";
        break;
      case "pink-bg":
        label = "green-label";
        break;
      case "purple-bg":
        label = "yellow-label";
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
      <section key={project.id} className={projectGridPosition}>
        <div className={isWide ? "wide-inner-content" : ""}>
          <img
            className={isWide ? "wide-grid-img" : "normal-grid-img"}
            alt={projectAltText}
            src={projectThumbnail}
          />
          <div className={isWide ? "wider-inner-text" : ""}>
            <h3 className="project-title">{projectName}</h3>
            <p className="project-desc">{projectShortDesc}</p>
            <Link
              className="small-cta-link"
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
    <main className="projects-grid" id="projects">
      <h2>My portfolio of projects</h2>
      <p className="sub-text">
        While learning the fundamentals of frontend development, I have been
        practicing my skills and applying the languages and frameworks I've
        learned by creating various projects. Over time, I’ve also revisited
        these projects to improve them with my new knowledge.{" "}
      </p>
      <div className="wrapper">{projectElements}</div>
    </main>
  );
}
