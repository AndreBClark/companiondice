import React from 'react';
import { useSpring, animated, config } from 'react-spring/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import { D6, D20 } from '../Svg';

const SpinnableView = animated(View);

const DiceBox = props => {
  const { result, rollDice, spins } = useRoll();
  const handleDiceRoll = () => rollDice(props.min, props.max);
  const Spin = useSpring({
    transform: `rotateZ(${spins}turn)`,
    config: config.slow,
  });
  return (
    <View style={tw.dicebox}>
      <Pressable onPress={handleDiceRoll} style={tw.dice}>
        <TailwindText style={tw.number} size="7xl" color="purple-800">
          {result}
        </TailwindText>
        <SpinnableView
          style={[tw.spinnableView, Spin]}>
          {props.children}
        </SpinnableView>
      </Pressable>
    </View>
  );
};

export const Dice = props => {
  const { sides, amount } = useRoll();

  return (
    <DiceBox min={amount} max={amount * sides}>
      <D20 />
    </DiceBox>
  );
};

export const Stats = props => {
  return(
    <DiceBox min={6} max={18}>
      <D6 />
    </DiceBox>
  )
};

const tw = StyleSheet.create({
  dice: tailwind(
    `flex font-bold mb-3 relative m-auto w-64 h-64 items-center justify-center relative`
  ),
  number: tailwind(
    `bg-green-400 rounded-full justify-center m-auto items-center absolute justify-center z-10`
  ),
  spinnableView: tailwind(
    `w-full h-full absolute top-0 left-0 justify-center items-center`
  ),
  dicebox: tailwind(`justify-center h-full`),
});
