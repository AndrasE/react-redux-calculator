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
  const [operator, setOperator] = useState("");
  const [equalOp, setEqualOp] = useState("");
  const history = [];

  function handleOpClick(e) {

    // console.log(secondInput);
    if (!firstInput) {
      //is user first click operation w/ input first it sets firstInput to 0
      setFirstInput("1");
      setOperator(e.target.value);
    } else if (operator && !secondInput) {
      //is user chose operator but want to chose other one, leaving secondinput empty as ""
      setSecondInput("");
      setOperator(e.target.value);
      console.log("2");
    } else if (!operator) {
      //user setting firstinput as no operator exists yet
      //but if user leaves number such as 6. will remove the decimalpoint before sending it to switcher
      if (firstInput.slice(-1) === ".") {
        console.log("2.5");
        const state = store.getState();
        const removeDecimalPoint = state.userInput.value.slice(0, -1);
        setFirstInput(removeDecimalPoint);
        dispatch(currentUserNum(String(removeDecimalPoint)));
        setOperator(e.target.value);
      } else {
        console.log("3");
        dispatch(setInitalNumber(Number(firstInput)));
        setOperator(e.target.value);
      }
    } else {
      //calling calcultion pass to switch, second (current) operation takes the first`s place after)
      console.log("4");
      switchOperator(e);
    }
  }

  function switchOperator(e) {
    switch (operator) {
      case "+": {
        console.log("plus");
        dispatch(addition(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator("+");
        break;
      }
      case "-": {
        console.log("minus");
        dispatch(decrementation(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator("-");
        break;
      }
      case "x": {
        console.log("multiply");
        dispatch(multiplication(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator("x");
        break;
      }
      case "÷": {
        if (secondInput === 0) {
          setSecondInput("");
          setOperator(e.target.value);
          dispatch(currentUserNum(Number(firstInput)));
          console.log("zero devide!");
        } else {
          console.log("substract");
          dispatch(subtraction(Number(secondInput)));
          const state = store.getState();
          setFirstInput(state.counter.value);
          setSecondInput("");
          dispatch(currentUserNum(String(state.counter.value)));
          setOperator("÷");
        }
        break;
      }
      default:
        break;
    }
  }

  function handleNumClick(e) {
    if (firstInput === "" && e.target.value === "0") {
      //do nothing, prevent 0000005 firstInputs
    } else if (!operator) {
      // set firstinput and usernum
      setFirstInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else if (operator && secondInput === "0" && e.target.value === "0") {
      //do nothing prevent, 0000005 secondInputs
    } else if (operator && secondInput === "0" && e.target.value !== "0") {
      //is secondInput 0 only add to this additional numbers if its not zero and change it over 0 -> 5
      setSecondInput(e.target.value);
      dispatch(currentUserNum(String(e.target.value)));
    } else {
      //setting second input and usernum
      setSecondInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  function handleResetClick() {
    if (firstInput) {
      setFirstInput("");
      setSecondInput("");
      setOperator("");
      dispatch(setInitalNumber(Number(0)));
      dispatch(currentUserNum(String(0)));
      setEqualOp("")
    }
  }

  function handleBackClick() {
    const state = store.getState();
    if (firstInput && !secondInput && !operator) {
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setFirstInput(state.userInput.value.slice(0, -1));
    } else if (secondInput !== "") {
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setSecondInput(state.userInput.value.slice(0, -1));
    }
  }

  function handleDecimalClick(e) {
    if (!firstInput && !operator) {
      setFirstInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
    } else if (firstInput && !operator && !firstInput.includes(".")) {
      setFirstInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else if (!secondInput && operator) {
      setSecondInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
    } else if (secondInput && operator && !secondInput.includes(".")) {
      setSecondInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  function handleEqualClick() {
    switchOperator(operator);
    const state = store.getState();
    // state.userInput.value
    setEqualOp(firstInput + " " + operator + " " + secondInput + " =");
    setOperator("")
    history.push(equalOp + " " + state.userInput.value)
    console.log(history)
  }

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {equalOp || firstInput} {operator}
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
