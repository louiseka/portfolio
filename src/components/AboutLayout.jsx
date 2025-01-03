import { Outlet, NavLink } from "react-router"

export default function AboutLayout() {
    return (
        <>

            <main>
                <div className="about-section">
                    <div className="hero-text">
                        <h1>Let me introduce myself</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae libero et sapien fermentum maximus. Ut euismod eleifend lorem, ut sagittis leo placerat nec. Morbi ac auctor nisi, ut euismod est. Morbi fringilla mi nec nulla aliquam consequat nec facilisis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae libero et sapien fermentum maximus. Ut euismod eleifend lorem, ut sagittis leo placerat nec. Morbi ac auctor nisi, ut euismod est. Morbi fringilla mi nec nulla aliquam consequat nec facilisis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
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