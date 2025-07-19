import React from "react";
import styles from "../../componentCSS/Cards/cards.module.css";

export default function FullCardDetail(props) {
  return (
    <div>
      <div className={styles.cardPreviewContainer}>
        <img src={`/assets/images/cards/${props.relic_number}.jpg`} alt="" />
      </div>
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardInformationDisplayTechnical}>
          <h3>Relic Number: #{props.relic_number}</h3>
          <p>Creature Name: {props.creature}</p>
          <p>Card Name: {props.card_name}</p>
          <p>Class: {props.class}</p>
          <p>Origin: {props.origin}</p>
        </div>
        <div className={styles.cardInformationDisplayDescription}>
          <span>" {props.extra_description} "</span>
        </div>
      </div>
    </div>
  );
}
