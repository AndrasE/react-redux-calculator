import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHistory } from "../features/historySlice";
import { eraseHistoryEntries } from "../features/historySlice";
import chuck_uzi from "../images/chuck_uzi.png";
import chuck_pissed from "../images/chuck_pissed.png";
import chuck_gif from "../images/chuck_gif.gif";
import styles from "../components/styles.module.css";

const History = ({ showHistory, toggleShowHistory }) => {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

  if (!showHistory) return null;

  return (
    <div className={styles.overlay} onClick={() => toggleShowHistory()}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={() => toggleShowHistory()}
        >
          x
        </button>

        <h5>History</h5>
        {history.length ? (
          <div>
            <h6 style={{ marginBottom: 10 }}>Your history so far:</h6>
          </div>
        ) : (
          <h6>Your history will appear here.</h6>
        )}
        {history.length ? (
          history
            .slice(Math.max(history.length - 10, 0))
            .map((entry, index) => {
              return <p key={index}>{entry} </p>;
            })
        ) : (
          <div className={styles.modalContent}>
            <hr className={styles.modalHr} />
            <h6 style={{ marginBottom: 5 }}>Chuck says </h6>
            <img
              src={chuck_uzi}
              style={{ width: 150, marginTop: -10 }}
              alt="chuck-uzi"
            ></img>
            <h6>
              Go calculate
              <br />
              son!
            </h6>
          </div>
        )}
        {history.length <= 5 && history.length !== 0 ? (
          <div>
            <hr className={styles.modalHr} />
            <h6>
              Chuck says<span></span>
            </h6>
            <img
              style={{ width: 80, marginTop: 9 }}
              src={chuck_pissed}
              alt="chuck_pissed"
            ></img>
            <h6>Do more! </h6>
          </div>
        ) : null}
        {history.length > 5 ? (
          <div>
            <hr className={styles.modalHr} />
            <span style={{ height: 10 }}>
              <img
                style={{ position: "relative", height: 60 }}
                src={chuck_gif}
                alt="chuck_gif"
              ></img>
            </span>{" "}
            <h6>Delete history?</h6>
            <button
              className={styles.modalBtn}
              onClick={() => dispatch(eraseHistoryEntries())}
            >
              C
            </button>{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default History;
