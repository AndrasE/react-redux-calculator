import React from "react";
import react_logo from "../images/react_logo.svg";
import axios_logo from "../images/axios_logo.svg";
import redux_logo from "../images/redux_logo.svg";
import styles from "../components/styles.module.css";

const About = ({ showAbout, toggleShowAbout }) => {
  if (!showAbout) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => toggleShowAbout()}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={() => toggleShowAbout()}
        >
          x
        </button>
        <div className={styles.aboutHeader}>
          <h1>React Redux Calculator</h1>
         
        </div>
    
        <img className={styles.reactLogo} src={react_logo} alt="react_logo"></img>
        <img className={styles.axiosLogo} src={axios_logo} alt="axios_logo"></img>
        <img
            className={styles.reduxLogo}
            src={redux_logo}
            alt="redux_logo"
          ></img>
      </div>
    </div>
  );
};

export default About;
