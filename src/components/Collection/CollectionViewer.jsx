import React from "react";
import styles from "../../componentCSS/Collection/collection.module.css";

export default function CollectionViewer(props) {
  return (
    <div>
      <div>
        <h3 className={styles.cardText}>#{props.relic_number}</h3>
        <p className={styles.cardText}>{props.creature}</p>
        <p className={styles.cardText}>{props.card_name}</p>
        <p className={styles.cardText}>Quantity: {props.quantity}</p>
      </div>
      {/* <div className={styles.buttonBox}>
        <h2>BUTTONS GO HERE</h2>
      </div> */}
    </div>
  );
}
