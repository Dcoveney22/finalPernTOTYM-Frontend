import React, { useEffect, useState } from "react";
import { fetchCommunityData } from "../../services/fetchCommunityData";
import { fetchUserData } from "../../services/fetchUserData";
import TradeProfileViewer from "./TradeProfileViewer";
import styles from "../../componentCSS/Trades/trades.module.css";
import BackButtonIcon from "../../assets/icons/BackButtonIcon2";
import { Link, useNavigate } from "react-router";

export default function CommunityTrades() {
  const [viewCommunity, setViewCommunity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCommunityWithTrades = async () => {
      const communityTrades = await fetchCommunityData();
      console.log(communityTrades);

      const single_user = communityTrades.filter((item, index, array) => {
        return array.findIndex((obj) => obj.user_id === item.user_id) === index;
      });
      console.log(single_user);
      const userPromises = single_user.map((user) => {
        return fetchUserData(user.user_id);
      });
      const profiles = await Promise.all(userPromises);
      setViewCommunity(profiles.flat());
      console.log(profiles);
    };

    getCommunityWithTrades();
  }, []);
  console.log(viewCommunity);

  const handleBackClick = async () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  // const handleClick = () => {
  //   alert("this works");
  // };

  return (
    <div className={styles.mainTradesContainer}>
      <div onClick={handleBackClick} className={styles.backButtonIcon}>
        <BackButtonIcon />
      </div>
      <div className={styles.tradeHeader}>COMMUNITY TRADES</div>
      {viewCommunity.map((community) => (
        <Link to={`/trades/${community.id}`}>
          <div className={styles.communityTradeViewer}>
            <TradeProfileViewer
              community_name={community.community_name}
              id={community.id}
              profile={community.profile_img}
              region={community.address_region}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
