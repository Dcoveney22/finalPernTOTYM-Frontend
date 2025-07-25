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
    <div>
      <div className={styles.mainHomePageContainer}>
        <div className={styles.homeHeader}>
          THE COMMUNITY APP
          <p>"made by the community, for the community"</p>
        </div>
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
        <NavLink to="/trades">
          <div class={styles.mainPageNavButtonMyTrades}>
            <span>MY TRADES</span>
          </div>
        </NavLink>
        <NavLink to="/communityTrades">
          <div class={styles.mainPageNavButtonCommunityTrades}>
            <span>COMMUNITY TRADES</span>
          </div>
        </NavLink>
        <button onClick={() => logout()}>LOGOUT</button>
      </div>
      <div className={styles.carouselSlidesContainer}>
        <span className={styles.homeHeader}> CARDS OF THE WEEK</span>
        <CarouselSlidesHome />
      </div>
    </div>
  );
}
