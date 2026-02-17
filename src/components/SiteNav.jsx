import { NavLink } from "react-router";
import { FaTerminal } from "react-icons/fa";

export default function SiteNav() {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "logo active" : "logo")}
          to="/"
          aria-label="Louise Aldridge's portfolio homepage"
        >
          <FaTerminal /> <span>louise.codes</span>
        </NavLink>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                to="/about"
                aria-label="A page about Louise Aldridge"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Blogs written by Louise Aldridge"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
