import { ADD_NUM } from "./addTypes";

const initalState = {
    num: 0 
}

const addNumReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_NUM:
        return {
          ...state,
          num: state.num - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addNumReducer
  