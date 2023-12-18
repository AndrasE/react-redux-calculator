import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  value: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchChuck = createAsyncThunk("chuck/fetchChuck", () => {
  return axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => response.data.value);
});

const chuckSlice = createSlice({
  name: "chuck",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchChuck.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchChuck.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = "";
    });
    builder.addCase(fetchChuck.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

export default chuckSlice.reducer;
