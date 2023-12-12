import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    value: [],
  },
  reducers: {
    updateHistory: (state, action) => {
      state.value + action.payload;
    },
  },
});

export const { updateHistory } = historySlice.actions;

export const selectUserInput = (state) => state.userInput.value;

export default historySlice.reducer;
