import React, { useEffect } from "react";
import { NavLink } from "react-router";
import styles from "../componentCSS/Home/home.module.css";

export default function Home() {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzUyOTQwMzA3LCJleHAiOjE3NTMwMjY3MDd9.wfM0AyKfyLzvKwMg6-8G3-Rxy3DSRPJrH-2hugd7oYg"
    );
  }, []);

  return (
    <div className={styles.mainHomePageContainer}>
      <NavLink to="/cards">
        <div class={styles.mainPageNavButtonCards}>
          <span>CARDS</span>
        </div>
      </NavLink>
      <NavLink to="/mycollection">
        <div class={styles.mainPageNavButtonCollection}>
          <span>MY COLLECTION</span>
        </div>
      </NavLink>
    </div>
  );
}
