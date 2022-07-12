import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';

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
  Content,
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
        <Header>
          <BackButton 
            type="primary"
            onPress={handleGoBack}  
          />
        </Header>

        <CarImages>
          <ImageSlider 
            imagesUrl={car.photos} 
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>{`R$ ${car.rent.price}`}</Price>
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
          </About>
        </Content>

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