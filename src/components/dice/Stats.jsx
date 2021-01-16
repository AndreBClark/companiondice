import React from 'react'
import { useSpring, animated, config } from 'react-spring/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind'
import TailwindText from '../TailwindText';
import SpinTransform from './dicebox'
const SvgWrapper = props => 
  <View
    style={[tw.svgWrapper, props.style]}>{props.children}</View>

const AnimatedView = animated(SvgWrapper);

const Stats = props => {
  const { result, rollDice, isActive } = useRoll();
  console.log({isActive})
  const Spin = useSpring(SpinTransform);
  const handleDiceRoll = () => rollDice(6, 18);
  return (
    <Pressable
      onPress={handleDiceRoll}
      style={tw.dice}>
      <TailwindText 
        style={tw.number} 
        size="7xl" 
        color="purple-800">
        {result}
      </TailwindText>
      <AnimatedView
        style={isActive && Spin}>
        {props.children}
      </AnimatedView>
    </Pressable>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(`flex font-bold mb-3 relative mx-auto w-64 h-64 items-center justify-center relative`),
  number: tailwind(`bg-green-400 rounded-full justify-center m-auto items-center z-10`),
  svgWrapper: {
    ...tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center transition-all`),
    transform: 'rotate(360deg)'
  } 
});

export default Stats;
