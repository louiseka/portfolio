import { NavLink } from "react-router";
import { FaTerminal } from "react-icons/fa";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "logo active" : "logo")}
        to="/"
        title="Louise Aldridge's portfolio homepage"
      >
        {" "}
        <FaTerminal /> louise.codes
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink
          to="/about"
          title="A page about Louise Aldridge"
          className={({ isActive }) => (isActive ? "nav-active active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          title="Blogs written by Louise Aldridge"
          className={({ isActive }) => (isActive ? "nav-active active" : "")}
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
}
