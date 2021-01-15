import React from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Pressable, StyleSheet, View, Animated } from 'react-native';
import { useRoll } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind'
import TailwindText from '../TailwindText';
const AnimatedView = animated(View);
const Dicebox = props => {
  const { result, rollDice, isActive } = useRoll();

  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? 'rotate(-90deg)' : 'rotate(0turn)',
  });
  const handleDiceRoll = () => rollDice(6, 18);
  return (
    <Pressable
      onPress={handleDiceRoll}
      style={[Spin, tw.dice]}>
      <TailwindText 
        style={tw.number} 
        size="7xl" 
        color="purple-800">
        {result}
      </TailwindText>
      <AnimatedView 
        style={[tw.svgWrapper]}>
        {props.children}
      </AnimatedView>
    </Pressable>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(`flex font-bold mb-3 relative mx-auto w-84 h-full items-center justify-center`),
  number: tailwind(`mx-auto bg-green-400 rounded-full justify-center m-auto items-center z-10`),
  svgWrapper: tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`)
})

export default Dicebox;
