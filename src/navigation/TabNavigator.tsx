import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#2b2b2b' },
        tabBarActiveTintColor: '#d4af37', // gold
        tabBarInactiveTintColor: '#c0c0c0', // silver
        tabBarIcon: ({ focused, color, size }) => {
          let name: any = 'ellipse';
          if (route.name === 'Menu') name = 'fast-food';
          if (route.name === 'Settings') name = 'settings';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}