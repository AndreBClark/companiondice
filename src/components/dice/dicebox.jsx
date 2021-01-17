import React, { useContext } from 'react';
import { useSpring, animated, config } from 'react-spring/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import { isWeb } from '../Constants';
import { D6 } from '../Svg';

const SpinTransform = {
  transform: {
    rotateX: isActive ? '90deg': '0deg',
  },
};
const SvgWrapper = props => {
  return(
    <View style={[Spin, tw.svgWrapper]}>{props.children}</View>
  )
}

const AnimatedView = animated(SvgWrapper);

export const Dice = props => {
  const { result, rollDice, isActive, sides, setSides } = useRoll();
  const { amount } = useContext(diceContext);
  const handleDiceRoll = () => rollDice();

  const Spin = useSpring(SpinTransform);
  return (
    <Pressable onPress={handleDiceRoll} style={tw.dice}>
      <TailwindText style={tw.number} size="7xl" color="purple-800">
        {result}
      </TailwindText>
      <AnimatedView style={Sping}>{props.children}</AnimatedView>
    </Pressable>
  );
};

export const Stats = props => {
  const { result, rollDice, isActive } = useRoll();
  // console.log({ isActive })
  const Spin = useSpring(SpinTransform);
  const handleDiceRoll = () => rollDice(6, 18);
  return (
    <View style={tw.dicebox}>
      <Pressable onPress={handleDiceRoll} style={tw.dice}>
        <TailwindText style={tw.number} size="7xl" color="purple-800">
          {result}
        </TailwindText>
        <AnimatedView style={isActive && Spin}>
          <D6 />
        </AnimatedView>
      </Pressable>
    </View>
  );
};

const tw = StyleSheet.create({
  dice: tailwind(
    `flex font-bold mb-3 relative mx-auto w-64 h-64 items-center justify-center relative`
  ),
  number: tailwind(
    `bg-green-400 rounded-full justify-center m-auto items-center z-10`
  ),
  svgWrapper: tailwind(
    `w-full h-full absolute top-0 left-0 justify-center items-center ${
      isWeb ? 'transition-all' : ''
    }`
  ),
});
