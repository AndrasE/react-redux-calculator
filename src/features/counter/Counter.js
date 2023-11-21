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
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [firstOperator, setFirstOperator] = useState("");
  const [secondOperator, setSecondOperator] = useState("");
  // const [calcAmount, setCalcAmount] = useState("");

  function handleAddClick(e) {
    if (!firstOperator) {
      dispatch(setInitalNumber(Number(firstInput)));
      setFirstOperator(e.target.value);
    } else {
      setSecondOperator(e.target.value);
      dispatch(addition(Number(secondInput)));
      const state = store.getState();
      setFirstInput(state.counter.value);
      setSecondInput("");
      dispatch(currentUserNum(String(state.counter.value)));
      console.log(firstOperator);
    }
  }

  function handleNumClick(e) {
    if (!firstOperator) {
      setFirstInput((prevState) => [prevState + e.target.value]);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else {
      setSecondInput((prevState) => [prevState + e.target.value]);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }

    switch (firstOperator) {
      case "+":
        console.log("plus");
        break;
        case "-":
        console.log("minus");
        break;
      default:
        break;
    }
  }

  function handleDecrClick(e) {
    if (!firstOperator) {
      dispatch(setInitalNumber(Number(firstInput)));
      setFirstOperator(e.target.value);
    } else {
      setSecondOperator(e.target.value);
      dispatch(decrementation(Number(secondInput)));
      const state = store.getState();
      setFirstInput(state.counter.value);
      setSecondInput("");
      dispatch(currentUserNum(String(state.counter.value)));
    }
  }

  function handleSubClick(e) {}
  function handleMultClick(e) {}

  return (
    <div style={{ "white-space": "pre-wrap" }}>
      {firstInput} {firstOperator} {secondInput} {secondOperator}
      {/* {secondInput} */}
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
            <button aria-label="Multiplication calc" onClick={handleMultClick}>
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
