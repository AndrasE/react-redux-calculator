import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    value: ["asdasd"],
  },
  reducers: {
    updateHistory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateHistory } = historySlice.actions;

export const selectHistory = (state) => state.history.value;

export default historySlice.reducer;
