import { ADD_NUMBER } from "./addTypes";

export const addNumber = ( number = 1) => {
  return {
    type: ADD_NUMBER,
    payload: number
  };
};
