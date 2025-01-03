import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Home() {
    return (
        <>
            <header>
                <div className="hero-text">
                    <h1> Hello, I'm Louise</h1>
                    <p> I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. With three
                        years
                        of experience in eCommerce and two in Marketing, I bring a well-rounded skill set, including design
                        expertise, task management, and problem-solving abilities. </p>
                    <Link className="cta-link" to="/projects">Explore my portfolio of projects <FaArrowRight className="icon" /></Link>
                </div>
                <img className="profile-img" src="./assets/louise-profile.png" alt="Profile image of Louise smiling" />

            </header>
        </>
    )
}