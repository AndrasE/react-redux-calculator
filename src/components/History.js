import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHistory } from "../features/historySlice";
import { eraseHistoryEntries } from "../features/historySlice";
import chuck_uzi from "../images/chuck_uzi.png";
import chuck_pissed from "../images/chuck_pissed.png";
import chuck_gif from "../images/chuck_gif.gif";
import styles from "../components/styles.module.css";

function HistoryGoCalculate() {
  return (
    <div>
      <h2>Chuck says </h2>
      <img
        src={chuck_uzi}
        style={{
          width: 150,
          marginTop: -10,
        }}
        alt="chuck-uzi"
      ></img>
      <h2>
        Go calculate
        <br />
        son!
      </h2>
    </div>
  );
}

function HistoryMap(props) {
  return (
    <div className={styles.history}>
      {props.history
        .slice(Math.max(props.history.length - 8, 0))
        .map((entry, index) => {
          return <p key={index}>{entry} </p>;
        })}
    </div>
  );
}

function HistoryDoMore() {
  return (
    <div>
      <h2>Chuck says</h2>
      <img
        style={{
          width: 80,
          marginTop: 9,
        }}
        src={chuck_pissed}
        alt="chuck_pissed"
      ></img>
      <h2>Do more! </h2>
    </div>
  );
}

function HistoryErase(props) {
  return (
    <div>
      <img
        style={{
          position: "relative",
          height: 60,
        }}
        src={chuck_gif}
        alt="chuck_gif"
      ></img>
      <h2>Delete history?</h2>
      <button
        className={styles.modalBtn}
        onClick={() => props.dispatch(eraseHistoryEntries())}
      >
        C
      </button>{" "}
    </div>
  );
}

const History = ({ showHistory, toggleShowHistory }) => {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

  if (!showHistory) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => toggleShowHistory()}>
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

        <h1>History</h1>
        {history.length ? (
          <h2>Your history so far:</h2>
        ) : (
          <div className={styles.history}>
            <h2>Your history will appear here.</h2>
          </div>
        )}
        {history.length ? (
          <HistoryMap history={history}></HistoryMap>
        ) : (
          <HistoryGoCalculate />
        )}
        {history.length <= 5 && history.length !== 0 ? <HistoryDoMore /> : null}
        {history.length > 5 ? <HistoryErase dispatch={dispatch} /> : null}
      </div>
    </div>
  );
};

export default History;
