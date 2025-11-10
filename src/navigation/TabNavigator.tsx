import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddMenuItemScreen from '../screens/AddMenuItemScreen';
import FilterScreen from '../screens/FilterScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#C0C0C0',
        tabBarStyle: { backgroundColor: '#2E2E2E' },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Add Item') iconName = 'add-circle';
          else if (route.name === 'Filter') iconName = 'filter';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Item" component={AddMenuItemScreen} />
      <Tab.Screen name="Filter" component={FilterScreen} />
    </Tab.Navigator>
  );
}
