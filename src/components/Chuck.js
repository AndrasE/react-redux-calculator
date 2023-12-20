import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../components/styles.module.css";
import { fetchChuck } from "../features/chuckSlice";
import chuck1 from "../images/chuck1.jpg";
import chuck2 from "../images/chuck2.jpg";
import chuck3 from "../images/chuck3.jpg";
import chuck4 from "../images/chuck4.jpg";
import chuck5 from "../images/chuck5.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: chuck1,
  },
  {
    url: chuck2,
  },
  {
    url: chuck3,
  },
  {
    url: chuck4,
  },
  {
    url: chuck5,
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: 150 }} src={fadeImage.url} alt="slideshow" />
          </div>
        ))}
      </Fade>
    </div>
  );
};

const Chuck = ({ showChuck, toggleShowChuck }) => {
  const chuck = useSelector((state) => state.chuck);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChuck());
  }, []);

  if (!showChuck) return null;
  return (
    <div className={styles.overlay} onClick={() => toggleShowChuck()}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={() => toggleShowChuck()}
        >
          x
        </button>
        <h5>Chuck Norris API </h5>
        <h6>
          Make free api calls to <span> </span>
          <a
            style={{ color: "inherit" }}
            href="https://api.chucknorris.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chucknorris.io
          </a>
          . <br /> If you dare!
        </h6>
        <hr className={styles.modalHr} />
        <div>
          {chuck.loading && (
            <div>
              <h6>...loading</h6>
            </div>
          )}
          {!chuck.loading && chuck.error ? (
            <div>Error: {chuck.error}</div>
          ) : null}
          {!chuck.loading && chuck.value.length ? (
            <h6 key={chuck.id}>{chuck.value}</h6>
          ) : null}
          {/* <img
            style={{ position: "relative", width: 150, top: 5 }}
            src={chuck5}
            alt="chuck-modal"
          ></img> */}
          <hr className={styles.modalHr} />

          <div>
            <div className="slide-container">
              <Slideshow />
            </div>
            <h6>Hit me up with a new one!</h6>
            <button
              className={styles.modalBtn}
              onClick={() => dispatch(fetchChuck())}
            >
              💣
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chuck;
