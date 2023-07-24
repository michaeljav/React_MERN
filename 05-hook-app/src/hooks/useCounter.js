import { useState } from 'react';

export const useCounter = (initialvalue = 10) => {
  const [counter, setCounter] = useState(initialvalue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = (value) => {
    // if (counter === 0) return;
    setCounter(counter - value);
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
