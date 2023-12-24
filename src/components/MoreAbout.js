import React from "react";
import react_logo from "../images/react_logo.svg";
import axios_logo from "../images/axios_logo.svg";
import redux_logo from "../images/redux_logo.svg";
import styles from "../components/styles.module.css";

function AboutMoreHeader() {
  return (
    <div>
      <div>
        <h1>
          Welcome to more about
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

function Introduction() {
  return (
    <div className={styles.moreAboutContainer}>
      <p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p>
      <p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p><p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p><p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p><p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p><p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p><p>Hi there, I hope you enjoyed my app.
        At first me idea was to have a basic calculator that uses a bit of Redux
        with React, but after some time I decided to recreate the Windows
        calculator logic and display the numbers in a more dynamic way. This has
        taken some time, but I have succeded recreating/mimicing the algorithm
        and I`m fairly proud for this as I had no help, but my own imagination.{" "}
      </p>
   
    </div>
  );
}

const MoreAbout = ({ showMoreAbout, toggleShowMoreAbout }) => {
  
  if (!showMoreAbout) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => toggleShowMoreAbout()}>
      <div
        className={styles.modalMoreAboutContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={() => toggleShowMoreAbout()}
        >
          x
        </button>
        <AboutMoreHeader />
        <Introduction />
      </div>
    </div>
  );
};

export default MoreAbout;
