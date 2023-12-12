import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import userInputReducer from "../features/userInputSlice"
import historyReducer from "../features/historySlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    userInput: userInputReducer,
    history: historyReducer
  },
});
