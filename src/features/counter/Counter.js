import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  decrementation,
  multiplication,
  subtraction,
  selectCount,
  selectHistory
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();
  const [calcArray, setCalcArray] = useState([]);
  const [calcAmount, setCalcAmount] = useState("");

  function add() {
    dispatch(addition(Number(calcAmount)));
    setCalcAmount("");
    setCalcArray((prevState) => [prevState + "+"]);
    console.log(calcArray.length);
  }

  function num(e) {
    const currentNum = e.target.value
    setCalcAmount(calcAmount + currentNum);
    setCalcArray((prevState) => [prevState + currentNum]);
    console.log(calcArray);
  }


  return (
    <div>
      <div className={styles.row}>
      <h4>{calcArray || 0} </h4>
      <h5>{history}</h5>
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
            <button value="7" onClick={num}>
              7
            </button>

            <button value="8" onClick={num}>
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
            {/* <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 1)}
            >
              1
            </button>
            <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 2)}
            >
              2
            </button>
            <button
              onClick={() => setCalcAmount((prevState) => prevState * 10 + 3)}
            >
              3
            </button> */}
            <button aria-label="Addition calc" onClick={add}>
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
