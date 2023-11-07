import React, { useState } from 'react'
import { connect } from "react-redux";
import { addNumber } from '../redux';


function CalcContainer(props) {

  const [inputNum, setInputNum] = useState()

function setInputBox(e) {
setInputNum(e.target.value)
}

function handleAddClick() {
  if (inputNum != null)
  props.addNumber(inputNum)
}

  return (
    <div>
        <h1> New number {props.initalNumber}</h1>
        <input placeholder={0} type="number" onChange={setInputBox}></input>
        <button onClick={handleAddClick}>+</button>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
      initalNumber: state.add.initalNumber,
    };
  };

  const mapDispathToProps = (dispatch) => {
    return {
      addNumber: inputNum => dispatch(addNumber(inputNum)),
    };
  };

export default connect(mapStateToProps, mapDispathToProps)(CalcContainer);
