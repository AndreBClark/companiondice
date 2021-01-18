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
  const [spins, setSpins ] = useState(0)
  const ticks = 30,
    randomArray = [];
  const rollDice = (min = 1, max = 20) => {
    setActive(true);
    setSpins(spins + 1)
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
    amount,
    reachedLimit,
    sides,
    setSides,
    result,
    setResult,
    isActive,
    spins,
    setSpins,
    rollDice,
  };
};

const generateRandomInt = (min = 1, max = 20) => Math.ceil(Math.random() * (max - min)) + min;