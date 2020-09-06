import useLocalStorage from './useLocalStorage';
import { useState } from 'preact/hooks';
export const generateRandomInt = (min, max) => {
  let array = new Uint32Array(1);
  crypto.getRandomValues(array);
  let getFloatingPoint = array[0] / Math.pow(2, 32);
  return Math.ceil(getFloatingPoint * (max - min)) + min;
};
export const useRoll = () => {
  const [sides, setSides] = useState(20);
  const [result, setResult] = useState(20);
  const [amount, setAmount] = useState(1);
  const [oneOrLess, setOneOrLess] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [isActive, setActive] = useState(false);
  const ticks = 30;
  const randomArray = [];
  const rollDice = () => {
    setActive(true);
    for (let i = 0; i < ticks; i++) {
      randomArray.unshift(generateRandomInt(amount, amount * sides));
    }
    requestAnimationFrame(cycleNumbers);
  };
  const cycleNumbers = () => {
    requestAnimationFrame(() => {
      if (randomArray.length !== 1) {
        setResult(randomArray.shift());
        requestAnimationFrame(cycleNumbers);
      }
      cancelAnimationFrame(cycleNumbers);
      setActive(false);
    });
  };

  setOneOrLess(amount <= 1);
  setReachedLimit(amount >= 40);

  return {
    amount,
    setAmount,
    oneOrLess,
    reachedLimit,
    sides,
    setSides,
    result,
    setResult,
    isActive,
    rollDice,
    generateRandomInt,
  };
}
