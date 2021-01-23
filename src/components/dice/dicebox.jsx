import React from 'react';
import { useSpring, animated } from 'react-spring/native';
import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { useDiceSides } from '@hooks/useDiceSides';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import { D6, D20 } from '../Svg';
import { springConfig } from '../Constants';
import Controls from '../Controls';


const SpinnableView = animated(View);

const DiceBox = props => {
  const { result, rollDice, spins, setAmount, amount } = useRoll();
  const window = useWindowDimensions();
  const deviceWidthPercentage = 0.5;
  const diceScale = {
    width: window.width * deviceWidthPercentage,
    height: window.height * deviceWidthPercentage,
  };
  const handleDiceRoll = () => rollDice(props.min, props.max);
  const { Spin } = useSpring({
    Spin: spins,
    config: springConfig,
  })
  const SpinInterpolation = {
    transform: [{ 
      rotate: Spin.interpolate({
        range: [0, 1],
        output: [0, 360]
      }).interpolate(Spin => `${Spin}deg`)
    }]
  }
  return (
    <View style={tw.dicebox}>
      <Pressable 
        onPress={handleDiceRoll} 
        style={[
          tw.dice,
          diceScale,
        ]}>
        <TailwindText style={tw.number} size="7xl" color="purple-800">
          {result}
        </TailwindText>
        <SpinnableView
          style={[
            tw.spinnableView,
            SpinInterpolation
          ]}>
          {props.children}
        </SpinnableView>
      </Pressable>
    </View>
  );
};

export const Dice = props => {
  const { sides, amount, setAmount } = useRoll();
  const [ useSidesState ] = useDiceSides();
  const sides = useSidesState.sides;
  return (
    <View style={tailwind(`my-auto`)}>
      <DiceBox min={amount} max={amount * sides}>
        <D20 />
      </DiceBox>
      <Controls amount={amount} setAmount={setAmount} sides={sides} />
    </View> 
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
      `max-w-md flex font-bold relative m-auto mb-16 items-center justify-center relative max-h-84`
    ),
  number: tailwind(
    `bg-green-400 rounded-full justify-center m-auto items-center absolute justify-center z-10`
  ),
  spinnableView: tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`),
  dicebox: tailwind(`justify-center w-full max-w-xl mx-auto`),
});
