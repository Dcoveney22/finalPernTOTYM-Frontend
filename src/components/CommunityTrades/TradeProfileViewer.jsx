import React, { useEffect, useState } from "react";
import {
  fetchTradesData,
  fetchTradesDataByUserID,
} from "../../services/fetchTradeData";
import styles from "../../componentCSS/Trades/trades.module.css";

export default function TradeProfileViewer(props) {
  const [quantityToTrade, setQuantityToTrade] = useState([]);

  useEffect(() => {
    const getQuantityFunc = async () => {
      const getQuantity = await fetchTradesDataByUserID(props.id);
      console.log(props.id);

      setQuantityToTrade(getQuantity);
    };
    getQuantityFunc();
  }, []);
  console.log(quantityToTrade);

  return (
    <div className={styles.profileBox}>
      <div className={styles.profileTextBox}>
        <p className={styles.cardText}>
          Collector Name: {props.community_name}
        </p>
        <p className={styles.cardText}>
          Quantity to trade: {quantityToTrade.length}
        </p>
        <img
          className={styles.flagImage}
          src={`/${props.region}_flag.png`}
          alt=""
        />
      </div>
      <div>
        <img
          className={styles.profileImage}
          src={`/${props.profile}.jpg`}
          alt=""
        />
      </div>
    </div>
  );
}
