import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  decrementation,
  multiplication,
  subtraction,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [calcAmount, setCalcAmount] = useState("0");

  return (
    <div>
      <div className={styles.row}>
        {/* <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button> */}
        <span className={styles.value}>{count}</span>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={calcAmount}
          onChange={(e) => setCalcAmount(e.target.value)}
        />
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch(addition(Number(calcAmount) || 0))
          }
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch(decrementation(Number(calcAmount) || 0))
          }
        >
          -
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch(multiplication(Number(calcAmount) || 0))
          }
        >
          *
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch(subtraction(Number(calcAmount) || 0))
          }
        >
          /
        </button>
      </div>
    </div>
  );
}
