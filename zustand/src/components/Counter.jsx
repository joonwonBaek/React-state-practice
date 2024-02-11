import React from "react";
import { useCounterStore } from "../store";

const Counter = () => {
  const { count, increment } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
    </div>
  );
};

export default Counter;
