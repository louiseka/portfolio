import { Outlet, NavLink } from "react-router"

export default function AboutLayout() {
    return (
        <>
            <h1>This is the About page</h1>
            <nav>
                <NavLink to="." className={({ isActive }) => (isActive ? 'nav-active' : "")}>Skills</NavLink>
                <NavLink to="job-history" className={({ isActive }) => (isActive ? 'nav-active' : "")}>Job History</NavLink>
                <NavLink to="education" className={({ isActive }) => (isActive ? 'nav-active' : "")}>Education</NavLink>
            </nav>
            <Outlet />
        </>
    )
}