import { ADD_NUMBER } from "./addTypes";

const initalState = {
    initalNumber: 0 
}

const addReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_NUMBER:
        return {
          ...state,
          initalNumber: state.initalNumber - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addReducer
  