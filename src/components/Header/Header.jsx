import React from "react";
import styles from "../../componentCSS/Header/header.module.css";
import { NavLink } from "react-router-dom";
import totym_logo from "../../assets/images/main/TOTYM_LOGO_TOTAL.webp";

export default function Header() {
  return (
    <div className={styles.mainHeaderContainer}>
      <div className={styles.navigationContainer}>
        <NavLink to="/contactus">Contact Us</NavLink>
      </div>
      <div className={styles.logoContainer}>
        <NavLink to="/home">
          <img className={styles.mainHeaderLogo} src={totym_logo} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
