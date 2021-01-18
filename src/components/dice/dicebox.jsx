import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import { isWeb } from '../Constants';
import { D6, D20 } from '../Svg';

const AnimatedView = animated(View);

export const Dice = props => {
  const { result, rollDice, isActive } = useRoll();
  const { amount } = useContext(diceContext);
  const handleDiceRoll = () => rollDice();

  return (
    <View style={tw.dicebox}>
      <Pressable onPress={handleDiceRoll} style={tw.dice}>
        <TailwindText style={tw.number} size="7xl" color="purple-800">
          {result}
        </TailwindText>
        <AnimatedView
          style={tw.svgWrapper}>
          <D20 size="100%" />
        </AnimatedView>
      </Pressable>
    </View>
  );
};

export const Stats = props => {
  const { result, rollDice, isActive } = useRoll();
  const handleDiceRoll = () => rollDice(6, 18);
  return (
    <View style={tw.dicebox}>
      <Pressable onPress={handleDiceRoll} style={tw.dice}>
        <TailwindText style={tw.number} size="7xl" color="purple-800">
          {result}
        </TailwindText>
        <AnimatedView
          style={tw.svgWrapper}>
          <D6 size="100%" />
        </AnimatedView>
      </Pressable>
    </View>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(
    `flex font-bold mb-3 relative m-auto w-64 h-64 items-center justify-center relative`
  ),
  number: tailwind(
    `bg-green-400 rounded-full justify-center m-auto items-center justify-center z-10`
  ),
  svgWrapper: tailwind(
    `w-full h-full absolute top-0 left-0 justify-center items-center ${isWeb ? 'transition-all' : ''}`
  ),
  dicebox: tailwind(`justify-center h-full`),
});

const SpinTransform = {
  from: {
    transform: {
      rotateX: '0deg',
    }
  },
  to: {
    transform: {
      rotateX: '30deg'
    }
  }

};