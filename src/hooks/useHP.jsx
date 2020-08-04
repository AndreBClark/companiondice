import useLocalStorage from './useLocalStorage'
export function useHP() {
    const [hitpoints, setHitpoints] = useLocalStorage('currentHP', hitpoints);
    const [maxHP, setMaxHP] = useLocalStorage('maxHP', maxHP);
    const modifyHP = (mod) => {
        setHitpoints(hitpoints + mod);
    }
    return {maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP};
}