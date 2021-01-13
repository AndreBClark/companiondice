import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getColor } from '../tailwind';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HP from '../../routes/health'
const MyTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    background: 'none',
    primary: getColor(`green-400`),
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer
      theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === 'Dice') {
              iconName = focused
                ? 'dice-multiple'
                : 'dice-multiple-outline';
            } else if (route.name === 'Health') {
              iconName = focused
                ? 'heart-circle'
                : 'heart-circle-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={getColor(`green-400`)} />;
          },
        })}>
        <Tab.Screen name="Dice" component={HomeScreen} />
        <Tab.Screen name="Health" component={HP} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}