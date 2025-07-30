import React from "react";
import styles from "../../componentCSS/ContactUs/contactUs.module.css";
import { Link, useNavigate } from "react-router";

export default function ContactSuccess() {
  const navigate = useNavigate();

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className={styles.collectionSuccessContainer}>
      <div className={styles.messageContainer}>
        <p>
          Congratulations your message has been sent, a member of the team will
          be in touch soon.
        </p>
        <p>
          Thank you for using <em>TOTAL TOTYM</em>
        </p>
      </div>
      <div className={styles.navigationContainer}>
        <div onClick={handleBackClick} className={styles.viewCollection}>
          <div>Send another Message</div>
        </div>
        <div className={styles.viewCollection}>
          <Link to="/home">
            <div>
              Go <br />
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
