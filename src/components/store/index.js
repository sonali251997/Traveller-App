import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
// };

const store = configureStore({
  reducer: {count:counterSlice}
});
export default store;
