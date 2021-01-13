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
    <View className="text-center mx-auto text-indigo-600 font-bold w-2xl text-2xl">
      <View className="flex flex-col justify-around text-center w-full px-4 xl:px-0">
        <View>
          <HPButton onClick={longRest}>Long Rest</HPButton>
        </View>
        <View>
          <View>Heal</View>
          <View className="grid grid-cols-3 gap-4 col-gap-4">
            <HPButton onClick={() => modifyHP(1)}>+</HPButton>
            <HPButton onClick={() => modifyHP(5)}>5</HPButton>
            <HPButton onClick={() => modifyHP(10)}>10</HPButton>
          </View>
        </View>
        <View className="grid grid-cols-3 col-gap-4 gap-4 mt-4">
          <View className="flex flex-col justify-center font-black bg-purple-700 rounded-lg">
            <span className="text-2xl font-bold">Current</span>
            <NumericInput
              placeholder="--"
              value={hitpoints}
              onChange={setHitpoints}
              step={1}
              min={0}
              max={maxHP}
              className="w-full text-6xl text-center text-teal-400 bg-none xl:text-10xl"
              noStyle
              inputmode="numeric"
              snap
              strict
            />
          </View>
          <span className="flex-col justify-center pt-4 text-8xl xl:text-10xl">
            /
          </span>
          <View className="flex flex-col justify-center font-black bg-purple-700 rounded-lg">
            <span className="text-2xl font-bold">Max</span>
            <NumericInput
              placeholder="--"
              value={maxHP}
              step={1}
              min={0}
              max={999}
              onChange={setMaxHP}
              snap
              className="w-full text-6xl text-center text-indigo-600  bg-none xl:text-10xl"
              noStyle
              inputmode="numeric"
              strict
            />
          </View>
        </View>
        <View>
          <View>Damage</View>
          <View className="grid grid-cols-3 gap-4 col-gap-4 ">
            <HPButton onClick={() => modifyHP(-1)}>-</HPButton>
            <HPButton onClick={() => modifyHP(-5)}>5</HPButton>
            <HPButton onClick={() => modifyHP(-10)}>10</HPButton>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HealthTracker;
