import { useParams, Link } from "react-router"
import { useEffect } from "react";
import { projectData } from "../../data"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"


export default function ProjectDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { urlSlug } = useParams()

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
        return project.urlSlug === urlSlug
    })

    const projectSkills = projectDetails.skills.map((skill, index) => {
        return (
            <p key={index} className={getSkillClass(index)}>{skill}</p>
        )
    })

    return (
        <>
            <title>{`${projectDetails.name} - Projects - Louise Aldridge`}</title>
            <main key={projectDetails.id} className="project-details">
                <Link className="back-link" to={"/#projects"} title="An overview page of Louise Aldridge's projects"><FaArrowLeft className="icon" />
                    Back to all projects</Link>
                <h1 className="heading">{projectDetails.name}</h1>
                <div className="project-imgs-section">
                    <img className="project-img" src={projectDetails.img1} alt={projectDetails.img1Alt} />
                    <img className="project-img" src={projectDetails.img2} alt={projectDetails.img2Alt} />
                    <img className="project-img" src={projectDetails.img3} alt={projectDetails.img3Alt} />
                </div>

                <h2>Overview</h2>
                <p className="overview-text">{projectDetails.longDescription}</p>
                <Link className="cta-link" to={projectDetails.githubUrl} target="_blank" title={`GitHub repository for ${projectDetails.name}`}>Visit GitHub Repository <FaArrowRight className="icon" /></Link>
                <Link className="cta-link" to={projectDetails.liveUrl} target="_blank" title={`The live website for ${projectDetails.name}`} >Visit live application <FaArrowRight className="icon" /></Link>

                <div className="skills-container">
                    {projectSkills}
                </div>

            </main>
        </>
    )
}