import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

const AppTab = createBottomTabNavigator();

import Home from '../pages/home';
import Register from '../pages/resgister';
import SignOut from '../pages/SignOut';

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#80AE0F',
        tabBarInactiveTintColor: '#ccc',
      }}>
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />

      <AppTab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="plus-circle" size={40} color={color} />;
          },
        }}
      />

      <AppTab.Screen
        name="SignOut"
        component={SignOut}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="log-out" size={size} color={color} />;
          },
        }}
      />
    </AppTab.Navigator>
  );
}
