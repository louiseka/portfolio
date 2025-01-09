import { useParams, Link } from "react-router"
import { useEffect } from "react";
import { projectData } from "../../data"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"


export default function ProjectDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams()

    function getSkillClass(index) {

        const n = index % 3


        if (n === 0) {
            return "green-label"
        }
        if (n === 1) {
            return "pink-label"
        }
        if (n === 2) {
            return "purple-label"
        }
    }

    const projectDetails = projectData.find((project) => {
        return project.id === id
    })

    const projectSkills = projectDetails.skills.map((skill, index) => {
        return (
            <p key={index} className={getSkillClass(index)}>{skill}</p>
        )
    })

    return (
        <main key={projectDetails.id} className="project-details">
            <Link className="back-link" to={"/#projects"}><FaArrowLeft className="icon" />
                Back to all projects</Link>
            <h1 className="heading">{projectDetails.name}</h1>
            <div className="project-imgs-section">
                <img className="project-img" src={projectDetails.img1} />
                <img className="project-img" src={projectDetails.img2} />
                <img className="project-img" src={projectDetails.img3} />
            </div>

            <h2>Overview</h2>
            <p className="overview-text">{projectDetails.longDescription}</p>
            <Link className="cta-link" to={projectDetails.githubUrl} target="_blank">Visit GitHub Repository <FaArrowRight className="icon" /></Link>
            <Link className="cta-link" to={projectDetails.liveUrl} target="_blank">Visit live application <FaArrowRight className="icon" /></Link>

            <div className="skills-container">
                {projectSkills}
            </div>

        </main>
    )
}