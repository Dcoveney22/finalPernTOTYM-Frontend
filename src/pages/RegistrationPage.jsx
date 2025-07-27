import React, { useState } from "react";
import styles from "../componentCSS/Auth/auth.module.css";
import { registerNewUser } from "../services/fetchUserData";
import { useNavigate } from "react-router";

export default function RegistrationPage() {
  const [communityName, setCommunityName] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  //   const [phoneNumber, setPhonenumber] = useState();
  const [password, setPassword] = useState();
  const [firstLineAddress, setFirstLineAddress] = useState();
  const [cityAddress, setCityAddress] = useState();
  const [postcodeAddress, setPostcodeAddress] = useState();
  const [profileImage, setProfileImage] = useState();
  const [addressRegion, setAddressRegion] = useState();
  const [status, setStatus] = useState("REGISTER WITH TOTAL TOTYM");

  const navigate = useNavigate();

  const handleClick = async (
    firstName,
    lastName,
    communityName,
    email,
    firstLineAddress,
    cityAddress,
    postcodeAddress,
    profileImage,
    addressRegion,
    password
  ) => {
    const dateCreated = new Date();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      community_name: communityName,
      email: email,
      first_line_address: firstLineAddress,
      city_address: cityAddress,
      postcode_address: postcodeAddress,
      profile_img: profileImage,
      address_region: addressRegion,
      password: password,
      date_created: dateCreated,
    };
    const checkSuccess = await registerNewUser(newUser);
    console.log(checkSuccess);
    if (checkSuccess.data.id) {
      setCommunityName("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setFirstLineAddress("");
      setCityAddress("");
      setPostcodeAddress("");
      setProfileImage("");
      setAddressRegion("");
      navigate("/login");
    }
    if (checkSuccess.status === 409) {
      setStatus("COMMUNITY NAME MUST BE UNIQUE");
      setCommunityName("THIS MUST BE UNIQUE");
    } else if (checkSuccess.error) {
      setStatus("THERE WAS AN ERROR - nothing was entered, PLEASE TRY AGAIN");
    }
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.mainRegisterContainer}>
      <div className={styles.formContainer}>
        <div>{status}</div>
        <div>
          {/* <label htmlFor="firstName">First Name</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="communityName">Community Name</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Set Unique Community Name"
            name="communityName"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            className={styles.inputBox}
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="firstLineAddress">First Line Address</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter First Line Of Address"
            name="addressFirstLine"
            value={firstLineAddress}
            onChange={(e) => setFirstLineAddress(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="cityAddress">City/State</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter City or State"
            name="cityAddress"
            value={cityAddress}
            onChange={(e) => setCityAddress(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="postcodeAddress">Postcode/Zip</label> */}
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter Postcode or Zip"
            name="postcodeAddress"
            value={postcodeAddress}
            onChange={(e) => setPostcodeAddress(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="profileImage">Profile</label> */}
          <select
            className={styles.inputBox}
            name="profileImage"
            placeholder="choose your fate..."
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            required
          >
            <option value={""}>Choose your fate...</option>
            <option value={"devil_profile"}>I am the lord of hell!</option>
            <option value={"fairy_profile"}>I flutter in the garden!</option>
            <option value={"madussa_profile"}>My hair are ssssnakesss!</option>
            <option value={"grifin_profile"}>
              My body is of a lion, wings of an eagle!
            </option>
            <option value={"gargoyle_profile"}>
              Something Gothic this way comes!
            </option>
          </select>
        </div>
        <div>
          {/* <label htmlFor="addressRegion">Region</label> */}
          <select
            className={styles.inputBox}
            name="addressRegion"
            value={addressRegion}
            onChange={(e) => setAddressRegion(e.target.value)}
          >
            <option value={""}>Trading Region</option>
            <option value={"UK"}>United Kingdom</option>
            <option value={"USA"}>USA</option>
          </select>
        </div>
        <div>
          {/* <label htmlFor="password">Set Password</label> */}
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Set Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.registerBox}>
          <div
            className={styles.registerButton}
            type="submit"
            onClick={() =>
              handleClick(
                firstName,
                lastName,
                communityName,
                email,
                firstLineAddress,
                cityAddress,
                postcodeAddress,
                profileImage,
                addressRegion,
                password
              )
            }
          >
            REGISTER
          </div>
        </div>
        <span>Already a user?</span>
        <div className={styles.loginHere} onClick={() => handleToLogin()}>
          LOGIN HERE
        </div>
      </div>
    </div>
  );
}
