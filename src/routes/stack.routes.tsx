import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';
import { SplashScreen } from '../screens/SplashScreen';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="splashScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="splashScreen"
        component={SplashScreen}
      />

      <Screen 
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
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

      <Screen 
        name="myCars"
        component={MyCars}
      />
    </Navigator>
  );
}
