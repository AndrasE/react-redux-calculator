import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChuck } from "../features/chuckSlice";
import chuck1 from "../images/chuck1.jpg";
import chuck2 from "../images/chuck2.jpg";
import chuck3 from "../images/chuck3.jpg";
import chuck4 from "../images/chuck4.jpg";
import chuck5 from "../images/chuck5.png";
import styles from "../components/styles.module.css";

const chuckImages = [
  { url: chuck1 },
  { url: chuck2 },
  { url: chuck3 },
  { url: chuck4 },
  { url: chuck5 },
];

const Chuck = ({ showChuck, toggleShowChuck, playSound }) => {
  const chuck = useSelector((state) => state.chuck);
  const [imageIndex, setImageIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChuck());
  }, []);

  function handleCloseModalClick() {
    toggleShowChuck();
    playSound();
  }

  function handleGetNewClick() {
    playSound();

    dispatch(fetchChuck());
    if (imageIndex === 4) {
      setImageIndex(0);
    } else {
      setImageIndex((prevValue) => prevValue + 1);
    }
  }

  if (!showChuck) return null;
  return (
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
        <h1>Chuck Norris API </h1>
        <h2>
          Make free api calls to <span> </span>
          <a
            style={{ color: "inherit" }}
            href="https://api.chucknorris.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chucknorris.io
          </a>
          .
          <br />
          If you dare!
        </h2>
        <div className={styles.chuckApiContainer}>
          {chuck.loading && <h2>. . . l o a d i n g</h2>}
          {!chuck.loading && chuck.error ? <h2>Error: {chuck.error}</h2> : null}
          {!chuck.loading && chuck.value.length ? (
            <h2 key={chuck.id}>{chuck.value}</h2>
          ) : null}
        </div>
        <div className={styles.chuckImgContainer}>
          <img
            className={styles.chuckImgStyles}
            src={chuckImages[imageIndex].url}
            alt="OurChuckWeTrust"
          />
        </div>
        <h2>Hit me up with a new one!</h2>
        <button className={styles.modalBtn} onClick={handleGetNewClick}>
          💣
        </button>{" "}
      </div>
    </div>
  );
};

export default Chuck;
