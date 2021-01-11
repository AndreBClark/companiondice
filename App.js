import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './src/components/tailwind'
import Header from './src/components/title'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.paragraph}>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: tailwind(`content-center flex-auto items-center bg-purple-800`),
  paragraph: tailwind('text-green-400')
});