import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { CarDataProps } from '../../@types/CarTypes';

import ArrowSvg from '../../assets/arrow.svg';
import { getPlatformDate } from '../../utils/getPlatformDate';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { 
  Calendar, 
  DayProps, 
  generateInterval, 
  MarkedDateProps 
} from '../../components/Calendar';

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

interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

interface RouteParams {
  car: CarDataProps;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  const route = useRoute();
  const { car } = route.params as RouteParams;
  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack()
  }

  function handleConfirmeRental() {
    navigation.navigate('schedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    // Verificação para caso o usuário clicar no ultimo dia da date primeiro
    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
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
              <DateValue selected={!!rentalPeriod.startFormatted}>
                {rentalPeriod.startFormatted}
              </DateValue>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
              </DateValue>
            </DateInfo>
          </RentPeriod>
        </Header>

        <Content>
          <Calendar 
            markedDates={markedDates}
            onDayPress={handleChangeDate}
          />
        </Content>

        <Footer>
          <Button 
            title="Confirmar" 
            type="primary" 
            onPress={handleConfirmeRental}
            disabled={!rentalPeriod.startFormatted}
          />
        </Footer>
      </Container>
    </>
  );
}