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
import { useNavigation, useRoute } from '@react-navigation/native';

export interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

interface Navigation {
  navigate: (value: string) => void;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<Navigation>();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
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
          <Title>{title}</Title>

          <Message>
            {message}
          </Message>
        </Content>

        <Footer>
          <ConfirmeButton
            title="OK"
            onPress={handleConfirm}
          />
        </Footer>

      </Container>
    </>
  );
}