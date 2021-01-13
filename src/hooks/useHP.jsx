import useAsyncStorage from './useAsyncStorage';
export function useHP() {
  const [hitpoints, setHitpoints] = useAsyncStorage('currentHP', 0);
  const [maxHP, setMaxHP] = useAsyncStorage('maxHP', 0);
  const modifyHP = mod => {
    const newHP = Number(hitpoints + mod);
    const isBelowMax = newHP <= maxHP;
    const isPositive = newHP >= 0;
    const validatedValue = isBelowMax ? isPositive ? newHP : 0 : maxHP
    setHitpoints(validatedValue);
  };
  const longRest = () => {
    setHitpoints(Number(maxHP));
    setMaxHP(Number(maxHP))
  };
  return { maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP, longRest };
}
