import React from "react";
import react_logo from "../images/react_logo.svg";
import axios_logo from "../images/axios_logo.svg";
import redux_logo from "../images/redux_logo.svg";
import redux_data_flow from "../images/redux_data_flow.gif";
import table_example from "../images/table_example.png"
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
        First of all, Redux was not necessary for this project. Its a state
        management library that allows you to manage your app's state in a
        single place and keep changes in your app more predictable and
        traceable. This is mostly used in more complex applications, but after
        my initial studies my purpose was to actively use it, therefore I
        included it in this application.
      </p>
      <img className={styles.moreAboutImg} style={{maxWidth: 350}} src={redux_data_flow} alt="redux_data_flow"></img>
      <p className={styles.moreAbouTitle}>Windows calculator</p>
      <p>
        I spent quite some time establishing the logic behind the calculator as
        I didn't want to create only a basic calculator, I wanted to recreate
        the windows calculator behaviour. It has a dynamic flow which I think
        makes it more elegant. Of course, it comes with a cost of complexity.
        The reason being is that the windows calculator has two displays and
        sometimes the two do their own things seemingly separately which
        can display a number among other things. You can pass a number and an operation and another number, but you can continue with new operations while its accordingly update the screens and conduct the previous operation while using the new calculated value. This is quite a predicament. Here is a basic example to understand the logic:
      </p>
      <img className={styles.moreAboutImg} src={table_example} alt="table_example"></img>
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
