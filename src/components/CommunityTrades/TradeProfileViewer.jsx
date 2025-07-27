import React, { useEffect, useState } from "react";
import {
  fetchTradesData,
  fetchTradesDataByUserID,
} from "../../services/fetchTradeData";
import styles from "../../componentCSS/Trades/trades.module.css";
import CommunityIcon from "../../assets/icons/CommunityIcon";
import CardsIcon from "../../assets/icons/CardsIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";

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
      <div>
        <img
          className={styles.profileImage}
          src={`/${props.profile}.jpg`}
          alt=""
        />
      </div>
      <p>Trade Profile</p>
      <p className={styles.cardText}>
        <CommunityIcon /> : {props.community_name}
      </p>
      <p className={styles.cardText}>
        <CardsIcon /> : {quantityToTrade.length}
      </p>

      <p className={styles.cardText}>
        <GlobeIcon /> :{" "}
        <img
          className={styles.flagImage}
          src={`/${props.region}_flag.png`}
          alt=""
        />
      </p>
    </div>
  );
}
