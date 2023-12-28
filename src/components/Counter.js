import React, { useState } from "react";
import store from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { Textfit } from "react-textfit";
import {
  setInitalNumber,
  addition,
  decrementation,
  multiplication,
  subtraction,
} from "../features/counterSlice";
import { currentUserNum, selectUserInput } from "../features/userInputSlice";
import {
  newHistoryEntry,
  updateHistoryEntry,
  eraseHistoryEntries,
} from "../features/historySlice";
import styles from "../components/styles.module.css";

export function Counter(props) {
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [operator, setOperator] = useState("");
  const [equalOp, setEqualOp] = useState("");

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

  function handleNumClick(e) {
    props.playSound()

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
    props.playSound()

    if (equalOp) {
      //if last op equal set the outcome of the op to be the firstinput value
      //this to continuity after equal ops 1 + 3 = 4 ==to==> 4
      setEqualOp("");
      const state = store.getState();
      setFirstInput(state.counter.value);
      dispatch(currentUserNum(parseFloat(String(state.counter.value.toFixed(5)))));
      setFirstInput(() => parseFloat(String(state.counter.value.toFixed(5))));
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
        dispatch(newHistoryEntry(String(firstInput + " + " + secondInput)));
        dispatch(addition(Number(secondInput)));
        updateStore(e);
        break;
      }
      case "-": {
        dispatch(newHistoryEntry(String(firstInput + " - " + secondInput)));
        dispatch(decrementation(Number(secondInput)));
        updateStore(e);
        break;
      }
      case "x": {
        dispatch(newHistoryEntry(String(firstInput + " x " + secondInput)));
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
          dispatch(newHistoryEntry(String(firstInput + " ÷ " + secondInput)));
          dispatch(subtraction(Number(secondInput)));
          updateStore(e);
        }
        break;
      }
      default:
        break;
    }
  }

  function switchOperatorEqualClick() {
    //operator without calling on updateStore, as no operator will be set its without capturing + or -
    //after finishing the operation setting the outcome of the operation to be the new firstInput
    switch (operator) {
      case "+": {
        dispatch(newHistoryEntry(String(firstInput + " + " + secondInput)));
        dispatch(addition(Number(secondInput)));
        updateLastHistoryEntry();
        break;
      }
      case "-": {
        dispatch(newHistoryEntry(String(firstInput + " - " + secondInput)));
        dispatch(decrementation(Number(secondInput)));
        updateLastHistoryEntry();
        break;
      }
      case "x": {
        dispatch(newHistoryEntry(String(firstInput + " x " + secondInput)));
        dispatch(multiplication(Number(secondInput)));
        updateLastHistoryEntry();
        break;
      }
      case "÷": {
        if (secondInput === 0) {
          dispatch(newHistoryEntry(String(firstInput + " ÷ " + secondInput)));
          dispatch(currentUserNum(Number(firstInput)));
          setSecondInput("");
          updateLastHistoryEntry();
        } else {
          dispatch(newHistoryEntry(String(firstInput + " + " + secondInput)));
          dispatch(subtraction(Number(secondInput)));
          updateLastHistoryEntry();
        }
        break;
      }
      default:
        break;
    }
  }

  function updateLastHistoryEntry() {
    const state = store.getState();
    dispatch(updateHistoryEntry(String(" = " + parseFloat(state.counter.value.toFixed(5)))));
  }

  function updateStore(e) {
    //after finishing calc called by switchOperator, its setting the outcome to be the new firstInput and
    //capturing the new operator while reseting the secondInput
    const state = store.getState();
    setFirstInput(parseFloat(state.counter.value.toFixed(5)));
    setSecondInput("");
    dispatch(updateHistoryEntry(String(" = " + parseFloat(state.counter.value.toFixed(5)))));
    dispatch(currentUserNum(parseFloat(String(state.counter.value.toFixed(5)))));
    setOperator(e.target.value);
  }

  function handleEqualClick() {
    props.playSound()

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
      dispatch(currentUserNum(parseFloat(String(state.counter.value.toFixed(5)))));
      setFirstInput("");
      setEqualOp(firstInput + " " + operator + " " + secondInput + " =");
      setOperator("");
      setSecondInput("");
    }
  }

  function handleResetClick() {
    props.playSound()

    //reseting everything on C click
    setFirstInput("");
    setSecondInput("");
    setOperator("");
    dispatch(setInitalNumber(Number(0)));
    dispatch(currentUserNum(String("0")));
    setEqualOp("");
    dispatch(eraseHistoryEntries());
  }

  function handleBackClick() {
    props.playSound()

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
    props.playSound()

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

  function handleHistoryClick(){
    props.toggleShowHistory();    
    props.playSound()
  }

  return (
    <div>
      <div className={styles.calcContainer}>
        <div className={styles.screensContainer}>
          <div className={styles.screenOne}>
            <Textfit mode="single" max={24}>
              {equalOp || firstInput || "0"} {!equalOp && operator}
            </Textfit>
          </div>
          <div className={styles.screenTwo}>
            <Textfit mode="single" max={44}>
              {userInput || 0}
            </Textfit>
          </div>
        </div>
        <hr className={styles.calcHr} />
        <div className={styles.buttonsContainer}>
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
            } else if (button === "⇋") {
              return (
                <button key={button} onClick={handleHistoryClick}>
                  {button}
                </button>
              );
            } else if (button === ".") {
              return (
                <button
                  key={button}
                  value={button}
                  onClick={handleDecimalClick}
                >
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
    </div>
  );
}
