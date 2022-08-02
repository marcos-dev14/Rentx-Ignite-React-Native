import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { SecondStep } from '../screens/SignUp/SecondStep';

import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="home"
        component={AppStackRoutes}
      />

      <Screen 
        name="profile"
        component={Home}
      />

      <Screen 
        name="myCars"
        component={MyCars}
      />
    </Navigator>
  );
}
