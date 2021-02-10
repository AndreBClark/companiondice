import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HPButton } from '@/Button';
import useHP from 'hooks/useHP';
import TailwindText from '@/TailwindText'
import { tailwind } from '@/tailwind'
import { theme } from '@/Constants'
const HPInput = props => {
  return(
    <View style={tw.inputContainer}>
      <TailwindText size="2xl">{props.Label}</TailwindText>
        <TextInput
          {...props}
          selectionColor={theme.colors.primary}
          keyboardType="numeric"
          keyboardAppearance="dark"
          textContentType="none"
          textAlign="center"
          maxLength={3}
          style={tw.input}
        />
    </View>
  )
}

const HealButtonGroup = ({ operator = 1, update, Label = "Heal"}) => {
  const numbers = [1,5,10];
  const isPositive = operator === 1 ? '+' : '-';
  const buttonGroup = numbers.map(
    number =>
      <HPButton
        key={number}
        onPress={() => update(number, operator)}
        Label={`${isPositive+number}`}
      />
  )
  return (
    <View>
      <TailwindText size="4xl" weight="bold">
        {Label}
      </TailwindText>
      <View style={tw.row}>
        {buttonGroup}
      </View>
    </View>
  )
}
export default function HealthTracker() {
  const {
    setMaxHP,
    setCurrentHP,
    HPValue,
    maxHPValue,
    getMaxHP,
    getCurrentHP,
    updateHP,
    resetHP,
  } = useHP();
  useEffect(() => {
    getMaxHP();
    getCurrentHP();
  });
  const HPString = HPValue.toString();
  const maxHPString = maxHPValue.toString();
  return (
    <View
      style={tw.container}
    >
      <View style={tw.row}>
        <HPButton onPress={resetHP} Label="Long Rest" />
      </View>
      <HealButtonGroup update={updateHP} />
      <View style={tw.row}>
        <HPInput
          Label="Current"
          onChangeText={val => setCurrentHP(val)}
          onSubmitEditing={() => setCurrentHP(HPValue)}
          value={HPString}
        />
        <TailwindText style={tw.slash} size="7xl" weight="black">
          /
        </TailwindText>
        <HPInput
          Label="Max"
          onChangeText={val => setMaxHP(val)}
          onSubmitEditing={()=> setMaxHP(maxHPValue)}
          value={maxHPString}
        />
      </View>
      <HealButtonGroup operator={-1} update={updateHP} Label="Damage" />
    </View>
  );
}

const tw = StyleSheet.create({
  container: tailwind(
    `max-w-2xl text-center mx-auto mt-8 justify-center h-full w-full`
  ),
  inputContainer: {
    backgroundColor: theme.colors.card,
    ...tailwind(`flex flex-1 flex-col mx-4 justify-center font-black rounded-lg`),
  },
  input: {
    color: theme.colors.primary,
    ...tailwind(`w-full text-6xl text-center`),
  },
  slash: tailwind(`flex-col justify-center pt-4 flex-1`),
  row: tailwind(`flex flex-row mx-2 my-4`)
});