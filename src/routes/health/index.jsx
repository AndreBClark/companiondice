import React from 'react'
import { HPButton } from '../../components/Button';
import { useHP } from '../../hooks/useHP';
import { View, TextInput, StyleSheet } from 'react-native'
import { tailwind } from '../../components/tailwind';
import BaseText from '../../components/BaseText';
import brandColor from '../../components/brandColor';
const HealthTracker = () => {
  const {
    hitpoints,
    setHitpoints,
    maxHP,
    setMaxHP,
    modifyHP,
    longRest,
  } = useHP();

  return (
    <View style={tw.container}>
      <HPButton onPress={longRest} Label="Long Rest" />
      <View>
        <BaseText>Heal</BaseText>
        <View style={tw.col}>
          <HPButton onPress={() => modifyHP(1)} Label="+" />
          <HPButton onPress={() => modifyHP(5)} Label="5" />
          <HPButton onPress={() => modifyHP(10)} Label="10" />
        </View>
      </View>
      <View className="grid grid-cols-3 col-gap-4 gap-4 mt-4">
        <View className="flex flex-col justify-center font-black bg-purple-700 rounded-lg">
          <BaseText className="text-2xl font-bold">Current</BaseText>
          <TextInput
            selectionColor={brandColor}
            keyboardType="numeric"
            keyboardAppearance="dark"
            textContentType="none"
            textAlign="center"
            placeholder="--"
            maxLength={3}
            onChangeText={setHitpoints}
            value={hitpoints}
            defaultValue={24}
            style={tw.input}
            />
        </View>
        <BaseText style={tw.slash}>/</BaseText>
        <View className="flex flex-col justify-center font-black bg-purple-700 rounded-lg">
          <BaseText className="text-2xl font-bold">Max</BaseText>
            <TextInput
              selectionColor={brandColor}
              keyboardType="numeric"
              keyboardAppearance="dark"
              textContentType="none"
              textAlign="center"
              placeholder="--"
              maxLength={3}
              onChangeText={setMaxHP}
              value={maxHP}
              style={tw.input}
            />
        </View>
      </View>
      <View>
        <BaseText>Damage</BaseText>
        <View className="grid grid-cols-3 gap-4 col-gap-4 ">
          <HPButton onPress={() => modifyHP(-1)} Label="-" />
          <HPButton onPress={() => modifyHP(-5)} Label="5" />
          <HPButton onPress={() => modifyHP(-10)} Label="10" />
        </View>
      </View>
    </View>
  );
};
const tw = StyleSheet.create({
  container: tailwind(`text-center mx-auto text-indigo-600 font-bold text-2xl`),
  input: tailwind(`w-full text-6xl text-center text-green-400`),
  slash: tailwind(`flex-col justify-center pt-4 text-8xl`),
  col: tailwind(`flex flex-initial`)

  
})
export default HealthTracker;
