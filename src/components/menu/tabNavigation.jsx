import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-bottom-tabs-no-warnings';
import { tailwind } from '../tailwind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HP from '../../routes/health';
import { Stats, Dice } from '../dice/dicebox';
import { theme, LinkingUrls } from '../Constants';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer linking={{ LinkingUrls }} theme={theme}>
      <Tab.Navigator
        tabBarOptions={{
          style: tw.buttonList,
          labelStyle: tw.label,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            switch (route.name) {
              case 'health': iconName = focused
                  ? 'heart-circle'
                  : 'heart-circle-outline';
              case 'stats': iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
              case 'dice': iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
              default: iconName = focused
                  ? 'dice-multiple'
                  : 'dice-multiple-outline';
            }
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={theme.colors.primary} />;
          },
      })}>
        <Tab.Screen name="dice" component={Dice} />
        <Tab.Screen name="health" component={HP} />
        <Tab.Screen name="stats" component={Stats} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const tw = StyleSheet.create({
  label: {
    ...tailwind(`font-semibold pb-1`),
  },
  bar: tailwind(`bg-purple-500 w-full justify-center mx-auto`),
});
