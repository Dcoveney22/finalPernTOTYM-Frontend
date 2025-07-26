import React from "react";
import totym_logo from "../../assets/images/main/TOTYM_LOGO_TOTAL2.webp";
import styles from "../../componentCSS/Footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div>
        <img className={styles.footerLogo} src={totym_logo} alt="" />
      </div>
    </div>
  );
}
