import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
} from './styles';

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSinOut() {

  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Header>
          <HeaderTop>
            <BackButton 
              type="secondary" 
              onPress={handleGoBack} 
            />
            <HeaderTitle>Editar Perfil</HeaderTitle>
            <LogoutButton 
              onPress={handleSinOut}
              activeOpacity={0.7}
            >
              <Feather 
                name="power"
                size={24} 
                color={theme.colors.shape} 
              />
            </LogoutButton>
          </HeaderTop>

          <PhotoContainer>
            <Photo source={{ uri: 'https://github.com/marcos-dev14.png' }} />
            <PhotoButton onPress={() => {}}>
              <Feather 
                name="camera"
                size={24}
                color={theme.colors.shape}
              />
            </PhotoButton>
          </PhotoContainer>
        </Header>
      </Container>   
    </>
  );
}