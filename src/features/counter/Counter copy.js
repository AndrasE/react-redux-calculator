import React, { useState } from "react";
import store from "../../app/store";

import { useSelector, useDispatch } from "react-redux";
import {
  setInitalNumber,
  addition,
  decrementation,
  multiplication,
  subtraction,
  // selectCount,
} from "./counterSlice";
import { currentUserNum, selectUserInput } from "../userInput/userInputSlice";
import styles from "./Counter.module.css";

export function Counter() {
  // const count = useSelector(selectCount);
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();

  // const [firstInput, setFirstInput] = useState(true);
  const [newInput, setNewInput] = useState("");
  const [lastInput, setLastInput] = useState("");
  const [lastOpterator, setLastOperator] = useState("");
  const [calcAmount, setCalcAmount] = useState("");

  function handleAddClick(e) {
    if (!lastOpterator) {
      console.log("first");
      dispatch(setInitalNumber(Number(calcAmount)));
      setLastOperator(e.target.value);
    } else {
      console.log("asdsdaas");
      dispatch(addition(Number(calcAmount)));
      const state = store.getState();
      setLastInput(state.counter.value);
      setLastOperator(e.target.value);
      setCalcAmount("");
      dispatch(currentUserNum(String(state.counter.value)));
    }
  }

  function handleNumClick(e) {
    setCalcAmount((prevState) => [prevState + e.target.value]);
    dispatch(currentUserNum(String(calcAmount + e.target.value)));
    // dispatch(setInitalNumber(String(calcAmount + e.target.value)));
  }

  function handleDecrClick(e) {}

  function handleSubClick(e) {}

  return (
    <div style={{ "white-space": "pre-wrap" }}>
      {lastInput} {lastOpterator} {newInput}
      <h2> {userInput}</h2>
      <div className={styles.row}>
        <hr />
        <div>
          {/* 1st row */}
          <div className="row">
            <button>S</button>
            <button>AC</button>
            <button>%</button>
            <button
              aria-label="Subtraction calc"
              value="÷"
              onClick={handleSubClick}
            >
              ÷
            </button>
          </div>
          {/* 2nd row  */}
          <div className="row">
            <button value="7" onClick={handleNumClick}>
              7
            </button>

            <button value="8" onClick={handleNumClick}>
              8
            </button>
            <button value="9" onClick={handleNumClick}>
              9
            </button>
            <button
              aria-label="Multiplication calc"
              onClick={() => dispatch(multiplication(Number(calcAmount) || 0))}
            >
              x
            </button>
          </div>
          {/* 3rd row */}
          <div className="row">
            <button value="4" onClick={handleNumClick}>
              4
            </button>
            <button value="5" onClick={handleNumClick}>
              5
            </button>
            <button value="6" onClick={handleNumClick}>
              6
            </button>
            <button
              aria-label="Decrementation calc"
              value="-"
              onClick={handleDecrClick}
            >
              -
            </button>
          </div>
          {/* 4th row */}
          <div className="row">
            <button value="1" onClick={handleNumClick}>
              1
            </button>
            <button value="2" onClick={handleNumClick}>
              2
            </button>
            <button value="3" onClick={handleNumClick}>
              3
            </button>
            <button
              aria-label="Addition calc"
              value="+"
              onClick={handleAddClick}
            >
              +
            </button>
          </div>
          {/* last row */}
          <div className="row">
            <button value="0" onClick={handleNumClick}>
              0
            </button>
            <button onClick="dis('.')">.</button>
            <button className={styles.doublebutton} onClick="solve()">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
