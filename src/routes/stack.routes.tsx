import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { SplashScreen } from '../screens/SplashScreen';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="signIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="signIn"
        component={SignIn}
      />

      <Screen 
        name="firstStep"
        component={FirstStep}
      />

      <Screen 
        name="secondStep"
        component={SecondStep}
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
