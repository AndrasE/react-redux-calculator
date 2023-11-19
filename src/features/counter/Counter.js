import React, { useState } from "react";
import store from "../../app/store";

import { useSelector, useDispatch } from "react-redux";
import {
  setInitalState,
  addition,
  decrementation,
  multiplication,
  subtraction,
  selectCount,
} from "./counterSlice";
import { currentUserNum, selectUserInput } from "../userInput/userInputSlice";
import styles from "./Counter.module.css";



export function Counter() {
  const count = useSelector(selectCount);
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();
  const [lastOpterator, setLastOperator] = useState("");
  const [calcAmount, setCalcAmount] = useState("");
  const [newInput, setNewInput] = useState("")
  const [lastInput, setLastInput] = useState("")


 

  function handleAddClick(e) {
    if (calcAmount){
      dispatch(addition(Number(calcAmount)));
      // dispatch(currentUserNum(calcAmount))
      const state = store.getState();
      setLastOperator(e.target.value);
      setLastInput(state.counter.value)
      console.log(lastInput);
      setCalcAmount("");
      // setNewInput("")
      dispatch(currentUserNum(String(state.counter.value)))
    }
  }

  function handleNumClick(e) {
    // setNewInput((prevState) => [prevState + e.target.value]);
    setCalcAmount((prevState) => [prevState + e.target.value]);
    // const currentNum = calcAmount + e.target.value;
    dispatch(currentUserNum(String(calcAmount + e.target.value)))
 }

  // function handleDecrClick(e) {
  //   if (calcAmount) {
  //     const lastOp = e.target.value;
  //     dispatch(decrementation(Number(calcAmount)));
  //     dispatch(currentUserNum(String(calcAmount)));
  //     setLastOperator(lastOp);
  //     // setCalcArray((prevState) => [prevState + "+"]);
  //     setCalcAmount("");
  //   }
  // }

  // function handleSubClick(e) {
  //   const lastOp = calcAmount + e.target.value;
  //   dispatch(subtraction(Number(calcAmount)));
  //   dispatch(currentUserNum(String(lastOp)));
  //   setLastOperator(lastOp);
  //   // setCalcArray((prevState) => [prevState + "+"]);
  //   setCalcAmount("");
  // }


  return (
    <div className={styles.row}>
      {/* <h4>{calcArray || 0} </h4> */}
      <h2>
        {lastInput} {lastOpterator} {newInput}
      </h2>
  
      {/* <h3> {count}  </h3> */}
      <h4> {userInput}</h4>
  
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
              value="/"
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
              s
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
  )}