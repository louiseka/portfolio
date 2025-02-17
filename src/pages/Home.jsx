import Projects from "./Projects/Projects"
import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Home() {


    return (
        <>
            <header>
                <div className="hero-text">
                    <h1> Hello, I'm Louise</h1>
                    <p> I’m a self-taught, enthusiastic frontend developer with a background in digital accessibility. With a keen eye for detail, strong task management skills, and a problem-solving mindset, I’m eager to grow my skills and collaborate with a passionate team. </p>
                    <Link className="medium-cta-link" to="https://github.com/louiseka" target="_blank" title="Louise Aldridge's GitHub profile">Visit my GitHub <FaArrowRight className="icon" /></Link>
                </div>
                <img className="profile-img" src="./assets/louise-profile.png" alt="Profile image of Louise smiling" />
            </header>
            <Projects />
        </>
    )
}