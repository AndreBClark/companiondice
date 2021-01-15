import React from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind'
import TailwindText from '../TailwindText';

const SvgWrapper = props => {
  return(
    <View style={[props.style, tw.svgWrapper]}>
      {props.children}
    </View>
  )
}

const AnimatedView = animated(SvgWrapper);

const Stats = props => {
  const { result, rollDice, isActive } = useRoll();

  const Spin = useSpring({
    transform: isActive ? 'rotate(300deg)' : 'rotate(0turn)',
    border: 'red solid 3px'
  });
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
    ...tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`),
    transform: 'rotate(0deg)',
    transition: 'all 1s'
  }
});

export default Stats;
