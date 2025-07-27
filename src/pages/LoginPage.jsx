import React, { useState } from "react";
import { loginUser } from "../services/fetchUserData";
import { useNavigate } from "react-router";
import styles from "../componentCSS/Auth/auth.module.css";

export default function LoginPage() {
  const [communityName, setCommunityName] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const handleClick = async (communityName, password) => {
    const userLogin = {
      community_name: communityName,
      password: password,
    };
    const checkSuccess = await loginUser(userLogin);
    if (checkSuccess.status === 200) {
      localStorage.setItem("token", checkSuccess.data.token);
      setCommunityName("");
      setPassword("");
      navigate("/home");
    }
    if (checkSuccess.status === 404) {
      setStatus("This user does not exist - please Register");
      setCommunityName("");
      setPassword("");
    }
    console.log(checkSuccess);
  };

  const handleToRegister = () => {
    setCommunityName("");
    setPassword("");
    navigate("/register");
  };

  return (
    <div className={styles.mainRegisterContainer}>
      <div className={styles.loginFormContainer}>
        <div className={styles.status}>{status}</div>
        <div>
          <input
            className={styles.inputBox}
            type="text"
            name="communityName"
            value={communityName}
            placeholder="Enter Your Community Name"
            onChange={(e) => setCommunityName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputBox}
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.registerBox}>
          <div
            className={styles.registerButton}
            onClick={() => handleClick(communityName, password)}
          >
            LOGIN
          </div>
        </div>
        <span>Not already a member?</span>{" "}
        <div className={styles.registerHere} onClick={() => handleToRegister()}>
          Register Here
        </div>
      </div>
    </div>
  );
}
