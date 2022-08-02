import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import HomeTabSvg from '../assets/home-tab.svg';
import CarTabSvg from '../assets/car-tab.svg';
import PeopleTabSvg from '../assets/people-tab.svg';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

import { AppStackRoutes } from './app.stack.routes';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary
        }
      }}
      
    >
      <Screen 
        name="home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeTabSvg width={24} height={24} fill={color} />
          ))
        }}
      />

      <Screen 
        name="profile"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleTabSvg width={24} height={24} fill={color} />
          ))
        }}
      />

      <Screen 
        name="myCars"
        component={MyCars}
        options={{
          tabBarIcon: (({ color }) => (
            <CarTabSvg width={24} height={24} fill={color} />
          ))
        }}
      />
    </Navigator>
  );
}
