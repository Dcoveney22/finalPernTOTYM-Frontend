import { useEffect, useState } from "react";
import styles from "../componentCSS/Trades/trades.module.css";

import React from "react";
import { fetchTradesData } from "../services/fetchTradeData";
import TradeViewer from "../components/Trades/TradeViewer";
import NoCardsToTrade from "../components/Trades/NoCardsToTrade";
import BackButtonIcon from "../assets/icons/BackButtonIcon2";
import { useNavigate } from "react-router";

export default function Trades() {
  const [viewTrades, setViewTrades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTradeData = async () => {
      const tradeData = await fetchTradesData();
      console.log(tradeData);

      setViewTrades(tradeData);
    };
    getTradeData();
    console.log(viewTrades);
  }, []);

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className={styles.mainTradesContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>
      {/* <h3>MY TRADES</h3> */}
      <div className={styles.tradesHeader}>MY TRADES</div>
      {viewTrades.length > 0 ? (
        viewTrades.map((trades) => (
          <div
            className={styles.tradeViewer}
            key={trades.trade_line_id}
            style={{
              backgroundImage: `url(/assets/images/cardProfile/${trades.relic_number}_profile.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TradeViewer
              relic_number={trades.relic_number}
              creature={trades.creature}
              quantity={trades.quantity}
              card_name={trades.card_name}
            />
          </div>
        ))
      ) : (
        <NoCardsToTrade />
      )}
    </div>
    // </div>
  );
}
