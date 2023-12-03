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
import styles from "./CalcStyles.module.css";

export function Counter() {
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [operator, setOperator] = useState("");
  const [equalOp, setEqualOp] = useState("");
  // const history = [];

  // const createButtons = () => {
  const buttons = [
    "⇋",
    "↤",
    "c",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  //   for (let i=1; i< 19; i++) {

  //   }
  // }

  function handleNumClick(e) {
    if (equalOp) {
      //if last op was equal set firstInput to the new calue and start over everything
      setEqualOp("");
      setFirstInput((prevState) => prevState + e.target.value);
      setSecondInput("");
      dispatch(currentUserNum(String(e.target.value)));
    } else if (firstInput === "" && e.target.value === "0") {
      //if 0 already exist do nothinng, prevent 0000005 firstInputs
    } else if (!operator) {
      //as no operator, we are setting firstInput and currentUserNum
      setFirstInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else if (operator && secondInput === "0" && e.target.value === "0") {
      //if 0 already exist do nothinng, prevent 0000005 secondInputs
    } else if (operator && secondInput === "0" && e.target.value !== "0") {
      //is secondInput set 0 only add to this additional numbers if its not
      //zero and change it over 0 -> 5 this to prevent 05 inputs
      setSecondInput(e.target.value);
      dispatch(currentUserNum(String(e.target.value)));
    } else {
      //setting secondInput and currentUserNum
      setSecondInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  function handleOpClick(e) {
    if (equalOp) {
      //if last op equal set the outcome of the op to be the firstinput value
      //this to continuity after equal ops 1 + 3 = 4 ==to==> 4
      setEqualOp("");
      const state = store.getState();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(String(state.counter.value)));
      setFirstInput(() => state.counter.value);
      setOperator(e.target.value);
    } else if (!firstInput) {
      //if user clicks first the operation buttons w/ input setting firstInput to be 0
      setFirstInput("0");
      setOperator(e.target.value);
    } else if (operator && !secondInput) {
      //if user choose operator but want to chose other one, leaving secondinput empty
      //this for changing ops such: + ==to==> -
      setSecondInput("");
      setOperator(e.target.value);
    } else if (!operator && firstInput.slice(-1) === ".") {
      //user setting firstInput but leaving it to finish with a decimal point this will remove
      //the decimalpoint before sending it to switcher preventing 5. + changing it to 5 +
      const state = store.getState();
      const removeDecimalPoint = state.userInput.value.slice(0, -1);
      setFirstInput(removeDecimalPoint);
      dispatch(setInitalNumber(Number(removeDecimalPoint)));
      dispatch(currentUserNum(Number(removeDecimalPoint)));
      setOperator(e.target.value);
      console.log(firstInput);
    } else if (operator && secondInput.slice(-1) === ".") {
      //user setting secondInput but leaving it to finish with a decimal point this will remove
      //the decimalpoint before sending it to switcher preventing 5. + changing it to 5 +
      const state = store.getState();
      const removeDecimalPoint = state.userInput.value.slice(0, -1);
      setSecondInput(removeDecimalPoint);
      switchOperatorOnOpClick(e);
    } else if (!operator) {
      //no operator, setting firstInput without conditions
      dispatch(setInitalNumber(Number(firstInput)));
      setOperator(e.target.value);
      // } else if (operator && secondInput.slice(-1) === ".") {
      //   console.log("333333");
      //   const state = store.getState();
      //   const removeDecimalPoint = state.userInput.value.slice(0, -1);
      //   setSecondInput(removeDecimalPoint);
      //   dispatch(setInitalNumber(Number(removeDecimalPoint)));
      //   dispatch(currentUserNum(Number(removeDecimalPoint)));
      //   setOperator(e.target.value);
      //   switchOperatorOnOpClick(e);
      //   console.log(secondInput);
    } else {
      //calling calculation via switchOperator as both firstInput, operator and secondInput exists
      switchOperatorOnOpClick(e);
    }
  }

  function switchOperatorOnOpClick(e) {
    //switchOp dispatch actions and calling updateStore function which reseting the secondInput
    //and making the operation outcome to be the new firstInput and currentNumber as well
    //capturing the new operator 1+3=4 ==to==? 4 - (or any operator)
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
    console.log(secondInput);
  }

  function switchOperatorEqualClick() {
    //operator without calling on updateStore, as no operator will be set its without capturing + or -
    //after finishing the operation setting the outcome of the operation to be the new firstInput
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
  }

  function updateStore(e) {
    //after finishing calc called by switchOperator, its setting the outcome to be the new firstInput and
    //capturing the new operator while reseting the secondInput
    const state = store.getState();
    setFirstInput(state.counter.value);
    setSecondInput("");
    dispatch(currentUserNum(String(state.counter.value)));
    setOperator(e.target.value);
  }

  function handleEqualClick() {
    if (!equalOp && firstInput && !secondInput) {
      //if equalOp wasnt called before but user not adding second input calling the function, will
      //do nothing just remove the operator, this to prever 8 = 8, just looks stupido
      setEqualOp("");
      setOperator("");
    } else if (!equalOp && secondInput.slice(-1) === ".") {
      //if equalOp called but user leaving secondInput it to finish with a decimal point this will remove
      //the decimalpoint before sending it to switcher preventing 5. + changing it to 5 +
      const state = store.getState();
      const removeDecimalPoint = state.userInput.value.slice(0, -1);
      setSecondInput(removeDecimalPoint);
      dispatch(currentUserNum(Number(removeDecimalPoint)));
      switchOperatorEqualClick();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(String(state.counter.value)));
      setFirstInput("");
      setEqualOp(firstInput + " " + operator + " " + removeDecimalPoint + " =");
      setOperator("");
      setSecondInput("");
    } else if (equalOp) {
      //equalOp was called already, prevent silly
    } else {
      //both firstInput, operator and secondInput exist, calling on switchOperator to do the changes,
      //while saving its outcome in setEqualOp and resetinng both the operator and secondInput
      switchOperatorEqualClick();
      const state = store.getState();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(String(state.counter.value)));
      setFirstInput("");
      setEqualOp(firstInput + " " + operator + " " + secondInput + " =");
      setOperator("");
      setSecondInput("");
    }
  }

  function handleResetClick() {
    //reseting everything on C click
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
      //if equalOp exist reset
      setEqualOp("");
    } else if (firstInput && !secondInput && !operator) {
      //if we are setting firstInput it removing last number on back click
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setFirstInput(state.userInput.value.slice(0, -1));
    } else if (secondInput !== "") {
      //if we are setting secondInput it removing last number on back click
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setSecondInput(state.userInput.value.slice(0, -1));
    }
  }

  function handleDecimalClick(e) {
    if (!firstInput && !operator) {
      //if no firstInput added but decimal clicked it sets firstInput to be 0 and add decimalpoint 0.
      setFirstInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
    } else if (firstInput && !operator && !firstInput.includes(".")) {
      //if firstInput added and NO decimal point added yet set it to be 5.
      setFirstInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else if (!secondInput && operator) {
      //if no secondInput added but decimal clicked it sets secondInput to be 0 and add decimalpoint 0.
      setSecondInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
    } else if (secondInput && operator && !secondInput.includes(".")) {
      //if secondInput added and NO decimal point added yet set it to be 5.
      setSecondInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  return (
    <div className={styles.calcContainer} >
      <div className={styles.screensContainer} >
      <h5>{equalOp || firstInput} {!equalOp && operator}</h5>
      <h2> {userInput || 0}</h2>
      </div>
      <hr />
      <div >
        {buttons.map((button) => {
          if (
            button === "+" ||
            button === "-" ||
            button === "x" ||
            button === "-" ||
            button === "÷"
          ) {
            return (
              <button key={button} value={button} onClick={handleOpClick}>
                {button}
              </button>
            );
          } else if (button === "=") {
            return (
              <button
                className={styles.doublebutton}
                key={button}
                value={button}
                onClick={handleEqualClick}
              >
                {button}
              </button>
            );
          } else if (button === "c") {
            return (
              <button key={button} value={button} onClick={handleResetClick}>
                {button}
              </button>
            );
          } else if (button === "↤") {
            return (
              <button key={button} value={button} onClick={handleBackClick}>
                {button}
              </button>
            );
          } else if (button === ".") {
            return (
              <button key={button} value={button} onClick={handleDecimalClick}>
                {button}
              </button>
            );
          } else {
            return (
              <button key={button} value={button} onClick={handleNumClick}>
                {button}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
