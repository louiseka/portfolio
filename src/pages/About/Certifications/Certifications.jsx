import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <>
      <title>Certifications - Louise Aldridge</title>
      <section className={styles.certifications}>
        <h2>Certifications</h2>
        <div className={`borderPink ${styles.certificationsSection}`}>
          <h3>Certified Professional in Accessibility Core Competencies</h3>
          <p className="detailSubheading">
            International Association of Accessibility Professionals (IAAP)
          </p>
          <p className="smallText"> Issued August 2024 </p>
          <ul>
            <li>
              Certification showcasing my knowledge in disabilities,
              accessibility, universal design, and related standards, laws, and
              management strategies.
            </li>
          </ul>
        </div>
        <div className={`borderGreen ${styles.certificationsSection}`}>
          <h3>The Frontend Developer Career Path</h3>
          <p className="detailSubheading">Scrimba</p>
          <p className="smallText"> Issued December 2024 </p>
          <ul>
            <li>
              During this course, I sharpened my HTML and CSS skills, learned
              JavaScript (including Async and ES6), and explored React. I also
              worked with APIs, practiced version control with git, implemented
              mobile-first responsive design on various projects, and translated
              Figma designs with pixel perfect accuracy — all while keeping
              accessibility top of mind.
            </li>
          </ul>
        </div>
        <div className={`borderPurple ${styles.certificationsSection}`}>
          <h3>Web Development - Kickstarter Course</h3>
          <p className="detailSubheading">Code First Girls</p>
          <p className="smallText">Issued February 2024 </p>
          <ul>
            <li>
              Independently created a food blog for my final project using HTML,
              CSS, JavaScript, and Bootstrap.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
