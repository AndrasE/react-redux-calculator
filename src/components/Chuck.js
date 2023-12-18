import React from "react";
import chuck_modal from "../images/chuck_modal.png";
import styles from "../components/styles.module.css";



const Chuck = ({ showChuck, toggleShowChuck }) => {
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
              <img
                src={chuck_modal}
                style={{ width: 200 }}
                alt="chuck-modal"
              ></img>
           
     
      </div>
    </div>
  );
}

export default Chuck;
