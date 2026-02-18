import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-container">
          <li className="green-label">React.js</li>
          <li className="pink-label">Redux</li>
          <li className="purple-label">Tailwind</li>
          <li className="pink-label">TypeScript</li>
          <li className="green-label">ARIA</li>
          <li className="purple-label">JavaScript</li>
          <li className="pink-label">HTML</li>
          <li className="green-label">CSS</li>
          <li className="purple-label">RESTful APIs</li>
          <li className="green-label">React Router</li>
          <li className="purple-label">Figma</li>
          <li className="pink-label">Git</li>
          <li className="green-label">GitHub</li>
          <li className="pink-label">Jira</li>
          <li className="green-label">Bootstrap</li>
          <li className="purple-label">Magento</li>
          <li className="pink-label">SEO</li>
          <li className="green-label">Responsive Design</li>
          <li className="purple-label">Accessibility</li>
        </ul>
        <Link
          className="medium-cta-link"
          to="https://github.com/louiseka"
          target="_blank"
          title="Louise Aldridge's GitHub profile"
        >
          Visit my GitHub <FaArrowRight className="icon" />
        </Link>
        <Link
          className="medium-cta-link"
          to={"/#projects"}
          title="An overview page of Louise Aldridge's projects"
        >
          Explore my portfolio of projects <FaArrowRight className="icon" />
        </Link>
      </section>
    </>
  );
}
