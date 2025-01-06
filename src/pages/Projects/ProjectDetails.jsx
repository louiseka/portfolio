import { useParams } from "react-router"
import { projectData } from "../../data"



export default function ProjectDetails() {

    const { id } = useParams()

    return (
        <h1>This is the Project Details page</h1>
    )
}