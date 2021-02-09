import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoll } from '_?/useRoll';
import { Button } from '@/Button';
import { tailwind } from '@/tailwind';
import TailwindText from '@/TailwindText';

const Controls = props => {
  const { reachedLimit, oneOrLess, setReachedLimit,setOneOrLess } = useRoll();
  const incrementAmount = () => {
    props.setAmount(props.amount + 1)
  }
  const decrementAmount = () => {
    props.setAmount(props.amount - 1)
  }
  const resetAmount= () => {
    props.setAmount(1)
  }
  useEffect(()=> {
    setReachedLimit(props.amount >= 40);
    setOneOrLess(props.amount <= 1);
  }, [props.amount, props.sides])
  return (
    <View style={tw.controls}>
      <View style={tw.row}>
        <View style={tw.buttonColumn}>
          <Button 
            onPress={decrementAmount}
            oneOrLess={oneOrLess} Label="-" />
        </View>
        <TailwindText style={tw.diceIndicator} weight="bold" size="5xl">
          {props.amount}d{props.sides}
        </TailwindText>
        <View style={tw.buttonColumn}>
          <Button 
            onPress={incrementAmount}
            reachedLimit={reachedLimit} Label="+" />
        </View>
      </View>
      <View style={tw.row}>
        <Button 
          onPress={resetAmount} Label="Reset" size="2xl" />
      </View>
    </View>
  );
};
const tw = StyleSheet.create({
  controls: tailwind(`px-4 w-full mx-auto max-w-2xl mb-24`),
  row: tailwind(`justify-between flex-row`),
  buttonColumn: tailwind(`w-1/5`),
  diceIndicator: tailwind(`w-3/5 pt-2`)
})
export default Controls;
