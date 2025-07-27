import React, { useEffect, useState } from "react";

import styles from "../../componentCSS/Profile/profile.module.css";
import { useNavigate } from "react-router";
import { fetchCollectionData } from "../../services/fetchCollectionData";
import { fetchTradesData } from "../../services/fetchTradeData";
import CardsIcon from "../../assets/icons/CardsIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";

export default function MyProfileViewer(props) {
  const [collectionQuantity, setCollectionQuantity] = useState([]);
  const [tradesQuantity, setTradesQuantity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getExtraData = async () => {
      const collectionData = await fetchCollectionData();
      const tradesData = await fetchTradesData();

      setCollectionQuantity(collectionData);
      setTradesQuantity(tradesData);
    };
    getExtraData();
  }, []);

  console.log(tradesQuantity);

  return (
    <div>
      <div>
        <p className={styles.profileHeader}>{props.community_name}'s Profile</p>
        <div className={styles.profileImgBox}>
          <img
            className={styles.profile_img}
            src={`/${props.profile_img}.jpg`}
            alt=""
          />
        </div>

        <div className={styles.profileInfoBox}>
          <div className={styles.regionImageBox}>
            <GlobeIcon /> :
            <img
              className={styles.profile_flag}
              src={`/${props.address_region}_flag.png`}
              alt=""
            />
          </div>
          <div className={styles.cardsBox}>
            <CardsIcon />:
            <div>
              <span>Collection: {collectionQuantity.length}</span>
              <br />
              <span>Trade: {tradesQuantity.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
