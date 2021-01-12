import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './src/components/tailwind'
import Header from './src/components/title'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import TabNav from './src/components/menu/tabNavigation';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Header />
      <TabNav />
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: tailwind(`relative justify-between w-full h-full bg-purple-800 overflow-hidden`),
  paragraph: tailwind('text-green-400 items-center')
});