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
    if (equalOp) {
      setEqualOp("");
      const state = store.getState();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(String(state.counter.value)));
      setFirstInput((prevState) =>  state.counter.value);
      setOperator(e.target.value);
    } else if (!firstInput) {
      console.log("2");
      setFirstInput("0");
      //is user first click operation w/ input first it sets firstInput to 0
      setOperator(e.target.value);
    } else if (operator && !secondInput) {
      //is user chose operator but want to chose other one, leaving secondinput empty as ""
      setSecondInput("");
      console.log("3");
      setOperator(e.target.value);
    } else if (!operator) {
      console.log("4");
      //user setting firstinput as no operator exists yet
      //but if user leaves number such as 6. will remove the decimalpoint before sending it to switcher
      // if (firstInput.slice(-1) === ".") {
      //   const state = store.getState();
      //   const removeDecimalPoint = state.userInput.value.slice(0, -1);
      //   setFirstInput(removeDecimalPoint);
      //   dispatch(currentUserNum(String(removeDecimalPoint)));
      //   setOperator(e.target.value);
      //   console.log("xx")
      // //  }else if (secondInput.slice(-1) === ".") {
      // } else {
      dispatch(setInitalNumber(Number(firstInput)));
      setOperator(e.target.value);
      console.log("x1");
      // }
    } else {
      //calling calcultion pass to switch, second (current) operation takes the first`s place after)
      switchOperator(e);
    }
  }

  function switchOperator(e) {
    switch (operator) {
      case "+": {
        dispatch(addition(Number(secondInput)));
        updateStore(e);
        break;
      }
      case "-": {
        dispatch(decrementation(Number(secondInput)));
        updateStore(e);
        break;
      }
      case "x": {
        dispatch(multiplication(Number(secondInput)));
        updateStore(e);
        break;
      }
      case "÷": {
        if (secondInput === 0) {
          setSecondInput("");
          setOperator(e.target.value);
          dispatch(currentUserNum(Number(firstInput)));
        } else {
          dispatch(subtraction(Number(secondInput)));
          updateStore(e);
        }
        break;
      }
      default:
        break;
    }
  }

  function updateStore(e) {
    const state = store.getState();
    setFirstInput(state.counter.value);
    setSecondInput("");
    dispatch(currentUserNum(String(state.counter.value)));
    setOperator(e.target.value);
  }

  function handleEqualClick() {
    if (!equalOp && firstInput && !secondInput) {
      // only firstInput no operation can be called
      setEqualOp("");
      setOperator("");
    } else if (equalOp) {
      // do nothing done the equal op already
    } else {
      switch (operator) {
        case "+": {
          dispatch(addition(Number(secondInput)));
          break;
        }
        case "-": {
          dispatch(decrementation(Number(secondInput)));
          break;
        }
        case "x": {
          dispatch(multiplication(Number(secondInput)));
          break;
        }
        case "÷": {
          if (secondInput === 0) {
            setSecondInput("");
            dispatch(currentUserNum(Number(firstInput)));
          } else {
            dispatch(subtraction(Number(secondInput)));
          }
          break;
        }
        default:
          break;
      }

      const state = store.getState();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(String(state.counter.value)));
      setFirstInput("");
      setEqualOp(firstInput + " " + operator + " " + secondInput + " =");
      setOperator("");
      
      setSecondInput("");
      // dispatch(setInitalNumber(Number(0)));
      // history.push(equalOp + " " + state.userInput.value)
      // console.log(history)
    }
  }

  function handleNumClick(e) {
    // console.log(firstInput, secondInput, operator, equalOp);
    if (equalOp) {
      setEqualOp("")
      setFirstInput((prevState) => prevState + e.target.value);
      setSecondInput("")
      dispatch(currentUserNum(String(e.target.value)));

  } else if (firstInput === "" && e.target.value === "0") {
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
    setFirstInput("");
    setSecondInput("");
    setOperator("");
    dispatch(setInitalNumber(Number(0)));
    dispatch(currentUserNum(String("0")));
    setEqualOp("");
  }

  function handleBackClick() {
    const state = store.getState();
    if (equalOp) {
      setEqualOp("");
    }
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

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {equalOp || firstInput} {!equalOp && operator}
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
