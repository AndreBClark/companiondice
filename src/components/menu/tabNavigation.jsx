import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getColor, tailwind } from '../tailwind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HP from '../../routes/health';
import Dice from '../../routes/dice'
import Stats from '../dice/Stats';
const theme = {
  dark: true,
  colors: {
    ...DarkTheme,
    background: 'none',
    primary: getColor('green-400'),
    text: getColor(`green-600`),
    card: getColor(`purple-500`),
    border: getColor(`purple-700`)
  },
};


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer
      theme={theme}>
      <Tab.Navigator
        tabBarOptions={{
          style: style.bar,
          labelStyle: style.label
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            switch (route.name) {
              case 'Health': iconName = focused
                  ? 'heart-circle'
                  : 'heart-circle-outline';
              case 'Stats': iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
              case 'Dice': iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
              default: iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
            }
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={theme.colors.primary} />;
          },
        })}
        >
        <Tab.Screen name="Health" component={HP} />
        <Tab.Screen name="Dice" component={Dice} />
        <Tab.Screen name="Stats" component={Stats} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  label: {
    ...tailwind(`font-semibold`),
    fontSize: 14,
  },
  bar: tailwind(`h-16 py-2`)
})