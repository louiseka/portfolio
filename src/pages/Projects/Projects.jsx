import { projectData } from "../../data"
import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"


export default function Projects() {

    const projectElements = projectData.map(project => {

        const isWide = project.cardLayout === "wide"

        const projectName = project.name
        const projectShortDesc = project.shortDescription
        const projectThumbnail = project.thumbnailImg
        const projectGridPosition = `${project.gridPosition} card `


        return (
            <div key={project.id} className={projectGridPosition}>
                <div className={isWide ? "wide-inner-content" : ""}>
                    <img className={isWide ? "wide-grid-img" : "normal-grid-img"} src={projectThumbnail} />
                    <div className={isWide ? "wider-inner-text" : ""}>
                        <h2>{projectName}</h2>
                        <p>{projectShortDesc}</p>
                        <Link className="small-cta-link" to={`projects/${project.id}`} key={project.id}>Find out more <FaArrowRight className="icon" /> </Link>
                    </div>
                </div>
            </div >
        )



    })

    return (
        <div className="projects-grid" id="projects">
            <h2>My portfolio of projects</h2>
            <p className="sub-text"> I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. With three
                years
                of experience in eCommerce and two in Marketing, I bring a well-rounded skill set, including design
                expertise, task management, and problem-solving abilities. </p>
            <div className="wrapper">
                {projectElements}
            </div>
        </div>

    )




}