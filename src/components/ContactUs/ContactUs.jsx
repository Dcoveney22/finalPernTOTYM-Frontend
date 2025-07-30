import React, { useState } from "react";
import styles from "../../componentCSS/ContactUs/contactUs.module.css";
import { sendEmailMessage } from "../../services/fetchContactUsData";
import { useNavigate } from "react-router";
export default function ContactUs() {
  const [communityName, setCommunityName] = useState();
  const [yourEmail, setYourEmail] = useState();
  const [contactMessage, setContactMessage] = useState();
  const navigate = useNavigate();

  const handleSendMessage = async (
    communityName,
    yourEmail,
    contactMessage
  ) => {
    const emailMessage = {
      community_name: communityName,
      email: yourEmail,
      contactMessage: contactMessage,
    };
    const checkSuccess = await sendEmailMessage(emailMessage);
    console.log(checkSuccess.status);

    if (checkSuccess.status === 200) {
      setCommunityName("");
      setYourEmail("");
      setContactMessage("");
      navigate("/contactSuccess");
    }
  };

  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.contactHeader}>CONTACT US</div>
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Enter Community Name"
        value={communityName}
        onChange={(e) => setCommunityName(e.target.value)}
      />
      <input
        className={styles.inputBox}
        type="email"
        placeholder="Enter Your Email"
        value={yourEmail}
        onChange={(e) => setYourEmail(e.target.value)}
      />

      <textarea
        className={styles.inputTextArea}
        placeholder="Enter Your Message Here"
        value={contactMessage}
        onChange={(e) => setContactMessage(e.target.value)}
      />

      <div
        className={styles.sendMessage}
        onClick={() =>
          handleSendMessage(communityName, yourEmail, contactMessage)
        }
      >
        SEND MESSAGE
      </div>
    </div>
  );
}
