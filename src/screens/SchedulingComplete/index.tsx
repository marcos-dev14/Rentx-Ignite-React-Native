import React from 'react';
import { StatusBar ,useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { ConfirmeButton } from '../../components/ConfirmeButton';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <LogoSvg width={width} />

        <Content>
          <DoneSvg width={80} height={80} />
          <Title>Carro aluado!</Title>

          <Message>
            Agora você só precisa ir {'\n'}
            até a concessionária da RENTX {'\n'}
            pegar o seu automóvel.
          </Message>
        </Content>

        <Footer>
          <ConfirmeButton
            title="OK"
            onPress={handleGoHome}
          />
        </Footer>

      </Container>
    </>
  );
}