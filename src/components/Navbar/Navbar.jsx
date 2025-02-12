import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      {/* Logo on the Left */}
      <a className={styles.title} href="/">
        <img src={assets.logo} alt="Logo" />
      </a>

      {/* Mobile Menu Button */}
      <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={menuOpen ? assets.crossIcon : assets.menuIcon} // ✅ Fixed toggle logic
          alt="menu-button"
        />
      </div>

      {/* Centered Navigation Links */}
      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} // ✅ Ensures correct toggling
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      {/* Contact Me Button on the Right */}
      <a href="mailto:myemail@email.com" className={styles.contactBtn}>
        Contact Dhru 
      </a>
    </div>
  );
};

export default Navbar;
