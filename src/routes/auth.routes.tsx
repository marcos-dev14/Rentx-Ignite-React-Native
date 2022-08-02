import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Confirmation } from '../screens/Confirmation';
import { SplashScreen } from '../screens/SplashScreen';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
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
        name="confirmation"
        component={Confirmation}
      />
    </Navigator>
  );
}
