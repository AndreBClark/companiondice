import { useState, useContext, createContext } from 'react';

export const diceContext = createContext({
  amount: 1,
});

export const useRoll = () => {
  const { amount } = useContext(diceContext);
  const [sides, setSides] = useState(20);
  const [result, setResult] = useState(20);
  const [oneOrLess, setOneOrLess] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [isActive, setActive] = useState(false);
  const ticks = 30,
    randomArray = [];
  const rollDice = (min = 1, max = 20) => {
    setActive(true);
    for (let i = 0; i < ticks; i++) {
      randomArray.unshift(generateRandomInt(min, max));
    }
    requestAnimationFrame(cycleNumbers);
  };
  const cycleNumbers = () => {
    requestAnimationFrame(() => {
      if (randomArray.length == 1) {
        cancelAnimationFrame(cycleNumbers);
        setActive(false);
      } else {
        requestAnimationFrame(cycleNumbers);
        setResult(randomArray.shift());
      }
    });
  };

  // setOneOrLess(amount <= 1);
  // setReachedLimit(amount >= 40);

  return {
    oneOrLess,
    reachedLimit,
    sides,
    setSides,
    result,
    setResult,
    isActive,
    rollDice,
  };
};

const generateRandomInt = (min = 1, max = 20) => {
  let array = new Uint32Array(1);
  crypto.getRandomValues(array);
  let getFloatingPoint = array[0] / Math.pow(2, 32);
  return Math.ceil(getFloatingPoint * (max - min)) + min;
};
