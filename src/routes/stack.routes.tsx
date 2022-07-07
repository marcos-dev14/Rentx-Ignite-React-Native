import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
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
        name="schedulingComplete"
        component={SchedulingComplete}
      />
    </Navigator>
  );
}
