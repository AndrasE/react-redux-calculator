import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    setInitalNumber: (state, action) => {
      state.value = action.payload
    },
    addition: (state, action) => {
      state.value += action.payload
    },
    decrementation: (state, action) => {
      state.value -= action.payload
    },
    multiplication: (state, action) => {
      state.value *= action.payload
    },
    subtraction: (state, action) => {
      state.value /= action.payload
    },
  },
})

export const { setInitalNumber, addition, decrementation, multiplication, subtraction } = counterSlice.actions


// export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
