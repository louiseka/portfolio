import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                <p className="green-label">React</p>
                <p className="purple-label">JavaScript</p>
                <p className="pink-label">HTML</p>
                <p className="green-label">CSS</p>
                <p className="purple-label">Figma</p>
                <p className="pink-label">Git</p>
                <p className="green-label">GitHub</p>
            </div>
            <div className="skills-container">
                <p className="pink-label">Jira</p>
                <p className="green-label">Bootstrap</p>
                <p className="purple-label">Magento</p>
                <p className="pink-label">SEO</p>
            </div>
            <Link className="medium-cta-link" to="https://github.com/louiseka" target="_blank">Visit my GitHub <FaArrowRight className="icon" /></Link>
            <Link className="medium-cta-link" to={"/#projects"}>Explore my portfolio of projects <FaArrowRight className="icon" /></Link>
        </section>

    )
}