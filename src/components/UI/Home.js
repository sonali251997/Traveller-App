import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
   

  const incrementHandler = () => {
    dispatch({type:"increment"})
  }

  const decrementHandler = () => {
    dispatch({type: " decrement "})
  }
  const toggleCounter = () => {}


  return <main>
    <h1>Redux Counter</h1>
    <div>{counter}</div>
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
    <button onClick={toggleCounter}>counter</button>
  </main>
};

export default Home;
