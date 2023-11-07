import { DIV_NUMBER } from "./divTypes";

export const divNumber = inputNum => {
  return {
    type: DIV_NUMBER,
    payload: inputNum
  };
};
