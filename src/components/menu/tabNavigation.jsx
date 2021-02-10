import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-bottom-tabs-no-warnings';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { tailwind } from '@/tailwind';
import { theme, LinkingUrls } from '@/Constants';

import HP from 'screens/health';
import RegularDice from 'screens/dice/RegularDice'
import AbilityScoreDice from 'screens/dice/AbilityScoreDice'
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer linking={{ LinkingUrls }} theme={theme}>
      <Tab.Navigator
        tabBarOptions={{
          style: tw.bar,
          labelStyle: tw.label,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            switch (route.name) {
              case 'health': iconName = focused
                ? 'heart-circle'
                : 'heart-circle-outline';
                break;
                case 'stats': iconName = focused
                ? 'dice-d6'
                : 'dice-d6-outline';
                break;
                case 'dice': iconName = focused
                ? 'dice-d20'
                : 'dice-d20-outline';
                break;
                default:
                  throw new Error(`invalid route.name: ${route.name}`);
                }
                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={size} color={theme.colors.primary} />;
              },
            })}>
        <Tab.Screen name="dice" component={RegularDice} />
        <Tab.Screen name="health" component={HP} />
        <Tab.Screen name="stats" component={AbilityScoreDice} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const tw = StyleSheet.create({
  label: tailwind(`font-bold uppercase pb-1`),
  bar: {
    backgroundColor: theme.colors.card,
    ...tailwind(`w-full justify-center mx-auto border-transparent`),
  }
});
