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
      <p>Here I`ll share of a few things I learnt creating this application.
        Why and how it came about; what were the challanges and of some the takeaways. {" "}
      </p>
      <p>First of all, Redux was not necessary for this project. Its a state managment
        libary that allows you to manage your app's state in a single place and keep 
        changes in your app more predictable and traceable. This is mostly used in
        more complex applications, but after my inital studies my
        purpose was to actively use therefore I inculded it in this application.
      </p><p>I spent quite some time to establish the logic behind the calculator 
        as I didn`t want create only a basic calculator, I wanted to recreate the 
        windows calculator behavour. It has a dynamic flow which I think make it
        more elegant. Of course it comes with a cost on complexity. 
      </p><p>The reason being is that the windows calculator has two rows and sometimes
        the to rows doing their own things separately which can display a number of things. 
        Here is a basic example to understand the logic:
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
