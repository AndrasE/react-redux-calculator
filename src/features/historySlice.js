import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    value: [],
  },
  reducers: {
    newHistoryEntry: (state, action) => {
      state.value.push(action.payload);
    },
    updateHistoryEntry: (state, action) => {
      const lastEntry = state.value[state.value.length-1]
      state.value.splice(state.value.length-1, 1, lastEntry + action.payload)
      console.log(lastEntry);
    }
  },
});

export const { newHistoryEntry, updateHistoryEntry } = historySlice.actions;

export const selectHistory = (state) => state.history.value;

export default historySlice.reducer;
