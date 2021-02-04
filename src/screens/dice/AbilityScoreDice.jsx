import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { tailwind } from '@/tailwind';
import TailwindText from '@/TailwindText';
import { D6 } from '@/Svg';
import Dice from '@/dice'

const SmallDice = props => {
  return(
    <Dice 
      min={props.isGraceEnabled ? 6 : 3} 
      max={18} 
      smallDice={tw.smallDice}>
      <D6 />
    </Dice>
  )
}
const AbilityScoreDice = () => {
  const [isGraceEnabled, ToggleGraceRules] = useState(true);
  function handleChange() {
    ToggleGraceRules(!isGraceEnabled)
  }
  return (
    <>
      <View style={tailwind('my-auto')}>
        <View style={tw.row}>
          <SmallDice isGraceEnabled={isGraceEnabled} />
          <SmallDice isGraceEnabled={isGraceEnabled} />
          <SmallDice isGraceEnabled={isGraceEnabled} />
        </View>
        <View style={tw.row}>
          <SmallDice isGraceEnabled={isGraceEnabled} />
          <SmallDice isGraceEnabled={isGraceEnabled} />
          <SmallDice isGraceEnabled={isGraceEnabled} />
        </View>
      </View>
      <View style={tw.body}>
        <TailwindText align="left">
          Roll your ability scores with 3d6 method
        </TailwindText>
        <View style={tw.graceRules}>
          <TailwindText align="left"> Reroll Ones
            <TailwindText color="green-100" weight="bold">
              {isGraceEnabled ? ' enabled' : ' disabled'}
            </TailwindText>
          </TailwindText>
          <Switch
            size='large'
            onValueChange={handleChange}
            value={isGraceEnabled}
          />
        </View>
      </View>
    </>
  )
}

const tw = StyleSheet.create({
  container: tailwind('justify-center items-center my-auto'),
  body: tailwind(`my-20 max-w-sm mx-auto`),
  row: tailwind('flex-row justify-around'),
  graceRules: tailwind('justify-between py-2 flex-row'),
  smallDice: tailwind('h-24 w-24 max-w-xs')
});


export default AbilityScoreDice;