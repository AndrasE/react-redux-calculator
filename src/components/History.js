import React from "react";
import { useSelector } from "react-redux";
import { selectHistory } from "../features/historySlice";
import chuck_modal from "../images/chuck_modal.png";
import styles from "../components/styles.module.css";

const History = ({ showHistory, toggleShowHistory }) => {
  const history = useSelector(selectHistory);

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
          <h6>Chuck says, do more! 👊</h6>
        ) : (
          <h6>your history will appear here</h6>
        )}
        <hr className={styles.modalHr} />

        {history.length ? (
          history
            .slice(Math.max(history.length - 10, 0))
            .map((entry, index) => {
              return <p key={index}>{entry} </p>;
            })
        ) : (
          <div className={styles.modalContent}>
            <h5 style={{ textDecoration: "none" }}>Chuck says </h5>
            <h6>
              Go calculate🖥 <br /> son!
            </h6>
            <img
              src={chuck_modal}
              style={{ width: 200 }}
              alt="chuck-modal"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
