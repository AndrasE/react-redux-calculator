import React from "react";
import styles from "../components/styles.module.css";

const History = ({ showHistory, toggleShowHistory }) => {
  if (!showHistory) return (null);
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <button
          className={styles.modalCloseBtn}
          onClick={() => toggleShowHistory()}
        >
          x
        </button>
        <h5>History</h5>
        <div className="modalContent">
          <p>asdas</p>
          <p>asdas</p>
          <p>asdas</p>
          <p>asdas</p>
        </div>
      </div>
    </div>
  );
};

export default History;
