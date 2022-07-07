import React from 'react';

import { BackButton } from '../../components/BackButton';
import { CarAccessory } from '../../components/CarAccessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import AccelerationSvg from '../../assets/acceleration.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import PeopleSvg from '../../assets/people.svg';
import SpeedSvg from '../../assets/speed.svg';

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
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export function CarDetails() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoScheduling() {
    navigation.navigate('scheduling');
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
            imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} 
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Accessories>
            <CarAccessory name="380km/h" icon={SpeedSvg} />
            <CarAccessory name="3.2s" icon={AccelerationSvg} />
            <CarAccessory name="800 HP" icon={ForceSvg} />
            <CarAccessory name="Gasolina" icon={GasolineSvg} />
            <CarAccessory name="Auto" icon={ExchangeSvg} />
            <CarAccessory name="2 pessoas" icon={PeopleSvg} />
          </Accessories>

          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide 
            indultado na praça Real Maestranza de Sevilla. É um belíssimo 
            carro para quem gosta de acelerar.
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