import React, { useState } from "react";
import store from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitalNumber,
  addition,
  decrementation,
  multiplication,
  subtraction,
} from "./counterSlice";
import { currentUserNum, selectUserInput } from "../userInput/userInputSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [firstOperator, setFirstOperator] = useState("");
  // const [secondOperator, setSecondOperator] = useState("");
  // 0 devide, backclick first input, decima

  function handleOpClick(e) {
    if (!firstInput) {
      setFirstInput("0");
      setFirstOperator(e.target.value);
    } else if (firstInput === "0.") {
      setFirstInput("0");
      dispatch(setInitalNumber(Number(0)));
      dispatch(currentUserNum(Number(0)));
      setFirstOperator(e.target.value);
    } else if (!secondInput) {
      setFirstOperator(e.target.value);
    } else {
      switchOperator(e);
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
  }

  function handleResetClick() {
    if (firstInput) {
      setFirstInput("");
      setSecondInput("");
      setFirstOperator("");
      // setSecondOperator("");
      dispatch(setInitalNumber(Number(0)));
      dispatch(currentUserNum(String(0)));
      console.log("23");
    }
  }

  function handleBackClick() {
    const state = store.getState();
    if (firstInput && !secondInput && !firstOperator) {
        dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
        setFirstInput(state.userInput.value.slice(0, -1));
        console.log("first");
      } else if (secondInput !== ""){
        console.log("sec");
        dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
        setSecondInput(state.userInput.value.slice(0, -1));
      }
    }
  

  function handleDecimalClick(e) {
    if (!firstInput && !firstInput.includes(".")) {
      console.log("1");
      setFirstInput(0 + ".");
      dispatch(currentUserNum(String(0 + e.target.value)));
      // } else if (firstInput === "0.") {
      //   setFirstInput("0")
    } else if (!firstOperator && !firstInput.includes(".")) {
      console.log("2");
      setFirstInput((prevState) => [prevState + e.target.value]);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else if (firstOperator && !secondInput) {
      console.log("3");
      setSecondInput(0 + ".");
      dispatch(currentUserNum(String(0 + e.target.value)));
    } else if (secondInput !== "" && !secondInput.includes(".")) {
      console.log("sdd");
    } else {
      console.log("4");
      setSecondInput((prevState) => [prevState + e.target.value]);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  function handleEqualClick() {
    console.log("aslkaslkaslkaskl");
  }

  function switchOperator(e) {
    switch (firstOperator) {
      case "+": {
        console.log("plus");
        dispatch(addition(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setFirstOperator(e.target.value);
        // setSecondOperator("");
        break;
      }
      case "-": {
        console.log("minus");
        dispatch(decrementation(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setFirstOperator(e.target.value);
        // setSecondOperator("");
        break;
      }
      case "x": {
        console.log("multiply");
        dispatch(multiplication(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setFirstOperator(e.target.value);
        // setSecondOperator("");
        break;
      }
      case "÷": {
        if (secondInput === "0") {
          console.log("fckl");
        } else {
          console.log("substract");
          dispatch(subtraction(Number(secondInput)));
          const state = store.getState();
          setFirstInput(state.counter.value);
          setSecondInput("");
          dispatch(currentUserNum(String(state.counter.value)));
          setFirstOperator(e.target.value);
          // setSecondOperator("");
        }
        break;
      }
      case "=": {
        console.log("substract");
        dispatch(subtraction(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setFirstOperator(e.target.value);
        // setSecondOperator("");
        break;
      }
      default:
        break;
    }
  }

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {firstInput} {firstOperator} {secondInput}
      <h2> {userInput || 0}</h2>
      <div className={styles.row}>
        <hr />
        <div>
          {/* 1st row */}
          <div className="row">
            <button>⇋</button>
            <button value="↤" onClick={handleBackClick}>
              ↤
            </button>
            <button value="c" onClick={handleResetClick}>
              c
            </button>
            <button
              aria-label="Subtraction calc"
              value="÷"
              onClick={handleOpClick}
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
              value="x"
              onClick={handleOpClick}
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
              onClick={handleOpClick}
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
              onClick={handleOpClick}
            >
              +
            </button>
          </div>
          {/* last row */}
          <div className="row">
            <button value="0" onClick={handleNumClick}>
              0
            </button>
            <button value={"."} onClick={handleDecimalClick}>
              .
            </button>
            <button
              className={styles.doublebutton}
              value="="
              onClick={handleEqualClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
