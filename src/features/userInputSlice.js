import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    value: 0,
  },
  reducers: {
    currentUserNum: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { currentUserNum } = userInputSlice.actions;

export const selectUserInput = (state) => state.userInput.value;

export default userInputSlice.reducer;
