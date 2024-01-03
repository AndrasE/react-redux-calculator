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

function Introduction(props) {
  return (
    <div className={styles.aboutContainer}>
      <p>Hi there, I hope you enjoyed my app.</p>
      <p>
        I was studying{" "}
        <a
          href="https://youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&si=F0V2dM2lwyUVwM1U"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>{" "}
        and{" "}
        <a
          href="https://youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&si=Rir29ExiR0a76yqz"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReduxToolKit
        </a>{" "}
        on YT and decided to create my own project.
      </p>
      <p>
        {" "}
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p>
      <p style={{ textAlign: "center", marginTop:10}}>
        If you would like to read more <br /> about this project click below.{" "}
        <br />
        <button
          onClick={() => toggleAboutPages(props)}
          className={styles.moreBtn}
        >
          more
        </button>
      </p>
    </div>
  );
}

function toggleAboutPages(props) {
  props.toggleShowAbout();
  props.toggleShowMoreAbout();
  props.playSound();
}

const About = ({
  showAbout,
  toggleShowAbout,
  toggleShowMoreAbout,
  playSound,
}) => {
  function handleCloseModalClick() {
    toggleShowAbout();
    playSound();
  }

  if (!showAbout) return null;

  return (
    // modal container and handleing close button or click outside of the container
    <div className={styles.modalOverlay} onClick={handleCloseModalClick}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={handleCloseModalClick}
        >
          x
        </button>
        <AboutHeader />
        <Introduction
          toggleShowAbout={toggleShowAbout}
          toggleShowMoreAbout={toggleShowMoreAbout}
          playSound={playSound}
        />
      </div>
    </div>
  );
};

export default About;
