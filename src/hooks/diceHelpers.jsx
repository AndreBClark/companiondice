import useLocalStorage from './useLocalStorage';
import { useState } from 'preact/hooks'

export function useRoll() {
  const [sides, setSides] = useLocalStorage('Dice sides', Number(sides || 20));
  const [result, setResult] = useLocalStorage('Dice Result', Number(result || 20));
  return { sides, setSides, result, setResult };
}

export function useAmount() {
  const [amount, setAmount] = useLocalStorage('Dice Amount', Number(amount || 1));
  const [oneOrLess, setOneOrLess] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false);

  amount <= 1 ? setOneOrLess(true) : setOneOrLess(false);
  amount >= 40 ? setReachedLimit(true) : setReachedLimit(false);
  return { amount, setAmount, oneOrLess, reachedLimit };
}