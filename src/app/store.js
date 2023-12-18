import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import userInputReducer from "../features/userInputSlice"
import historyReducer from "../features/historySlice"
import chuckReducer from '../features/chuckSlice';



export default configureStore({
  reducer: {
    counter: counterReducer,
    userInput: userInputReducer,
    history: historyReducer,
    chuck: chuckReducer
  },
});
