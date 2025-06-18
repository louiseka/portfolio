import Projects from "./Projects/Projects"
import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Home() {


    return (
        <>
            <header>
                <div className="hero-text">
                    <h1> Hello, I'm Louise</h1>
                    <p> I’m a self-taught, enthusiastic developer with a background in eCommerce, digital marketing, and digital accessibility. Detail-focused and passionate about creating user-friendly, accessible web experiences, I’m excited to keep growing my skills and collaborate with a team that values thoughtful, inclusive design. </p>
                    <Link className="medium-cta-link" to="https://github.com/louiseka" target="_blank" title="Louise Aldridge's GitHub profile">Visit my GitHub <FaArrowRight className="icon" /></Link>
                </div>
                <img className="profile-img" src="./assets/louise-profile.png" alt="Profile image of Louise smiling" />
            </header>
            <Projects />
        </>
    )
}