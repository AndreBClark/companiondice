import React from 'react'
import { HPButton } from '../../components/Button';
import { useHP } from '../../hooks/useHP';
import { View, TextInput, StyleSheet } from 'react-native'
import { tailwind } from '../../components/tailwind';
import TailwindText from '../../components/TailwindText';
import brandColor from '../../components/brandColor';



const HealthTracker = () => {
  const {
    hitpoints = 0,
    maxHP = 0,
    setHitpoints,
    setMaxHP,
    modifyHP,
    longRest,
  } = useHP();
  return (
        <View style={tw.container}>
          <View style={tw.col}>
            <HPButton onPress={longRest} Label="Long Rest" />
          </View>
          <View>
            <TailwindText size="4xl" weight="bold">Heal</TailwindText>
            <View style={tw.col}>
              <HPButton onPress={() => modifyHP(1)} Label="+" />
              <HPButton onPress={() => modifyHP(5)} Label="5" />
              <HPButton onPress={() => modifyHP(10)} Label="10" />
            </View>
          </View>
          <View style={[tailwind(`flex flex-row my-4`), {gap: '1rem'}]}>
            <View style={tw.inputContainer}>
              <TailwindText size="2xl">Current</TailwindText>
              <TextInput
                selectionColor={brandColor}
                keyboardType="numeric"
                keyboardAppearance="dark"
                textContentType="none"
                textAlign="center"
                placeholder="--"
                maxLength={3}
                onChangeText={val => setHitpoints(Number(val))}
                value={hitpoints}
                style={tw.input}
                />
            </View>
            <TailwindText style={tw.slash} size="7xl" weight="black">/</TailwindText>
            <View style={tw.inputContainer}>
              <TailwindText size="2xl">Max</TailwindText>
                <TextInput
                  selectionColor={brandColor}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  textContentType="none"
                  textAlign="center"
                  placeholder="--"
                  maxLength={3}
                  onChangeText={val => setMaxHP(Number(val))}
                  value={maxHP}
                  style={tw.input}
                />
            </View>
          </View>
          <View>
            <TailwindText size="4xl" weight="bold">Damage</TailwindText>
            <View style={tw.col}>
              <HPButton onPress={() => modifyHP(-1)} Label="-" />
              <HPButton onPress={() => modifyHP(-5)} Label="5" />
              <HPButton onPress={() => modifyHP(-10)} Label="10" />
            </View>
          </View>
        </View>
      //   )}
      // </Formik>
  );
};
const tw = StyleSheet.create({
  container: tailwind(`max-w-screen-sm text-center mx-auto mt-8 text-indigo-600 font-bold text-2xl`),
  inputContainer: tailwind(`flex flex-1 flex-col justify-center font-black bg-purple-700 rounded-lg`),
  input: tailwind(`w-full text-6xl text-center text-green-400`),
  slash: tailwind(`flex-col justify-center pt-4 flex-1`),
  col: {
    ...tailwind(`flex flex-row`),
    gap: '1rem'
  }
  
})
export default HealthTracker;
