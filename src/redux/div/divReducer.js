import { ADD_NUMBER } from "./divTypes";

const initalState = {
    initalNumber: "1000"
}

const addReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_NUMBER:
        return {
          ...state,
          initalNumber: state.initalNumber + action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addReducer
  