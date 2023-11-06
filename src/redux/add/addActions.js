import { ADD_NUM } from "./addTypes";

export const addNum =( number = 1) => {
  return {
    type: ADD_NUM,
    payload: number
  };
};
