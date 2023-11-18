import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  decrementation,
  multiplication,
  subtraction,
  selectCount,
} from "./counterSlice";
import {currentUserNum, selectUserInput} from "../userInput/userInputSlice";
import styles from "./Counter.module.css";


export function Counter() {
  const count = useSelector(selectCount);
  const userInput = useSelector(selectUserInput)
  const dispatch = useDispatch();
  const [lastOpterator, setLastOperator] = useState("");
  const [calcAmount, setCalcAmount] = useState("");

  function handleAddClick(e) {
    if (calcAmount) {
    const lastOp = calcAmount + e.target.value
    dispatch(addition(Number(calcAmount)));
    dispatch(currentUserNum(String(lastOp)));  
    setLastOperator(lastOp)
    setCalcAmount("")
  }
    // setCalcArray((prevState) => [prevState + "+"]);
   
  }
 
  function handleNumClick(e) {
    const currentNum = calcAmount + e.target.value
    dispatch(currentUserNum(String(currentNum)));  
    setCalcAmount(currentNum);
  }


  return (
    <div>
      <div className={styles.row}>
      {/* <h4>{calcArray || 0} </h4> */}
        <h4>{userInput}</h4>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        {/* <h3>{calcAmount || 0}</h3> */}
        
        {/* <button
          aria-label="Addition calc"
          onClick={() => dispatch(addition(Number(calcAmount) || 0))}
        >
          +
        </button> */}
        {/* <button
          aria-label="Decrement calc"
          onClick={() => dispatch(decrementation(Number(calcAmount) || 0))}
        >
          -
        </button> */}
        {/* <button
          aria-label="Multiplication calc"
          onClick={() => dispatch(multiplication(Number(calcAmount) || 0))}
        >
          *
        </button> */}

        <hr />
        <div>
          {/* 1st row */}
          {/* <div className="row">
            <button>S</button>
            <button>AC</button>
            <button>%</button>
            <button
              aria-label="Subtraction calc"
              onClick={() => dispatch(subtraction(Number(calcAmount) || 0))}
            >
              ÷
            </button>
          </div> */}
          {/* 2nd row  */}
          <div className="row">
            <button value="7" onClick={handleNumClick}>
              7
            </button>

            <button value="8" onClick={handleNumClick}>
              8
            </button>
            <button>9</button>
            <button
              aria-label="Multiplication calc"
              onClick={() => dispatch(multiplication(Number(calcAmount) || 0))}
            >
              s
            </button>
          </div>
          {/* 3rd row */}
          {/* <div className="row">
            <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 4)}
            >
              4
            </button>
            <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 5)}
            >
              5
            </button>
            <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 6)}
            >
              6
            </button>
            <button
              aria-label="Decrementation calc"
              onClick={() => dispatch(decrementation(Number(calcAmount) || 0))}
            >
              -
            </button>
          </div> */}
          {/* 4th row */}
          <div className="row">
            <button
            value="1"
              onClick={handleNumClick}
            >
              1
            </button>
            <button
            value="2"
              onClick={handleNumClick}
            >
              2
            </button>
            <button
              value="3"
              onClick={handleNumClick}
            >
              3
            </button> 
            <button aria-label="Addition calc" value= "+" onClick={handleAddClick}>
              +
            </button>
          </div>
          {/* last row */}
          {/* <div className="row">
            <button onClick="dis('0')">0</button>

            <button onClick="dis('.')">.</button>
            <button className={styles.doublebutton} onClick="solve()">
              =
            </button>
          </div> */}
        </div>
      </div>{" "}
    </div>
  );
}
