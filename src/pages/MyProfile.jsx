import React, { useEffect, useState } from "react";
import { fetchMyProfile } from "../services/fetchUserData";
import MyProfileViewer from "../components/MyProfile/MyProfileViewer";
import styles from "../componentCSS/Profile/profile.module.css";
import { Link } from "react-router";
Link;
export default function MyProfile() {
  const [viewProfile, setViewProfile] = useState([]);

  useEffect(() => {
    async function getProfile() {
      const myProfile = await fetchMyProfile();
      console.log(myProfile);

      setViewProfile(myProfile);
    }
    getProfile();
  }, []);

  return (
    <div className={styles.mainProfileContainer}>
      <div className={styles.profileBox}>
        {viewProfile.map((profile) => (
          <div>
            <MyProfileViewer
              community_name={profile.community_name}
              profile_img={profile.profile_img}
              address_region={profile.address_region}
            />
          </div>
        ))}
      </div>
      <div className={styles.navBox}>
        <div className={styles.navButton}>
          <Link to="/collection">VIEW COLLECTION</Link>
        </div>
        <div className={styles.navButton}>
          <Link to="/trades/myTrades">VIEW MY TRADES</Link>
        </div>
      </div>
    </div>
  );
}
