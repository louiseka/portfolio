import { Outlet, NavLink, Link } from "react-router"
import { FaFileDownload } from "react-icons/fa"

export default function AboutLayout() {
    return (
        <>

            <main>
                <div className="about-section">
                    <div className="hero-text">
                        <h1>Let me introduce myself</h1>
                        <p>Hi, I’m Louise - a Frontend Developer with a strong eye for detail and a passion for accessibility. With three years of experience in eCommerce and two in Marketing, I bring a well-rounded skill set, including design expertise, task management, and problem-solving abilities. I’m self-motivated, detail-oriented, and committed to creating user-friendly, accessible digital experiences. </p>
                        <p>My passion for coding was reignited at AbilityNet, where I discovered the importance of digital accessibility and became a IAAP Certified Professional in Accessibility Core Competencies (CPACC). This led me to self-teach and hone my frontend development skills in HTML, CSS, JavaScript (ES6, Async), React, git, and GitHub. <a className="medium-cta-link" href="/assets/CV-Louise-Aldridge.pdf" target="_blank">Download a copy of my CV <FaFileDownload className="icon" /> </a> </p>

                    </div>

                    <img className="profile-img" src="/assets/louise-profile.png" alt="Profile image of Louise smiling" />
                </div>

                <nav className="about-nav">
                    <NavLink to="." end className={({ isActive }) => (isActive ? 'nav-active' : "")}>Skills</NavLink>
                    <NavLink to="experience" className={({ isActive }) => (isActive ? 'nav-active' : "")}>Experience</NavLink>
                    <NavLink to="education" className={({ isActive }) => (isActive ? 'nav-active' : "")}>Education</NavLink>
                    <NavLink to="certifications" className={({ isActive }) => (isActive ? 'nav-active' : "")}>Certifications</NavLink>
                </nav>
                <Outlet />

            </main>
        </>
    )
}