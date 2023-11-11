import { ADD_NUMBER } from "./addTypes";

export const addNumber = inputNum => {
  return {
    type: ADD_NUMBER,
    payload: inputNum
  };
};
