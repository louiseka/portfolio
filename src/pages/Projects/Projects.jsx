import { projectData } from "../../data";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectElements = projectData.map((project) => {
    const { id, name, shortDescription, thumbnailImg, img1Alt, urlSlug } =
      project;

    return (
      <div key={id} className={`${styles.bentoItem} ${styles[`item${id}`]}`}>
        <img alt={img1Alt} src={thumbnailImg} className={styles.projectImg} />
        <div className={styles.content}>
          <h3 className={styles.projectTitle}>{name}</h3>
          <p className={styles.projectDesc}>{shortDescription}</p>
          <Link
            className={styles.smallCtaLink}
            to={`projects/${urlSlug}`}
            title={`More details about ${name}`}
          >
            Find out more <FaArrowRight className={styles.icon} />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <main id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>My Portfolio of Projects</h2>
      <p className={styles.subText}>
        While learning frontend development, I’ve been building projects to
        practice my skills and improve them over time.
      </p>
      <div className={styles.bentoGrid}>{projectElements}</div>
    </main>
  );
}
