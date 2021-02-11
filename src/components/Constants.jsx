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
  colors: {
    primary: getColor('green-400'),
    accent: getColor('purple-300'),
    background: getColor('purple-700'),
    surface: getColor('purple-500'),
    error: getColor(''),
    onBackground: getColor('purple-900'),
    onSurface: getColor('purple-900'),
    text: getColor('green-300'),
    disabled: getColor('purple-200'),
    placeholder: getColor('green-400 opacity-50'),
    backdrop: getColor('purple-600 opacity-50'),
    notification: getColor('pink-100'),
    card: getColor('purple-500'),
    border: getColor('purple-500'),
  },
};
const AmberSilver = { // eslint-disable-line no-unused-vars
  colors: {
    primary: getColor('green-400'),
    accent: getColor('purple-300'),
    background: getColor('purple-700'),
    surface: getColor('purple-500'),
    error: getColor(''),
    onBackground: getColor('purple-900'),
    onSurface: getColor('purple-900'),
    text: getColor('green-300'),
    disabled: getColor('green-100'),
    placeholder: getColor('green-400 opacity-50'),
    backdrop: getColor('purple-600 opacity-50'),
    notification: getColor('pink-100'),
    card: getColor('purple-500'),
    border: getColor('purple-500'),
  },
};
// eslint-disable-next-line
const SteviesCarrots = {
  colors: {
    primary: getColor('yellow-400'),
    accent: getColor('green-300'),
    background: getColor('green-700'),
    surface: getColor('green-500'),
    error: getColor('red-400'),
    onBackground: getColor('green-900'),
    onSurface: getColor('green-900'),
    text: getColor('yellow-300'),
    disabled: getColor('yellow-100'),
    placeholder: getColor('yellow-400 opacity-50'),
    backdrop: getColor('green-600 opacity-50'),
    notification: getColor('pink-100'),
    card: getColor('green-500'),
    border: getColor('green-500'),
  },
};

export const theme = {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  roundness: 100,
  colors: {
    // ...SteviesCarrots.colors,
    ...EldritchBlast.colors,
  },
};

export const springConfig = {
  mass: 16,
  tension: 280,
  friction: 120,
};
