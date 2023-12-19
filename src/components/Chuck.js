import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import chuck_uzi from "../images/chuck_uzi.png";
import styles from "../components/styles.module.css";
import { fetchChuck } from "../features/chuckSlice";

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
          >
            chucknorris.io
          </a>
          . <br /> If you dare!
        </h6>
        <hr className={styles.modalHr} />
        <div>
          {chuck.loading && (
            <div>
              <h6>Loading...</h6>
            </div>
          )}
          {!chuck.loading && chuck.error ? (
            <div>Error: {chuck.error}</div>
          ) : null}
          {!chuck.loading && chuck.value.length ? (
            <h6 key={chuck.id}>{chuck.value}</h6>
          ) : null}
          <img
            style={{ position: "relative", width: 150, top: 5 }}
            src={chuck_uzi}
            alt="chuck-modal"
          ></img>
          <hr className={styles.modalHr} />
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
  );
};

export default Chuck;
