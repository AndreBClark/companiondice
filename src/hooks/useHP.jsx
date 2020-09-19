import useLocalStorage from './useLocalStorage';
export function useHP() {
  const [hitpoints, setHitpoints] = useLocalStorage('currentHP', null);
  const [maxHP, setMaxHP] = useLocalStorage('maxHP', null);
  const modifyHP = mod => {
    setHitpoints(hitpoints + mod);
  };
  const longRest = () => {
    setHitpoints(maxHP);
  };
  return { maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP, longRest };
}
