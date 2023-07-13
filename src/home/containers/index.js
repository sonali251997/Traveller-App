import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../components/store/counter-slice";
import Nav from '../../components/UI/Navbar'

const Home = () => {
  const dispatch = useDispatch();
  const countQuantity = useSelector((state) => state.count.count);

  const incrementHandler = () => {
    dispatch(uiActions.increment());
  };

  const decrementHandler = () => {
    dispatch(uiActions.decrement());
  };
  const IncrementHandlerByFive = () => {
    dispatch(uiActions.incrementByAmount(5));
  };
  const decrementHandlerByFive = () => {
    dispatch(uiActions.decrementByAmount(5));
  };
  const toggleCounter = () => {};

  return (
    <main>
      <Nav/>
      <h1>Redux Counter</h1>
      <div>{countQuantity}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncrementHandlerByFive}>Increment</button>
        <button onClick={decrementHandlerByFive}>Decrement</button>
      </div>
      <button onClick={toggleCounter}>counter</button>
    </main>
  );
};

export default Home;
