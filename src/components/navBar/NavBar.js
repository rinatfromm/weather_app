import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const getNavLinkClassName = ({ isActive }) =>
  isActive ? styles.active : undefined;

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations" className={getNavLinkClassName}>
            Saved Locations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
