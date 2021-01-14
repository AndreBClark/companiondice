import React from 'react'
import { useSpring, animated, config } from 'react-spring/native';
import { useRoll } from '../../hooks/diceHelpers';
import { Pressable, StyleSheet, View } from 'react-native';
import { tailwind } from '../tailwind'
import TailwindText from '../TailwindText';
const AnimatedView = animated(View);
const Dicebox = props => {
  const { result, rollDice, isActive } = useRoll();

  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? 'rotate(-30deg)' : 'rotate(0turn)',
  });
  function handleDiceRoll() {
    return rollDice(6, 18);
  }
  return (
    <Pressable
      onPress={handleDiceRoll}
      style={tw.dice}>
      <TailwindText 
        style={tw.number} 
        size="7xl" 
        color="purple-800">{
        result}
      </TailwindText>
      <AnimatedView 
        style={[tw.svgWrapper, Spin]}>
        {props.children}
      </AnimatedView>
    </Pressable>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(`flex font-bold mb-3 relative mx-auto w-84 h-full items-center justify-content`),
  number: tailwind(`relative mx-auto bg-green-400 rounded-full justify-center items-center`),
  svgWrapper: tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`)
})

export default Dicebox;
