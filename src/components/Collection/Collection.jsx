import React, { useState, useEffect } from "react";
import {
  deleteCollectionLine,
  fetchCollectionData,
} from "../../services/fetchCollectionData.js";
import CollectionViewer from "./collectionViewer.jsx";
import styles from "../../componentCSS/Collection/collection.module.css";
import BackButtonIcon from "../../assets/icons/BackButtonIcon2.jsx";
import { Link, useNavigate } from "react-router";
import DeleteIcon from "../../assets/icons/DeleteIcon.jsx";

export default function Collection() {
  const [myCollection, setMyCollection] = useState([]);
  const [status, setStatus] = useState("There are no cards in your collection");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCollection() {
      const collection = await fetchCollectionData();
      console.log(collection);
      setMyCollection(collection);
    }
    loadCollection();
  }, []);

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  const handleDelete = async (collection_line_id) => {
    await deleteCollectionLine(collection_line_id);
    const collection = await fetchCollectionData();
    setMyCollection(collection);
  };

  return (
    <div className={styles.mainCollectionContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>
      <div className={styles.collectionHeader}>My Collection</div>
      {myCollection.length === 0 && (
        <div className={styles.noCardMessage}>{status}</div>
      )}
      {myCollection.map((collection) => (
        <div>
          <Link to={`/cards/details/${collection.relic_number}`}>
            <div
              key={collection.collection_line_id}
              style={{
                backgroundImage: `url(/assets/images/cardProfile/${collection.relic_number}_profile.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <CollectionViewer
              relic_number={collection.relic_number}
              card_name={collection.card_name}
              class={collection.class}
              creature={collection.creature}
              quantity={collection.quantity}
              collection_line_id={collection.collection_line_id}
            />
          </Link>
          <div
            className={styles.buttonBox}
            onClick={() => handleDelete(collection.collection_line_id)}
          >
            Del
            <DeleteIcon />
            ete
          </div>
        </div>
      ))}
    </div>
  );
}
