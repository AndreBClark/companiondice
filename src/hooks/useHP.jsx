import useLocalStorage from './useLocalStorage'
export function useHP() {
    const [hitpoints, setHitpoints] = useLocalStorage('currentHP', hitpoints || 20);
    const [maxHP, setMaxHP] = useLocalStorage('maxHP', maxHP || 20);
    const modifyHP = (mod) => {
        setHitpoints(hitpoints + mod);
    }
    return {maxHP, setMaxHP, hitpoints, setHitpoints, modifyHP};
}