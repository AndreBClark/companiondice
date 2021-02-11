import { Platform } from 'react-native';
import Constants, { AppOwnership } from 'expo-constants';
import * as Linking from 'expo-linking';
import { getColor } from '@/tailwind';
import { DarkTheme } from 'react-native-paper';

export const isWeb = Platform.OS === 'web';
export const isStandalone = Constants.appOwnership === AppOwnership.Standalone;

export const LinkingUrls = {
  prefixes: [Linking.makeUrl(isStandalone ? '' : '/')],
};

const EldritchBlast = { // eslint-disable-line no-unused-vars
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // error: string,
    // onSurface: string,
    // onBackground: string,
    // placeholder: string,
    // backdrop: string,
    // notification: string,
    accent: getColor('green-300'),
    primary: getColor('green-400'),
    text: getColor('green-400'),
    card: getColor('purple-500'),
    border: getColor('purple-500'),
    background: getColor('purple-700'),
    surface: getColor('purple-500'),
    disabled: getColor('green-900'),
  },
};
const AmberSilver = { // eslint-disable-line no-unused-vars
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    accent: getColor('gray-400'),
    primary: getColor('yellow-400'),
    text: getColor('gray-900'),
    card: getColor('yellow-400'),
    border: getColor('yellow-300'),
    background: getColor('gray-700'),
    surface: getColor('yellow-500'),
    disabled: getColor('gray-900'),
  },
};
// eslint-disable-next-line
const SteviesCarrots = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    accent: getColor('green-400'),
    primary: getColor('yellow-400'),
    text: getColor('yellow-400'),
    card: getColor('green-600'),
    border: getColor('green-600'),
    background: getColor('green-700'),
    surface: getColor('yellow-500'),
    disabled: getColor('green-900'),
  },
};

export const theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    // ...SteviesCarrots.colors
    ...EldritchBlast.colors,
  },
};

export const springConfig = {
  mass: 16,
  tension: 280,
  friction: 120,
};
