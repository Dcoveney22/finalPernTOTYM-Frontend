import React from "react";
import styles from "../../componentCSS/Collection/collection.module.css";
import { deleteCollectionLine } from "../../services/fetchCollectionData";

export default function CollectionViewer(props) {
  // const handleDelete = (collection_line_id) => {
  //   deleteCollectionLine(collection_line_id);
  // };

  return (
    <div>
      <div className={styles.collectionViewer}>
        <h3 className={styles.cardText}>#{props.relic_number}</h3>
        <p className={styles.cardText}>{props.creature}</p>
        <p className={styles.cardText}>{props.card_name}</p>
        <p className={styles.cardText}>Quantity: {props.quantity}</p>
      </div>
      {/* <div
        className={styles.buttonBox}
        onClick={() => handleDelete(props.collection_line_id)}
      >
        DELETE
      </div> */}
    </div>
  );
}
