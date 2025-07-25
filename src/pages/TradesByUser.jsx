import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchTradesDataByUserID } from "../services/fetchTradeData";
import TradeViewer from "../components/Trades/TradeViewer";
import styles from "../componentCSS/Trades/trades.module.css";
import BackButtonIcon from "../assets/icons/BackButtonIcon2";

export default function TradesByUser() {
  const [viewTrades, setViewTrades] = useState([]);
  const { user_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getTradesByUser = async () => {
      console.log(user_id);

      const tradesData = await fetchTradesDataByUserID(user_id);

      setViewTrades(tradesData);
    };
    getTradesByUser();
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
      <div className={styles.tradesHeader}>TRADES AVAILABLE</div>
      {viewTrades.map((trades) => (
        <div
          className={styles.tradeViewer}
          key={trades.trade_line_id}
          style={{
            backgroundImage: `url(/assets/images/cardProfile/${trades.relic_number}_profile.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TradeViewer relic_number={trades.relic_number} />
        </div>
      ))}
    </div>
  );
}
