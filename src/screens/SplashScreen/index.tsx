import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container
} from './styles';

export function SplashScreen() {
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 60],
            [0, -60],
            Extrapolate.CLAMP  
          )
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 50],
        [0, .3, 1],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 60],
            [-60, 0],
            Extrapolate.CLAMP  
          )
        }
      ]
    }
  });

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 2000 }
    )
  },[])

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Animated.View style={[brandStyle, {position: 'absolute'}]}>
          <BrandSvg width={80} height={50} />
        </Animated.View>

        <Animated.View style={[logoStyle, {position: 'absolute'}]}>
          <LogoSvg width={180} height={20} />
        </Animated.View>
      </Container>
    </>
  );
}
