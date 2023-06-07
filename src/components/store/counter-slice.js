import { createSlice } from "@reduxjs/toolkit";

const initialStatevalues = {
  count: 0,
};

const counterSlice = createSlice({
  name: "count",
  initialState: initialStatevalues,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => { 
      state.count -= action.payload;
    },
  },
});

export const uiActions = counterSlice.actions;

export default counterSlice.reducer;
