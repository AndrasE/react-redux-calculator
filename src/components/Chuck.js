import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import chuck_modal from "../images/chuck_modal.png";
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
        <h6>Make free api calls to chuck api. <br/> If you dare!</h6>
        <hr
              className={styles.modalHr}
            />
        <div>
          {chuck.loading && <div>Loading...</div>}
          {!chuck.loading && chuck.error ? (
            <div>Error: {chuck.error}</div>
          ) : null}
          {!chuck.loading && chuck.value.length ? (
            <ul>
              <h6 key={chuck.id}>{chuck.value}</h6>
            </ul>
          ) : null}
          <img src={chuck_modal} style={{ width: 200 }} alt="chuck-modal"></img>
        </div>
      </div>
    </div>
  );
};

export default Chuck;
