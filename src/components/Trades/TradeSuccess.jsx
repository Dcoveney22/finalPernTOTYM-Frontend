import React from "react";
import styles from "../../componentCSS/Collection/collection.module.css";
import { Link, useNavigate } from "react-router";

export default function TradeSuccess() {
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
        <p>Congratulations, the card has been added to your trades!</p>
        <p>
          Thank you for using <em>TOTAL TOTYM</em>
        </p>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.viewCollection}>
          <Link to="/trades/myTrades">
            <div>View Trades</div>
          </Link>
        </div>
        <div onClick={handleBackClick} className={styles.viewCollection}>
          <div>
            Keep <br />
            Pulling
          </div>
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
