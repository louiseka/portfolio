import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"
import { projectData } from "../data"

export default function Home() {

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
                    </div>
                </div>
            </div >
        )
    })












    return (
        <>
            <header>
                <div className="hero-text">
                    <h1> Hello, I'm Louise</h1>
                    <p> I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. With three
                        years
                        of experience in eCommerce and two in Marketing, I bring a well-rounded skill set, including design
                        expertise, task management, and problem-solving abilities. </p>
                    {/* <Link className="cta-link" to="/projects">Explore my portfolio of projects <FaArrowRight className="icon" /></Link> */}
                </div>
                <img className="profile-img" src="./assets/louise-profile.png" alt="Profile image of Louise smiling" />
            </header>
            <div className="projects-grid">
                <h2>My portfolio of projects</h2>
                <p className="sub-text"> I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. With three
                    years
                    of experience in eCommerce and two in Marketing, I bring a well-rounded skill set, including design
                    expertise, task management, and problem-solving abilities. </p>
                <div className="wrapper">
                    {projectElements}
                </div>
            </div>
        </>
    )
}