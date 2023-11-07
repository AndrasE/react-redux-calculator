import { ADD_NUMBER } from "./divTypes";

export const addNumber = inputNum => {
  return {
    type: ADD_NUMBER,
    payload: inputNum
  };
};
