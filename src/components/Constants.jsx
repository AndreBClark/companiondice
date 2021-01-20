import { Platform } from 'react-native';
import Constants, { AppOwnership } from 'expo-constants';
import * as Linking from 'expo-linking';
import { getColor } from '../components/tailwind';

export const isWeb = Platform.OS == 'web';
export const isStandalone = Constants.appOwnership === AppOwnership.Standalone;

export const LinkingUrls = {
  prefixes: [Linking.makeUrl(isStandalone ? '' : '/')],
};

export const theme = {
  dark: true,
  colors: {
    primary: getColor('green-400'),
    text: getColor(`green-600`),
    card: getColor(`purple-500`),
    border: getColor(`purple-700`),
  },
};
export const springConfig = {
  mass: 16,
  tension: 280,
  friction: 120
}