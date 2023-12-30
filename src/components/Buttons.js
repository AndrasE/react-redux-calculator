import React from "react";
import styles from "../components/styles.module.css";
import chuck from "../images/chuck.svg";
import sun from "../images/sun.svg";
import info from "../images/info.svg";
import moon from "../images/moon.svg";
import sound_normal from "../images/sound_normal.svg";
import sound_silent from "../images/sound_silent.svg";

function Buttons(props) {
  function handleChangeThemeClick() {
    props.changeTheme();
    props.playSound();
  }

  function handleChangeSoundClick() {
    props.changeSoundIcon();
    props.playSound();
  }

  function handleToggleShowChuckClick() {
    props.toggleShowChuck();
    props.playSound();
  }

  function handleToggleShowAbout() {
    props.toggleShowAbout();
    props.playSound();
  }

  return (
    <div className={styles.floatingButtons}>
      <button onClick={handleChangeThemeClick}>
        {" "}
        {props.theme === "light" ? (
          <img src={sun} alt="sun" />
        ) : (
          <img src={moon} alt="moon" />
        )}
      </button>
      <button onClick={handleChangeSoundClick}>
        {" "}
        {props.soundIcon === "normal" ? (
          <img src={sound_normal} alt="sound_normal" />
        ) : (
          <img src={sound_silent} alt="sound_silent}" />
        )}
      </button>

      <button onClick={handleToggleShowChuckClick} style={{ padding: 1 }}>
        {" "}
        <img src={chuck} alt="chuck" />{" "}
      </button>

      <button onClick={handleToggleShowAbout} style={{ padding: 1 }}>
        {" "}
        <img src={info} alt="info" />{" "}
      </button>
    </div>
  );
}

export default Buttons;
