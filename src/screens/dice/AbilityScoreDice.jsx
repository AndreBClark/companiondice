import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { tailwind } from '@/tailwind';
import TailwindText from '@/TailwindText';
import { D6 } from '@/dice/Svg';
import Dice from '@/dice';
import { theme } from '@/Constants';
import { Switch } from 'react-native-paper';
import PropTypes from 'prop-types';

const tw = StyleSheet.create({
  container: tailwind('justify-around items-center my-auto'),
  body: tailwind('my-20 max-w-sm mx-auto px-4'),
  row: tailwind('flex-row justify-around flex-wrap h-2/5 mx-4'),
  graceRules: tailwind('justify-around py-2 flex-row'),
  smallDice: tailwind('h-24 w-24 m-8'),
});

const SmallDice = ({
  isGraceEnabled,
}) => (
  <Dice
    min={isGraceEnabled ? 6 : 3}
    max={18}
    smallDice={tw.smallDice}
  >
    <D6 />
  </Dice>
);

SmallDice.propTypes = {
  isGraceEnabled: PropTypes.bool,
};
SmallDice.defaultProps = {
  isGraceEnabled: true,
};

const AbilityScoreDice = () => {
  const [isGraceEnabled, ToggleGraceRules] = useState(true);
  function handleChange() {
    ToggleGraceRules(!isGraceEnabled);
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <View style={tw.container}>
        <View style={tw.row}>
          {numbers.map((number) => (
            <SmallDice
              key={number.toString()}
              isGraceEnabled={isGraceEnabled}
            />
          ))}
        </View>
      </View>
      <View style={tw.body}>
        <TailwindText align="left">
          Roll your ability scores with 3d6 method
        </TailwindText>
        <View style={tw.graceRules}>
          <TailwindText align="left">
            Reroll Ones
            <TailwindText color={theme.colors.error} weight="bold">
              {isGraceEnabled ? ' enabled' : ' disabled'}
            </TailwindText>
          </TailwindText>
          <Switch
            color={theme.colors.primary}
            trackColor={theme.colors.background}
            onValueChange={handleChange}
            value={isGraceEnabled}
          />
        </View>
      </View>
    </>
  );
};

export default AbilityScoreDice;
