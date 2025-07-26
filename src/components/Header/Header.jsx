import React from "react";
import styles from "../../componentCSS/Header/header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import totym_logo from "../../assets/images/main/TOTYM_LOGO_TOTAL2.webp";
import ProfileButtonIcon from "../../assets/icons/ProfileButtonIcon";
import ExitButtonIcon from "../../assets/icons/ExitButtonIcon";
import ContactUsIcon from "../../assets/icons/ContactUsIcon";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={styles.mainHeaderContainer}>
      <div className={styles.logoContainer}>
        <NavLink to="/home">
          <img className={styles.mainHeaderLogo} src={totym_logo} alt="" />
        </NavLink>
      </div>
      <div className={styles.navBox}>
        <div className={styles.navButton}>
          {localStorage.getItem("token") && (
            <NavLink to="/profile/myProfile">
              Prof
              <ProfileButtonIcon />
              ile
            </NavLink>
          )}
        </div>
        <div className={styles.navButton}>
          {localStorage.getItem("token") && (
            <NavLink
              className={styles.logoutIcon}
              onClick={() => handleLogout()}
            >
              Log
              <ExitButtonIcon />
              out
            </NavLink>
          )}
        </div>
        <div className={styles.navButton}>
          <NavLink className={styles.logoutIcon} onClick={() => handleLogout()}>
            Con
            <ContactUsIcon />
            tact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
