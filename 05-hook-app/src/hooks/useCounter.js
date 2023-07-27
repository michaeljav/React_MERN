import { useState } from 'react';

export const useCounter = (initialvalue = 10) => {
  const [counter, setCounter] = useState(initialvalue);

  const increment = (value = 1) => {
    setCounter((prev) => prev + value);
  };

  const decrement = (value = 1) => {
    // if (counter === 0) return;
    setCounter((prev) => prev - value);
  };

  const reset = () => {
    setCounter(initialvalue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
