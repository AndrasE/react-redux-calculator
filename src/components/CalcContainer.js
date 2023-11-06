import React from 'react'
import { connect } from "react-redux";
import { addNumber } from '../redux';


function CalcContainer(props) {
  return (
    <div>
        <h1>adsdasads {props.initalNumber}</h1>
        <button onClick={props.addNumber}>+</button>
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
      addNumber: () => dispatch(addNumber()),
    };
  };

export default connect(mapStateToProps, mapDispathToProps)(CalcContainer);
