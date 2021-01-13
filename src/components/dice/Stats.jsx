import React, { useContext } from 'react'
import { useSpring, animated, config } from 'react-spring/native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
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
      <AnimatedView 
        style={[tw.svgWrapper, Spin]}>
        {props.children}
      </AnimatedView>
      <TailwindText 
        style={tw.number} 
        size="7xl" 
        color="purple-800">{
        result}
      </TailwindText>
    </Pressable>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(`flex font-bold mb-3 relative mx-auto`),
  number: tailwind(`relative mx-auto bg-green-400 rounded-full`),
  svgWrapper: tailwind(`w-full h-full absolute top-0 left-0`)
})

export default Dicebox;
