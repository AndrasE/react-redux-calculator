import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import userInputReducer from "../features/userInputSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    userInput: userInputReducer
  },
});
