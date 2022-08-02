import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';

import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { BackButton } from '../../components/BackButton';
import { CarAccessory } from '../../components/CarAccessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { CarDataProps } from '../../@types/CarTypes';

import {
  Container,
  Header,
  CarImages,
  Details, 
  About,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer, 
} from './styles';

interface RouteParams {
  car: CarDataProps;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 75],
        Extrapolate.CLAMP
      )
    }
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [1, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoScheduling() {
    navigation.navigate('scheduling', { car });
  }

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Animated.View style={[
          headerStyleAnimation, 
          styles.header,
          {backgroundColor: theme.colors.background_secondary}
        ]}>
          <Header>
            <BackButton 
              type="primary"
              onPress={handleGoBack}
              style={styles.buttonBack}
            />
          </Header>

          <Animated.View style={sliderCarsStyleAnimation}>
            <CarImages>
              <ImageSlider 
                imagesUrl={car.photos} 
              />
            </CarImages>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: getStatusBarHeight() + 160,
          }}
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.period}</Period>
              <Price>{`R$ ${car.price}`}</Price>
            </Rent>
          </Details>

          <Accessories>
            {car.accessories.map(accessory => (
              <CarAccessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))}
          </Accessories>

          <About>
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
          </About>
        </Animated.ScrollView>

        <Footer>
          <Button 
            type="primary"
            title="Escolher período do aluguel"
            onPress={handleGoScheduling}
          />
        </Footer>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1
  },
  buttonBack: {
    position: 'absolute',
    zIndex: 2,
    top: 4
  }
})