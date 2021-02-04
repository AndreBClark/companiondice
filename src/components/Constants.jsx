import { Platform } from 'react-native';
import Constants, { AppOwnership } from 'expo-constants';
import * as Linking from 'expo-linking';
import { getColor } from '@/tailwind';
import { DefaultTheme } from 'react-native-paper';

export const isWeb = Platform.OS == 'web';
export const isStandalone = Constants.appOwnership === AppOwnership.Standalone;

export const LinkingUrls = {
  prefixes: [Linking.makeUrl(isStandalone ? '' : '/')],
};

export const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    accent: getColor('green-400'),
    primary: getColor('green-500'),
    text: getColor(`green-400`),
    card: getColor(`purple-500`),
    border: getColor(`purple-800`),
    background: getColor(`purple-700`),
    surface: getColor('purple-500')
  },
};
export const springConfig = {
  mass: 16,
  tension: 280,
  friction: 120
}