import { DIV_NUMBER } from "./divTypes";

const initalState = {
    initalNumber: 1000
}

const divReducer = (state = initalState, action) => {
    switch (action.type) {
      case DIV_NUMBER:
        return {
          ...state,
          initalNumber: state.initalNumber - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default divReducer
  