import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRoll } from 'hooks/useRoll';
import { tailwind } from '@/tailwind';
import TailwindText from '@/TailwindText';
import { springConfig, theme } from '@/Constants';

const SpinnableView = animated(View);

const Dice = props => {
  const { rollDice, spins, result, isActive } = useRoll();
  const [isDone, setDone] = useState(false);
  const isStatsDice = props.max === 18;
  const handleDiceRoll = () => rollDice(props.min, props.max);
  const { Spin } = useSpring({
    Spin: spins,
    config: springConfig,
    onRest: () => setDone(isActive),
    onStart: () => setDone(isActive),
  })
  const SpinInterpolation = {
    transform: [{
      rotate: Spin.interpolate({
        output: [0, 360]
      }).interpolate(Spin => `${Spin}deg`)
    }]
  }
  const blur = useSpring({
    radius: isDone ? 2 : 30, 
    config: springConfig
  })
  const BlingEffect = {
    filter: blur.radius.interpolate(size => `drop-shadow(0 0 ${size}px ${theme.colors.primary})`)
  }
  return (
    <View style={tw.container}>
      <View style={tw.dicebox}>
        <Pressable
          onPress={handleDiceRoll}
          style={[tw.dice, props.smallDice && props.smallDice]}>
          <TailwindText
            style={tw.number} 
            size={isStatsDice ? "4xl" : "7xl"} 
            color={theme.colors.background}
            width={isStatsDice ? "12" : "44"}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {result}
          </TailwindText>
          <SpinnableView
            style={[
              tw.spinnableView,
              SpinInterpolation,
              BlingEffect,
            ]}>
            {props.children}
          </SpinnableView>
        </Pressable>
      </View>
    </View>
  );
};

const tw = StyleSheet.create({
  container: tailwind('justify-center items-center my-auto'),
  dice: tailwind(
    `max-w-md flex font-bold relative m-auto items-center justify-center relative h-64 w-64 z-0`
  ),
  number: {
    ...tailwind(`rounded-full justify-center m-auto items-center absolute justify-center z-10`),
  },
  spinnableView: tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`),
  dicebox: tailwind(`justify-center my-auto w-full max-w-xl mx-auto h-full`),
});


export default Dice;