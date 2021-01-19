import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './src/components/tailwind'
import Header from './src/components/title'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import TabNav from './src/components/menu/tabNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Font from 'expo-font'

export default function App() {
  const [isReady, setReady] = useState(false)
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
  }
  async function loadIconfonts() {
    const fontAssets = cacheFonts([MaterialCommunityIcons.font]);
    await Promise.all([...fontAssets])
  }
  if (!fontsLoaded) {
    if (!isReady) {
      return(
        <AppLoading
        startAsync={loadIconfonts}
        onFinish={() => setReady(true)}
        onError={console.warn} />
      )
    }
  }

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