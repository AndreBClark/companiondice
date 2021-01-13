import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getColor } from '../tailwind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HP from '../../routes/health';
import Dice from '../../routes/dice'
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



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer
      theme={theme}>
      <Tab.Navigator
        tabBarOptions={{
          style: style.bar,
          labelStyle: style.label
        }
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === 'Health') {
              iconName = focused
                ? 'heart-circle'
                : 'heart-circle-outline';
            } else if (route.name === 'Dice') {
              iconName = focused
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bar: {
    height: 64
  }
})