import React from "react";
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
        {(history.length) ? 
       history.slice(Math.max(history.length - 16, 0)).map((entry, index) => {
        return <p key={index}>{entry} </p>
      })
        :    
        <div>
        <p>Your history will appear here</p>
        <p>Chuck says go calculate📱 son!</p>
        </div>
    }
      </div>
    </div>
  );
};

export default History;
