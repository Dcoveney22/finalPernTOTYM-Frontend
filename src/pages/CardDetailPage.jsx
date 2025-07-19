import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  addCardToCollection,
  fetchCardByRelicNumber,
} from "../services/fetchCardData";
import FullCardDetail from "../components/Cards/FullCardDetail";
import styles from "../componentCSS/Cards/cards.module.css";
import BackButtonIcon from "../assets/icons/BackButtonIcon2";

export default function CardDetailPage() {
  const { relic_number } = useParams();
  const [detailPage, setDetailPage] = useState([]);
  const [collectQuantity, setCollectQuantity] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getCardDataByRelicNumber() {
      const cardDetails = await fetchCardByRelicNumber(relic_number);
      console.log(cardDetails);
      setDetailPage(cardDetails);
    }
    getCardDataByRelicNumber();
  }, [relic_number]);

  const incrementQuantity = (id) => {
    setCollectQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setCollectQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));
  };

  const handleClick = async (relic_number) => {
    const cardData = {
      relic_number: relic_number,
      quantity: collectQuantity[relic_number],
    };
    const response = addCardToCollection(cardData);
    if (response) {
      navigate("/collectionSuccess");
    }
  };

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className={styles.cardDetailPageContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>
      {detailPage.map((card) => (
        <div>
          <FullCardDetail
            relic_number={card.relic_number}
            creature={card.creature}
            card_name={card.card_name}
            extra_description={card.extra_description}
            class={card.class}
            origin={card.origin}
          />
          <div className={styles.actionContainer}>
            <div>Pulled this card?</div>
            <br />
            <div className={styles.quantityButton}>
              <button onClick={() => decrementQuantity(card.relic_number)}>
                -
              </button>
              <span>{collectQuantity[card.relic_number] || 0}</span>
              <button onClick={() => incrementQuantity(card.relic_number)}>
                +
              </button>
              <div
                className={styles.actionCall}
                onClick={() => handleClick(card.relic_number)}
              >
                Add to Collection
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
