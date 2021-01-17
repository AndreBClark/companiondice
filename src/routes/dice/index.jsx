import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Controls from '../../components/Controls';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { D4, D6, D8, D10, D12, D20, D100 } from '../../components/Svg';
import { Dicebox } from '../../components/dice/dicebox';
import { tailwind } from '../../components/tailwind';

const Dice = props => {
  const { setSides, sides } = useRoll();
  const [amount, updateAmount] = useState(1);
  const increment = () => updateAmount(amount + 1);
  const decrement = () => updateAmount(amount - 1);
  const reset = () => updateAmount(1);

  return (
    <diceContext.Provider value={{ amount, increment, decrement, reset }}>
      <View style={tw.dicebox}>
        <Dicebox sides={20}>
          <D20 />
        </Dicebox>
      </View>
    </diceContext.Provider>
  );
};

export default Dice;

const tw = StyleSheet.create({
  dicebox: tailwind(`justify-center h-full`),
});
