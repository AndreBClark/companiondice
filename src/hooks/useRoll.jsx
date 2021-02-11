import { useState } from 'react';
import * as Random from 'expo-random';

export default function useRoll() {
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [result, setResult] = useState(20);
  const [oneOrLess, setOneOrLess] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [isActive, setActive] = useState(false);
  const [spins, setSpins] = useState(0);
  const ticks = 30;
  const randomArray = [];

  function generateRandomInt(min = 1, max = 20) {
    const UInt8Array = Random.getRandomBytes(1);
    const getFloatingPoint = UInt8Array[0] / 2 ** 8;
    const RandomInt = Math.ceil(getFloatingPoint * (max - min)) + min;
    return RandomInt;
  }

  const cycleNumbers = () => {
    requestAnimationFrame(() => {
      if (randomArray.length === 1) {
        cancelAnimationFrame(cycleNumbers);
        setActive(false);
      } else {
        requestAnimationFrame(cycleNumbers);
        setResult(randomArray.shift());
      }
    });
  };

  const rollDice = (min = 1, max = 20) => {
    setActive(true);
    setSpins(spins + 1);
    for (let i = 0; i < ticks; i += 1) {
      randomArray.unshift(generateRandomInt(min, max));
    }
    requestAnimationFrame(cycleNumbers);
  };

  return {
    oneOrLess,
    reachedLimit,
    setReachedLimit,
    setOneOrLess,
    sides,
    amount,
    setAmount,
    setSides,
    result,
    setResult,
    isActive,
    spins,
    setSpins,
    rollDice,
  };
}
