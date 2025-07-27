import React, { useEffect } from "react";
import { NavLink } from "react-router";
import styles from "../componentCSS/Home/home.module.css";
import CarouselSlidesHome from "../components/Home/CarouselSlidesHome";

export default function Home() {
  // useEffect(() => {
  //   localStorage.setItem(
  //     "token",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzUzMzY3NjAwLCJleHAiOjE3NTM0NTQwMDB9.MwVqlXa2l4bTeetofnXwCYcJcfHZFm1ZhT0njoJ_NUg"
  //   );
  // }, []);

  const logout = async () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={styles.mainMain}>
      <div className={styles.homeHeader}>WELCOME BACK</div>
      <div className={styles.mainHomePageContainer}>
        <NavLink to="/cards">
          <div class={styles.mainPageNavButtonCards}>
            <span>ALL CARDS</span>
          </div>
        </NavLink>
        <NavLink to="/collection">
          <div class={styles.mainPageNavButtonCollection}>
            <span>MY COLLECTION</span>
          </div>
        </NavLink>
        <NavLink to="/trades/myTrades">
          <div class={styles.mainPageNavButtonMyTrades}>
            <span>MY TRADES</span>
          </div>
        </NavLink>
        <NavLink to="/communityTrades">
          <div class={styles.mainPageNavButtonCommunityTrades}>
            <span>COMMUNITY TRADES</span>
          </div>
        </NavLink>
      </div>
      <div className={styles.carouselSlidesContainer}>
        <CarouselSlidesHome />
      </div>
    </div>
  );
}
