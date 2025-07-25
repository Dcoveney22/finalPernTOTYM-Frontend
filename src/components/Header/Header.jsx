import React from "react";
import styles from "../../componentCSS/Header/header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import totym_logo from "../../assets/images/main/TOTYM_LOGO_TOTAL2.webp";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={styles.mainHeaderContainer}>
      <div className={styles.navigationContainer}>
        <NavLink to="/contactus">Contact Us</NavLink>
        <span onClick={() => handleLogout()}> Log Out</span>
      </div>
      <div className={styles.logoContainer}>
        <NavLink to="/home">
          <img className={styles.mainHeaderLogo} src={totym_logo} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
