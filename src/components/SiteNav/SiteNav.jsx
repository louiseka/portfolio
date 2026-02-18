import styles from "./SiteNav.module.css";
import { NavLink } from "react-router";
import { FaTerminal } from "react-icons/fa";

export default function SiteNav() {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.logo} ${styles.active}` : `${styles.logo}`
          }
          to="/"
          aria-label="Louise Aldridge's portfolio homepage"
        >
          <FaTerminal /> <span>louise.codes</span>
        </NavLink>

        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/about"
              aria-label="A page about Louise Aldridge"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              aria-label="Blogs written by Louise Aldridge"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
