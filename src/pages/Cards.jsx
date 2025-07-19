import React, { useEffect, useState } from "react";
import { fetchCardData } from "../services/fetchCardData";
import CardViewer from "../components/Cards/CardViewer";
import styles from "../componentCSS/Cards/cards.module.css";

import { Link, useNavigate } from "react-router";
import BackButtonIcon from "../assets/icons/BackButtonIcon2";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCardData = async () => {
      const cards = await fetchCardData();
      setCards(cards);
    };
    getCardData();
  }, []);

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className={styles.mainCardPageContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>

      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <Link to={`/cards/details/${card.relic_number}`}>
            <div
              key={card.relic_number}
              className={styles.cardViewer}
              style={{
                backgroundImage: `url(/assets/images/cardProfile/${card.relic_number}_profile.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardViewer
                relic_number={card.relic_number}
                creature={card.creature}
                card_name={card.card_name}
                extra_description={card.extra_description}
                class={card.class}
                origin={card.origin}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
