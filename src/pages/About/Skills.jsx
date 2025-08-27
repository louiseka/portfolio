import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Skills() {
    return (
        <>
            <section className="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    <p className="green-label">React.js</p>
                    <p className="purple-label">Tailwind</p>
                    <p className="pink-label">TypeScript</p>
                    <p className="green-label">ARIA</p>
                    <p className="purple-label">JavaScript</p>
                    <p className="pink-label">HTML</p>
                    <p className="green-label">CSS</p>
                    <p className="purple-label">RESTful APIs</p>
                    <p className="green-label">React Router</p>
                    <p className="purple-label">Figma</p>
                    <p className="pink-label">Git</p>
                    <p className="green-label">GitHub</p>
                    <p className="pink-label">Jira</p>
                    <p className="green-label">Bootstrap</p>
                    <p className="purple-label">Magento</p>
                    <p className="pink-label">SEO</p>
                    <p className="green-label">Responsive Design</p>
                    <p className="purple-label">Accessibility</p>
                </div>
                <Link className="medium-cta-link" to="https://github.com/louiseka" target="_blank" title="Louise Aldridge's GitHub profile">Visit my GitHub <FaArrowRight className="icon" /></Link>
                <Link className="medium-cta-link" to={"/#projects"} title="An overview page of Louise Aldridge's projects">Explore my portfolio of projects <FaArrowRight className="icon" /></Link>
            </section>
        </>
    )
}