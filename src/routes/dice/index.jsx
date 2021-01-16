import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import Dicebox from '../../components/dice/dicebox';
import Controls from '../../components/Controls';
import { useNavigation } from '@react-navigation/native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { D4, D6, D8, D10, D12, D20, D100 } from '../../components/Svg';
import RollStats from '../../components/dice/Stats';
import { tailwind } from '../../components/tailwind';
import { Router } from '@material-ui/icons';
const Dice = props => {
  const { setSides, sides } = useRoll();
  const [amount, updateAmount] = useState(1);
  const increment = () => updateAmount(amount + 1);
  const decrement = () => updateAmount(amount - 1);
  const reset = () => updateAmount(1);

  const navigation = useNavigation();
  return (
    <diceContext.Provider value={{ amount, increment, decrement, reset }}>
      <View style={tw.dicebox}>
        <Dicebox >
          {sides == 4 && <D4 />}
          {sides == 6 && <D6 />}
          {sides == 8 && <D8 />}
          {sides == 10 && <D10 />}
          {sides == 12 && <D12 />}
          {sides == 20 && <D20 />}
          {sides == 100 && <D100 />}
        </Dicebox> 
      </View>
    </diceContext.Provider>
  );
};

export default Dice;

const tw = StyleSheet.create({
  dicebox: tailwind(`justify-center h-full`)
})