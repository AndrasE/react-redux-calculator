import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userInputReducer from "../features/userInput/userInputSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    userInput: userInputReducer
  },
});
