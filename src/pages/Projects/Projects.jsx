import { projectData } from "../../data"
import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"


export default function Projects() {

    const projectElements = projectData.map(project => {

        const isWide = project.cardLayout === "wide"

        const projectName = project.name
        const projectShortDesc = project.shortDescription
        const projectThumbnail = project.thumbnailImg
        const projectAltText = project.img1Alt
        const projectGridPosition = `${project.gridPosition} card `


        return (
            <section key={project.id} className={projectGridPosition}>
                <div className={isWide ? "wide-inner-content" : ""}>
                    <img className={isWide ? "wide-grid-img" : "normal-grid-img"} alt={projectAltText} src={projectThumbnail} />
                    <div className={isWide ? "wider-inner-text" : ""}>
                        <h3 className="project-title">{projectName}</h3>
                        <p className="project-desc">{projectShortDesc}</p>
                        <Link className="small-cta-link" to={`projects/${project.urlSlug}`} title={`More details about ${projectName}`} key={project.id}>Find out more <FaArrowRight className="icon" /> </Link>
                    </div>
                </div>
            </section >
        )



    })

    return (
        <main className="projects-grid" id="projects">
            <h2>My portfolio of projects</h2>
            <p className="sub-text"> While learning the fundamentals of frontend development, I have been practicing my skills and applying the languages and frameworks I've learned by creating various projects. Over time, I’ve also revisited these projects to improve them with my new knowledge. </p>
            <div className="wrapper">
                {projectElements}
            </div>
        </main>

    )




}