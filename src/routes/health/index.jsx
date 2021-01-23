import React from 'react';
import { HPButton } from '../../components/Button';
import { useHP } from '../../hooks/useHP';
import { View, TextInput, StyleSheet } from 'react-native';
import { tailwind } from '../../components/tailwind';
import TailwindText from '../../components/TailwindText';
import { theme } from '../../components/Constants';

const HealthTracker = ({route}) => {
  
  const { hitpoints = 0, maxHP = 0, setHitpoints, setMaxHP, modifyHP, longRest } = useHP();
  const onchangeHP = () => {
    val => setHitpoints(Number(val));
  };
  const onchangeMaxHP = () => {
    val => setMaxHP(Number(val));
  };
  const hitpointString = hitpoints.toString();
  const maxHPString = maxHP.toString();

  return (
    <View style={tw.container}>
      <View style={tw.col}>
        <HPButton onPress={longRest} Label="Long Rest" />
      </View>
      <View>
        <TailwindText size="4xl" weight="bold">
          Heal
        </TailwindText>
        <View style={tw.col}>
          <HPButton onPress={() => modifyHP(1)} Label="+" />
          <HPButton onPress={() => modifyHP(5)} Label="5" />
          <HPButton onPress={() => modifyHP(10)} Label="10" />
        </View>
      </View>
      <View style={[tailwind(`flex flex-row my-4`), { gap: '1rem' }]}>
        <View style={tw.inputContainer}>
          <TailwindText size="2xl">Current</TailwindText>
          <TextInput
            selectionColor={theme.colors.primary}
            keyboardType="numeric"
            keyboardAppearance="dark"
            textContentType="none"
            textAlign="center"
            maxLength={3}
            onChangeText={onchangeHP}
            value={hitpointString}
            style={tw.input}
          />
        </View>
        <TailwindText style={tw.slash} size="7xl" weight="black">
          /
        </TailwindText>
        <View style={tw.inputContainer}>
          <TailwindText size="2xl">Max</TailwindText>
          <TextInput
            selectionColor={theme.colors.primary}
            keyboardType="numeric"
            keyboardAppearance="dark"
            textContentType="none"
            textAlign="center"
            maxLength={3}
            onChangeText={onchangeMaxHP}
            value={maxHPString}
            style={tw.input}
          />
        </View>
      </View>
      <View>
        <TailwindText size="4xl" weight="bold">
          Damage
        </TailwindText>
        <View style={tw.col}>
          <HPButton onPress={() => modifyHP(-1)} Label="-" />
          <HPButton onPress={() => modifyHP(-5)} Label="5" />
          <HPButton onPress={() => modifyHP(-10)} Label="10" />
        </View>
      </View>
    </View>
  );
};
const tw = StyleSheet.create({
  container: tailwind(
    `max-w-2xl text-center mx-auto mt-8 text-indigo-600 justify-center h-full w-full`
  ),
  inputContainer: tailwind(
    `flex flex-1 flex-col justify-center font-black bg-purple-700 rounded-lg`
  ),
  input: tailwind(`w-full text-6xl text-center text-green-400`),
  slash: tailwind(`flex-col justify-center pt-4 flex-1`),
  col: tailwind(`flex flex-row mx-2`),
});
export default HealthTracker;
