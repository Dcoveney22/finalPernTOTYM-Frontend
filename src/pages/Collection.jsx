import React, { useState, useEffect } from "react";
import { fetchCollectionData } from "../services/fetchCollectionData.js";
import CollectionViewer from "../components/Collection/collectionViewer.jsx";
import styles from "../componentCSS/Collection/collection.module.css";
import BackButtonIcon from "../assets/icons/BackButtonIcon2.jsx";
import { Link, useNavigate } from "react-router";

export default function Collection() {
  const [myCollection, setMyCollection] = useState([]);
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

  return (
    <div className={styles.mainCollectionContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>
      <div className={styles.collectionHeader}>My Collection</div>
      {myCollection.map((collection) => (
        <div className={styles.cardButtonContainer}>
          <Link to={`/cards/details/${collection.relic_number}`}>
            <div
              className={styles.collectionViewer}
              key={collection.collection_line_id}
              style={{
                backgroundImage: `url(/assets/images/cardProfile/${collection.relic_number}_profile.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CollectionViewer
                relic_number={collection.relic_number}
                card_name={collection.card_name}
                class={collection.class}
                creature={collection.creature}
                quantity={collection.quantity}
              />
            </div>
          </Link>
          <div className={styles.buttonBox}>
            <h2>BUTTONS GO HERE</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
