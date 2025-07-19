import React from "react";
import styles from "../../componentCSS/Cards/cards.module.css";

export default function CardViewer(props) {
  return (
    <div className={styles.CardViewer}>
      <h3 className={styles.cardText}>#{props.relic_number}</h3>
      <p className={styles.cardText}>{props.creature}</p>
      <p className={styles.cardText}>{props.card_name}</p>
    </div>
  );
}
