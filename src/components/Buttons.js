import React, { useState } from "react";
import styles from "../components/styles.module.css";
import chuck from "../images/chuck.svg";
import sun from "../images/sun.svg";
import info from "../images/info.svg";
import moon from "../images/moon.svg";

function Buttons(props) {
  const [toggleIcon, setToggleIcon] = useState(false);

  function handleThemeToggleClick() {
    setToggleIcon((prevState) => !prevState);
    props.changeTheme();

  }

  return (
    <div className={styles.floatingButtons}>
      <button onClick={handleThemeToggleClick}>
        {" "}
        {toggleIcon ? (
          <img src={moon} alt="chuck" />
        ) : (
          <img src={sun} alt="moon" />
        )}
      </button>
      <button style={{ padding: 1 }}>
        {" "}
        <img src={chuck} alt="chuck" />{" "}
      </button>
      <button>
        {" "}
        <img src={info} alt="chuck" />{" "}
      </button>
    </div>
  );
}

export default Buttons;
