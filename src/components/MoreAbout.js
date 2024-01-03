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

function MoreAboutContent() {
  return (
    // modal container and handleing close button or click outside of the container
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
        src={statesandslices}
        alt="statesandslices"
      ></img>
      <p className={styles.moreAboutTitle}>Exceptions</p>
      <p>
        {" "}
        When I started to write the logic I never realised how many expection I
        will need to prepare to if you want a the calculator not just
        functional, but also be good looking. Here are a few examples:{" "}
      </p>
      <p>
        -User not input any nunber but click operator, example +, revert to 0 +{" "}
        <br />
        -User press operator or operators multiple times, example 4 - + revert
        to 4 + <br />
        -User hit decimal button first before input number, revert to 0. <br />
        -User send number ending to decimal place, example 3. which revert to 3{" "}
        <br />
        -User try to press zeros before anything else, example 00006, prevent 0
        or 6 <br />
      </p>
      <p>
        I could mention many more.. I think I included the most important ones
        that help the calculator to mimic the windows calculator. I left out
        some and changed others, but it is not that obvious. Due to all this, my
        code just grow bigger and got more and more hard to follow as there are
        a lot of: <br />
        if this, but that not, but if else, something then check and if..🥹
      </p>
      <p className={styles.moreAboutTitle}>Packadges</p>
      <p>
        I have used several packadges via npm (apart from{" "}
        <a
          style={{
            color: "inherit",
          }}
          href="https://www.npmjs.com/package/@reduxjs/toolkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux-Rtk
        </a>{" "}
        obviously). <br />
        <a
          style={{
            color: "inherit",
          }}
          href="https://www.npmjs.com/package/use-local-storage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use-local-storage
        </a>{" "}
        for keeping theme and sound settings stored locally. If you reopen the
        app on the same device it will load up with your last configuration.{" "}
        <br />
        <a
          style={{
            color: "inherit",
          }}
          href="https://www.npmjs.com/package/react-textfit"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-textfit
        </a>{" "}
        in the displaying the numbers in the calculator screen. It will adjust
        the fontsize according to how many digits added on as input and what is
        the output of the calculation. <br />
        <a
          style={{
            color: "inherit",
          }}
          href="https://www.npmjs.com/package/axios"
          target="_blank"
          rel="noopener noreferrer"
        >
          Axios
        </a>{" "}
        to make simple http requests for Chuck api. <br />
        <a
          style={{
            color: "inherit",
          }}
          href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use-sound
        </a>{" "}
        to not just, but to hear the calculator. I felt that especially on
        mobile, it was a bit strange to not having any feedback (apart for the
        screen) using the calculator. <br />
      </p>
      <p className={styles.moreAboutTitle}>Working-mechanish</p>
      <p>
        Referring back to the picture above. I have a few states managed by
        react, which are dispatched time and time again to the 3 of the reducers
        I have. As soon as a user adds a number, it will get saved in the
        firstInput state and also dispatched to the store as userInput. I had to
        do this as the useState hook behaves async-like. If I add a new digit
        this will get carried out again. When operator get pressed, that will be
        saved in the operator state via React and setting the counter reducers
        initial state to that number. When the second number is added it will be
        added on as secondInput and also will be dispatched to the redux store
        as userInput. From here the user can either press equal or another
        operator. When that's happen it will be dispatching the firstInput, the
        secondInput and the operator to counter reducer via a switch statement
        in react and also will dispatch it in the history reducer. First it
        saves the firstInput, secondInput and operator and once the calculation
        taken place it updates the history of the outcome. According to the
        users next move this number gets reused and set and the firstInput and
        dispatched to be the userInput, or most of the states will reset and the
        new input will be set. I'm pretty certain there is a way to do all this
        logic in a more simplified way, but as I couldn`t find any source so I
        went with things I knew and achieved the outcome I wanted. I will show
        here the working mechanism both React and Redux end I hope it will make
        more sense.
      </p>
      <div style={{ textAlign: "center" }}>
        <iframe
          className={styles.moreAboutIframe}
          src="https://www.youtube.com/embed/4-bm9e4mO9Q"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      <p className={styles.moreAboutTitle}>Takeaway</p>
      <p>
        Although this project absolutely is not required to be built with redux,
        I can see that it could help a lot in a bigger project. Previously I
        used contextApi and it was very useful for the things I needed it for,
        but Redux with{" "}
        <a
          style={{
            color: "inherit",
          }}
          href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux DevTools
        </a>{" "}
        just makes it easy to manage and track the states of the application.
      </p>
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
        <MoreAboutContent />
      </div>
    </div>
  );
};

export default MoreAbout;
