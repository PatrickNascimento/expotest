import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Feather } from 'react-native-vector-icons';
import { View, Text } from 'react-native';
import {Header} from './components/header/Header'

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

import Screen1 from './Screen1';
import Screen2 from './Screen2';

const User: string = "Patrick";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const getTabBarIcon = (route: string, focused: boolean, color: string, size: number) => {
    const iconNames: { [key: string]: string } = {
      Tab1: 'home',
      Tab2: 'settings',
    };

    const iconName = iconNames[route];

    return iconName ? <Feather name={iconName} size={20} color={color} /> : null;
  };

  const screenOptions = ({ route }): BottomTabNavigationOptions => ({
    tabBarIcon: ({ color, size }) => {
      return getTabBarIcon(route.name, false, color, size);
    },
    headerShown: true, 
    headerTitle: () => (

<Header/>

    ),
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      <Tab.Screen name="Tab1" component={Screen1} />
      <Tab.Screen name="Tab2" component={Screen2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
