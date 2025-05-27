import { Outlet, NavLink } from "react-router"
import { FaFileDownload } from "react-icons/fa"

export default function AboutLayout() {
    return (
        <>
            <title>About - Louise Aldridge</title>
            <main>
                <section className="about-section">
                    <div className="hero-text">
                        <h1>Let me introduce myself</h1>
                        <p>Hi, I’m Louise! I bring a well-rounded skill set, including design expertise, task management, and problem-solving abilities. I’m self-motivated, detail-oriented, and committed to creating user-friendly, accessible digital experiences. </p>
                        <p>My passion for coding was reignited at AbilityNet, where I discovered the importance of digital accessibility and became a IAAP Certified Professional in Accessibility Core Competencies (CPACC). This led me to self-teach and hone my frontend development skills in HTML, CSS, JavaScript (ES6, Async), React, TypeScript, and more. <a className="medium-cta-link" href="/assets/CV-Louise-Aldridge.pdf" target="_blank" title="Download a PDF copy of Louise Aldridge's CV.">Download a copy of my CV <FaFileDownload className="icon" /> </a> </p>

                    </div>

                    <img className="profile-img" src="/assets/louise-profile.png" alt="Profile image of Louise smiling" />
                </section>

                <nav className="about-nav">
                    <NavLink to="." end title="Louise Aldridge's skills" className={({ isActive }) => (isActive ? 'nav-active active' : "")}>Skills</NavLink>
                    <NavLink to="experience" title="Louise Aldridge's job history" className={({ isActive }) => (isActive ? 'nav-active active' : "")}>Experience</NavLink>
                    <NavLink to="education" title="Louise Aldridge's education history" className={({ isActive }) => (isActive ? 'nav-active active' : "")}>Education</NavLink>
                    <NavLink to="certifications" title="Certifications that Louise Aldridge has obtained" className={({ isActive }) => (isActive ? 'nav-active active' : "")}>Certifications</NavLink>
                </nav>
                <Outlet />

            </main>
        </>
    )
}