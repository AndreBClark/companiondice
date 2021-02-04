import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-native-paper';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font'

import { DiceSidesProvider } from 'hooks/useDiceSides';
import { tailwind } from '@/tailwind'
import Header from '@/title'
import TabNav from '@/menu/tabNavigation';
import { theme } from '@/Constants';

export default function App() {
  const [isReady, setReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

  async function loadIconfonts() {
    const fontAssets = cacheFonts([
      MaterialCommunityIcons.font,
    ]);
    await Promise.all([...fontAssets, ])
  }
  
  if (!isReady || !fontsLoaded) {
    return(
      <AppLoading
        startAsync={loadIconfonts}
        onFinish={() => setReady(true)}
        onError={console.warn} />
    )
  }

  return (
    <View style={tw.container}>
      <Header />
      <Provider theme={theme} >
        <DiceSidesProvider>
          <TabNav />
        </DiceSidesProvider>
      </Provider>
      <StatusBar style="dark" />
    </View>
  );
}
const tw = StyleSheet.create({
  container: tailwind(`relative justify-between w-full h-full bg-purple-800 overflow-hidden`),
  paragraph: tailwind('text-green-400 items-center')
});