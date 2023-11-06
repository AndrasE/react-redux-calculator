import React from 'react'
import { connect } from "react-redux";
import  {addNum} from "../redux"

function CalcContainer(props) {
  return (
    <div>
        <h1>{props.add}</h1>
        <button onClick={props.addNum}>+</button>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
      addNum: state.addNum.addNum,
    };
  };

  const mapDispathToProps = (dispatch) => {
    return {
      addNum: () => dispatch(addNum()),
    };
  };

export default connect(mapStateToProps, mapDispathToProps)(CalcContainer);
