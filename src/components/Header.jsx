import { Link, NavLink } from "react-router"

export default function Header() {
    return (
        <nav>
            <Link to="/">louise.codes</Link>
            <div>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}