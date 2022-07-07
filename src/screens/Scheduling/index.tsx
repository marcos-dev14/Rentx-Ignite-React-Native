import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentPeriod,
  Title
} from './styles';

export function Scheduling() {
  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack()
  }

  function handleConfirmeRental() {
    navigation.navigate('schedulingDetails')
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
          <BackButton 
            type="secondary"
            onPress={handleGoBack}  
          />

          <Title>
            Escolha uma {'\n'}
            data de início e {'\n'}
            fim do aluguel
          </Title>
          
          <RentPeriod>
            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue selected={false}>06/07/2022</DateValue>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue selected={false}>06/07/2022</DateValue>
            </DateInfo>
          </RentPeriod>
        </Header>

        <Content>
          <Calendar />
        </Content>

        <Footer>
          <Button 
            title="Confirmar" 
            type="primary" 
            onPress={handleConfirmeRental}  
          />
        </Footer>
      </Container>
    </>
  );
}