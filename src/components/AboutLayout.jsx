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
                        <p>Hi, I’m Louise! I’m a front-end developer with a background in eCommerce, digital marketing, and digital accessibility. I combine strong coding skills with a focus on user experience, creating websites and applications that are both user-friendly and mission-focused. </p>
                        <p>My interest in coding was reignited at AbilityNet, where I discovered the importance of digital accessibility and became an IAAP Certified Professional in Accessibility Core Competencies (CPACC). Since then, I’ve self-taught and developed my skills in HTML, CSS, JavaScript (ES6 & Async), React, TypeScript, and more - always with a focus on clean, accessible, and responsive design.<a className="medium-cta-link" href="/assets/Resume-Louise-Aldridge.pdf" target="_blank" title="Download a PDF copy of Louise Aldridge's CV.">Download a copy of my CV <FaFileDownload className="icon" /> </a> </p>

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