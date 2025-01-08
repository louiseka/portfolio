import { Link, NavLink } from "react-router"
import { FaTerminal } from "react-icons/fa"

export default function Header() {



    return (
        <nav id="navbar">
            <Link className="logo" to="/"> <FaTerminal /> louise.codes</Link>
            <div className="nav-links">
                {/* <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-active' : "")} >Projects</NavLink> */}
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : "")} >About</NavLink>
            </div>
        </nav>
    )
} 