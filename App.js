import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind, getColor } from './tailwind'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={tailwind('text-green-400')}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: getColor('deeppurple-800')
  },
});