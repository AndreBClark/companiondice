import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-native-paper';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter'; // eslint-disable-line camelcase
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { DiceSidesProvider } from 'hooks/useDiceSides';
import { tailwind } from '@/tailwind';
import Header from '@/title';
import TabNav from '@/menu/tabNavigation';
import { theme } from '@/Constants';

const tw = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    ...tailwind('relative justify-between w-full h-full overflow-hidden'),
  },
});

export default function App() {
  const [isReady, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular, // eslint-disable-line camelcase
    Inter_700Bold, // eslint-disable-line camelcase
  });

  const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

  async function loadIconfonts() {
    const fontAssets = cacheFonts([
      MaterialCommunityIcons.font,
    ]);
    await Promise.all([...fontAssets]);
  }

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadIconfonts}
        onFinish={() => setReady(true)}
        onError={console.warn} // eslint-disable-line no-console
      />
    );
  }

  return (
    <Provider theme={theme}>
      <View style={tw.container}>
        <Header />
        <DiceSidesProvider>
          <TabNav />
        </DiceSidesProvider>
      </View>
      <StatusBar />
    </Provider>
  );
}
