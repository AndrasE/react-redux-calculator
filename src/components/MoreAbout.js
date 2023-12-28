import React from "react";
import react_logo from "../images/react_logo.svg";
import axios_logo from "../images/axios_logo.svg";
import redux_logo from "../images/redux_logo.svg";
import redux_data_flow from "../images/redux_data_flow.gif";
import table_example from "../images/table_example.png";
import statesandslices from "../images/statesandslices.png";
import styles from "../components/styles.module.css";

function AboutMoreHeader() {
  return (
    <div>
      <div>
        <h1>Welcome to more about</h1>
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
      <p className={styles.moreAboutTitle}>Introduction</p>
      <p>
        Here I`ll share a few things I learnt creating this application. Why and
        how it came about; what were the challenges and of some the takeaways.
      </p>
      <p className={styles.moreAboutTitle}>Redux(Toolkit)</p>
      <p>
        First of all,{" "}
        <a
          style={{
            color: "inherit",
          }}
          href="https://redux.js.org/introduction/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>{" "}
        was not necessary for this project. Its a state management library that
        allows you to manage your app's state in a single place and keep changes
        in your app more predictable and traceable. This is mostly used in more
        complex applications, but after my initial studies my purpose was to
        actively use it, therefore I included it in this application.
      </p>
      <img
        className={styles.moreAboutImg}
        style={{ maxWidth: 350 }}
        src={redux_data_flow}
        alt="redux_data_flow"
      ></img>
      <p className={styles.moreAboutTitle}>Windows calculator</p>
      <p>
        I spent quite some time establishing the logic behind the calculator as
        I didn't want to create only a basic calculator, I wanted to recreate
        the windows calculator behaviour. It has a dynamic flow which I think
        makes it more elegant. Of course, it comes with a cost of complexity.
        The reason being is that the windows calculator has two displays and
        sometimes the two do their own things seemingly separately which can
        display a number among other things. You can pass a number and an
        operation and another number, but you can continue with new operations
        while its accordingly update the screens and conduct the previous
        operation while using the new calculated value. This is quite a
        predicament. Here is a basic example to understand the logic:
      </p>
      <img
        className={styles.moreAboutImg}
        src={table_example}
        alt="table_example"
      ></img>
      <p className={styles.moreAboutTitle}>Devide</p>
      <p>
        {" "}
        I quickly figured that I will need to have to have access for a number
        of states. It not just a matter of having two numbers and an operator
        inbetween, but the numbers are changing as we type along we also have to
        be able to display equal and use all the calculations as we move
        forward. To top this up I wanted to have a clear devide on what states
        will be managed by React and which ones are with Redux. This could have
        been implimented in so many different ways, but I decided to have Redux
        to be responsible for the actual calculations and userinputs and React
        for everything else. Here it is how it looks like. On the top we have
        the states set up in React, on the buttom we see the Redux Slices.
        (ignore history and chuck for now)
      </p>
      <img
        className={styles.moreAboutImg}
        style={{ maxWidth: 500 }}
        src={statesandslices}
        alt="statesandslices"
      ></img>
    </div>
  );
}

const MoreAbout = ({ showMoreAbout, toggleShowMoreAbout, playSound }) => {
  function handleCloseModalClick() {
    toggleShowMoreAbout();
    playSound();
  }

  if (!showMoreAbout) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleCloseModalClick}>
      <div
        className={styles.modalMoreAboutContainer}
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
        <AboutMoreHeader />
        <Introduction />
      </div>
    </div>
  );
};

export default MoreAbout;
