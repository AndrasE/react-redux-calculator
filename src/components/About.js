import React from "react";
import react_logo from "../images/react_logo.svg";
import axios_logo from "../images/axios_logo.svg";
import redux_logo from "../images/redux_logo.svg";
import styles from "../components/styles.module.css";

function AboutHeader() {
  return (
    <div>
      <div>
        <h1>
          React - Redux
          <br />
          Calculator
        </h1>
      </div>
      <div className={styles.logosContainer}>
        <img
          className={styles.reactLogo}
          src={react_logo}
          alt="react_logo"
        ></img>

        <img
          className={styles.axiosLogo}
          src={axios_logo}
          alt="axios_logo"
        ></img>

        <img
          className={styles.reduxLogo}
          src={redux_logo}
          alt="redux_logo"
        ></img>
      </div>
    </div>
  );
}

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
        <AboutHeader />
        <div className={styles.aboutContainer}>
          <p>Hi there, I hope you enjoyed my app.</p>
          <p>
            I was studying Redux and ReduxToolKit on YT and decided to create my
            own project.
          </p>
          <p>
            {" "}
            At first me idea was to have a basic calculator that uses a bit of
            Redux with React, but after some time I decided to recreate the
            Windows calculator logic and display the numbers in a more dynamic
            way. This has taken some time, but I have succeded recreating the
            algorithm and I`m fairly proud for this as I had no help, but my own
            imagination.{" "}
          </p>

          <p>If you would like to read more about this project click here.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
