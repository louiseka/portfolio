import { Link, NavLink } from "react-router"
import { FaTerminal } from "react-icons/fa"

export default function Header() {
    return (
        <nav>
            <Link className="logo" to="/"> <FaTerminal /> louise.codes</Link>
            <div className="nav-links">
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}