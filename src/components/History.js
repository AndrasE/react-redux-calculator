import React from "react";
import store from "../app/store";
import { useSelector } from "react-redux";
import { selectHistory } from "../features/historySlice";
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
        {history}
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
