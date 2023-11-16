import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    value: 0,
  },
  reducers: {
    operator: (state, action) => {
      state.value *= action.payload;
      state.history = action.payload;
    },
  },
});

export const { operator} =
  userInputSlice.actions;

export const selectUserInput = (state) => state.userInput.value;

export default userInputSlice.reducer;
