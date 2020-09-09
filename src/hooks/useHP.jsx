import useLocalStorage from './useLocalStorage';
export function useHP() {
  const [hitpoints, setHitpoints] = useLocalStorage('currentHP', 0);
  const [maxHP, setMaxHP] = useLocalStorage('maxHP', maxHP);
  const modifyHP = mod => {
    setHitpoints(hitpoints + mod);
  };
  const longRest = () => {
    setHitpoints(maxHP);
  };
  return { maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP, longRest };
}
