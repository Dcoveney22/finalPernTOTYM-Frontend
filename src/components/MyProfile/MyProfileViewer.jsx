import React, { useEffect, useState } from "react";

import styles from "../../componentCSS/Profile/profile.module.css";
import { useNavigate } from "react-router";
import { fetchCollectionData } from "../../services/fetchCollectionData";
import { fetchTradesData } from "../../services/fetchTradeData";

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
            Trading Region:{" "}
            <img
              className={styles.profile_flag}
              src={`/${props.address_region}_flag.png`}
              alt=""
            />
          </div>

          <p>Cards in Collection: {collectionQuantity.length}</p>
          <p>Cards available to Trade: {tradesQuantity.length}</p>
        </div>
      </div>
    </div>
  );
}
