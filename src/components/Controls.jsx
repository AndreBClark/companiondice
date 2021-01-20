import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';
import { useRoll, diceContext } from '../hooks/diceHelpers';
import { tailwind } from './tailwind';
import TailwindText from './TailwindText';

const Controls = props => {
  const { amount, increment, decrement, reset } = useContext(diceContext);
  const { reachedLimit, oneOrLess } = useRoll();
  console.log('controls amount:', amount);
  return (
    <View style={tw.controls}>
      <View style={tw.row}>
        <View style={tw.buttonColumn}>
          <Button onPress={decrement} oneOrLess={oneOrLess} Label="-" />
        </View>
        <TailwindText style={tw.diceIndicator} weight="bold" size="5xl">
          {amount}d{sides}
        </TailwindText>
        <View style={tw.buttonColumn}>
          <Button onPress={increment} reachedLimit={reachedLimit} Label="+" />
        </View>
      </View>
      <View>
        <Button onPress={reset} Label="Reset" size="2xl" />
      </View>
    </View>
  );
};
const tw = StyleSheet.create({
  controls: tailwind(`px-4 w-full mx-auto max-w-2xl`),
  row: tailwind(`justify-between flex-row`),
  buttonColumn: tailwind(`w-1/5`),
  diceIndicator: tailwind(`w-3/5 pt-2`)
})
export default Controls;
