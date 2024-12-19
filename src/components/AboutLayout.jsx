import { Outlet, NavLink } from "react-router"

export default function AboutLayout() {
    return (
        <>
            <h1>This is the About page</h1>
            <nav>
                <NavLink to=".">Skills</NavLink>
                <NavLink to="job-history">Job History</NavLink>
                <NavLink to="education">Education</NavLink>
            </nav>
            <Outlet />
        </>
    )
}