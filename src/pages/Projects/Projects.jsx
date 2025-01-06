import { projectData } from "../../data"


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
                    </div>
                </div>
            </div >
        )



    })

    return (
        <div className="projects-grid">
            <h1>This is a projects page</h1>
            <div className="wrapper">
                {projectElements}
            </div>
        </div>

    )




}