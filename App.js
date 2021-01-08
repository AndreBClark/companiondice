import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind, getColor } from './tailwind'
import Header from './src/components/title'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={tailwind('text-green-400 font-sans')}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: getColor('deeppurple-800'),
  },
});