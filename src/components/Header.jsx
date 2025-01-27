import { NavLink } from "react-router"
import { FaTerminal } from "react-icons/fa"

export default function Header() {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? 'logo active' : "logo")} to="/" title="Louise Aldridge's portfolio homepage"> <FaTerminal /> louise.codes</NavLink>
            <div className="nav-links">
                <NavLink to="/about" title="A page about Louise Aldridge" className={({ isActive }) => (isActive ? 'nav-active active' : "")} >About</NavLink>
                <NavLink to="/blogs" title="Blogs written by Louise Aldridge" className={({ isActive }) => (isActive ? 'nav-active active' : "")} >Blogs</NavLink>
            </div>
        </nav>
    )
} 
