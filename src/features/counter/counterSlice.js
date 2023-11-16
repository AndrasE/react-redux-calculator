import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
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

export const { addition, decrementation, multiplication, subtraction } = counterSlice.actions



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
