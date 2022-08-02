import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false
      }}
    >

      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="carDetails"
        component={CarDetails}
      />
      <Screen 
        name="scheduling"
        component={Scheduling}
      />
      <Screen 
        name="schedulingDetails"
        component={SchedulingDetails}
      />
      <Screen 
        name="confirmation"
        component={Confirmation}
      />

      <Screen 
        name="myCars"
        component={MyCars}
      />
    </Navigator>
  );
}
