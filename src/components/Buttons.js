import React, { useState } from "react";
import styles from "../components/styles.module.css";
import chuck from "../images/chuck.svg";
import sun from "../images/sun.svg";
import info from "../images/info.svg";
import moon from "../images/moon.svg";

function Buttons(props) {
  const [toggleIcon, setToggleIcon] = useState("dark");

  function handleThemeToggleClick() {
    setToggleIcon(props.theme);
    props.changeTheme();
  }

  return (
    <div className={styles.floatingButtons}>
      <button onClick={handleThemeToggleClick}>
        {" "}
        {props.theme === "light" ? (
          <img src={moon} alt="moon" />
        ) : (
          <img src={sun} alt="sun" />
        )}
      </button>
      <button style={{ padding: 1 }}>
        {" "}
        <img src={chuck} alt="chuck" />{" "}
      </button>
      <button>
        {" "}
        <img src={info} alt="info" />{" "}
      </button>
    </div>
  );
}

export default Buttons;
