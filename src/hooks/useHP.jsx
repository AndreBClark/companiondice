import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState } from 'react';

function useMaxHP() {
  const { getItem, setItem } = useAsyncStorage('Max HP');
  const [maxHPValue, setMaxHPValue ] = useState(0);

  const getMaxHP = async () => {
    const item = await getItem();
    setMaxHPValue(item);
    return Number(item);
  };

  const setMaxHP = async newValue => {
    await setItem(newValue);
    setMaxHPValue(newValue);
  };

  return {
    setMaxHP,
    getMaxHP,
    maxHPValue
  }
}
function useCurrentHP() {
  const { getItem, setItem } = useAsyncStorage('Current HP');
  const [ HPValue, setHPValue ] = useState(0);
  const { maxHPValue, getMaxHP } = useMaxHP();
  const maxHP = Number(maxHPValue);
  const gmaxHP = getMaxHP();

  const getCurrentHP = async () => {
    const item = await getItem();
    setHPValue(item);
    return Number(item);
  };

  const setCurrentHP = async newValue => {
    await setItem(newValue);
    setHPValue(newValue.toString());
  };
  const updateHP = async (operand = 1, operator = 1) => {
    const currentHP = await getItem();
    const newHP = Number(currentHP) + operand * operator;
    const isPositive = newHP >= 0;
    const underLimit = newHP <= maxHP;
    let absoluteValue = isPositive ? newHP : 0;
    let validatedValue = underLimit ? absoluteValue : maxHP;
    setCurrentHP(validatedValue.toString())
  }
  const resetHP = () => {
    setCurrentHP((maxHP || gmaxHP).toString());
  }

  return {
    setCurrentHP,
    getCurrentHP,
    HPValue,
    updateHP,
    resetHP
  }
}



export default function useHP() {
  return {
    ...useCurrentHP(),
    ...useMaxHP(),
  }
}
