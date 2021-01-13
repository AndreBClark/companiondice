import useAsyncStorage from './useAsyncStorage';
export function useHP() {
  const [hitpoints, setHitpoints] = useAsyncStorage('currentHP', 0);
  const [maxHP, setMaxHP] = useAsyncStorage('maxHP', 0);
  const modifyHP = mod => {
    setHitpoints(Number(hitpoints + mod));
  };
  const longRest = () => {
    setHitpoints(Number(maxHP));
  };
  return { maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP, longRest };
}
