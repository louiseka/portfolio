import { FaTerminal, FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router"

export default function Footer() {
    return (
        <footer>
            <div className="rights-decl">
                <p className="footer-logo"> <FaTerminal /> louise.codes</p>
            </div>
            <div className="footer-container">

                <div className="footer-about">
                    {/* <p className="footer-logo"> <FaTerminal /> louise.codes</p> */}
                    <p className="small-title"> Hello, I'm Louise</p>
                    <p>I'm a Frontend Developer with a strong eye for detail and a passion for accessibility. I bring a well-rounded skill set, including design expertise, task management, and problem-solving abilities. </p>

                </div>

                <div className="footer-socials">
                    <p className="small-title"> Follow my coding journey</p>
                    <p>I regularly share my latest projects and learning milestones on my social accounts. You can find me on LinkedIn and GitHub. If you'd like to get in touch, feel free to send me an email. </p>
                    <div className="social-icons-container">
                        <Link to="https://www.linkedin.com/in/louiseka/" target="_blank" title="Louise Aldridge's Linked Profile"> <FaLinkedin className="social-icon" /></Link>
                        <Link to="https://github.com/louiseka" target="_blank" title="Louise Aldridge's GitHub Profile"><FaGithubSquare className="social-icon" /></Link>
                        <Link to="mailto:louisealdridge88@gmail.com" target="_blank" title="Louise Aldridge's email contact"> <FaEnvelope className="social-icon" /></Link>
                    </div>
                </div>

            </div>
            <div className="rights-decl">
                <p className="small-text">All rights reserved. © {new Date().getFullYear()} Louise Aldridge. </p>
            </div>

        </footer >

    )
}