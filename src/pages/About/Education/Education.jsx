import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "./Education.module.css";
export default function Education() {
  return (
    <>
      <title>Education - Louise Aldridge</title>
      <section className={styles.education}>
        <h2>Education</h2>

        <div className={`borderPink ${styles.educationSection}`}>
          <h3>Software Development Tech Finishing School Bootcamp</h3>
          <p className="detailSubheading">TechNative Digital</p>
          <p className="smallText"> September - December 2025 </p>
          <ul>
            <li>
              <span className="boldText">JavaScript</span> fundamentals,
              <span className="boldText"> API </span>
              handling
            </li>
            <li>
              <span className="boldText">React</span> and state management
              libraries such as <span className="boldText">Redux</span> and
              <span className="boldText"> Zustand</span>
            </li>
            <li>
              Version control and team collaboration with
              <span className="boldText"> Git</span> and
              <span className="boldText"> GitHub</span>
            </li>
          </ul>
        </div>
        <div className={`borderGreen ${styles.educationSection}`}>
          <h3>Master of Arts - Digital Media</h3>
          <p className="detailSubheading">University of Sussex</p>
          <p className="smallText"> 2018 - 2019 </p>
          <ul>
            <li>Grade: Distinction</li>
          </ul>
        </div>

        <div className={`borderPurple ${styles.educationSection}`}>
          <h3>Bachelor of Arts with Honours - Media</h3>
          <p className="detailSubheading">University of Chichester</p>
          <p className="smallText"> 2014 - 2017</p>
          <ul>
            <li>Grade: 2:1</li>
          </ul>
        </div>
      </section>
    </>
  );
}
