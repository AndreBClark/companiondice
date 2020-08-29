import useLocalStorage from './useLocalStorage';


export function useRoll() {
  const [sides, setSides] = useLocalStorage('Dice sides', Number(sides || 20));
  const [result, setResult] = useLocalStorage('Dice Result', Number(result || 20));
  return { sides, setSides, result, setResult };
}