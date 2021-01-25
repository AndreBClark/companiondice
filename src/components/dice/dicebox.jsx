import React from 'react';
import { useSpring, animated } from 'react-spring/native';
import { Pressable, StyleSheet, View, Switch, Text } from 'react-native';
import { useRoll } from '@hooks/useRoll';
import { useDiceSides } from '@hooks/useDiceSides';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import { D4, D6, D8, D10, D12, D20 } from '../Svg';
import { springConfig } from '../Constants';
import Controls from '../Controls';
import FabGroup from '../menu/fabGroup';


const SpinnableView = animated(View);

const DiceBox = props => {
  const { rollDice, spins, result, isActive, setResult } = useRoll();
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
    filter: blur.radius.interpolate(size => `drop-shadow(0 0 ${size}px #4fd1c5)`)
  }
  return (
    <View style={tw.container}>
      <View style={tw.dicebox}>
        <Pressable
          onPress={handleDiceRoll}
          style={[tw.dice, isStatsDice && tw.smallDice]}>
          <TailwindText
            style={tw.number} size={isStatsDice ? "4xl" : "7xl"} color="purple-800">
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

export const Dice = props => {
  const { amount, setAmount } = useRoll();
  const [ useSidesState ] = useDiceSides();
  const sides = useSidesState.sides;
  
  function DiceSwitch() {
    switch (sides) {
      case 4: return <D4 />;
      case 6: return <D6 />;
      case 8: return <D8 />;
      case 10: return <D10 />;
      case 12: return <D12 />;
      case 20: return <D20 />;
      default: throw new Error(`invalid Die ${sides} ${typeof sides} `);
    }
  }
  return (
    <>
      <View style={tailwind('justify-center items-center')}>
        <DiceBox min={amount} max={amount * sides}>
          {DiceSwitch()}
        </DiceBox>
        <Controls amount={amount} setAmount={setAmount} sides={sides} />
      </View>
      <FabGroup />
    </>
  );
};

export const Stats = () => (
  <DiceBox min={6} max={18}>
    <D6 />
  </DiceBox>
)

const tw = StyleSheet.create({
  dice: tailwind(
    `max-w-md flex font-bold relative m-auto items-center justify-center relative h-64 w-64`
  ),
  number: tailwind(
    `bg-green-500 rounded-full justify-center m-auto items-center absolute justify-center z-10`
  ),
  spinnableView: tailwind(`w-full h-full absolute top-0 left-0 justify-center items-center`),
  dicebox: tailwind(`justify-center my-auto w-full max-w-xl mx-auto h-full`),
});
