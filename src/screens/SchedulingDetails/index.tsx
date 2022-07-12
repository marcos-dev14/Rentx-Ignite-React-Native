import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { format } from 'date-fns';

import { api } from '../../services/api';

import { getPlatformDate } from '../../utils/getPlatformDate';
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
  Description,
  Brand,
  Name,
  Rent,
  Accessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Period,
  Price,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

interface RouteParams {
  car: CarDataProps;
  dates: string[];
}

interface RentalPeriodProps {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)

  const theme = useTheme();

  const route = useRoute();
  const { car, dates } = route.params as RouteParams;
  const navigation = useNavigation();

  // Conta para calcular o preço do aluguel
  const rentTotal = Number(dates.length * car.rent.price);

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleGoScheduleComplete() {
    const schedulesByCarResponse = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCarResponse.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates,
    })
    .then(() => navigation.navigate('schedulingComplete'))
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento'))
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  },[])

  return (
    <Container>
      <Header>
        <BackButton type="primary" onPress={handleGoBack} />
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
          {
            car.accessories.map(accessory => (
              <CarAccessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
          {/* @ts-ignore */}
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          {/* @ts-ignore */}
          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>AtÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          type="secondary"
          title="Alugar agora"
          onPress={handleGoScheduleComplete}
        />
      </Footer>
    </Container>
  );
}
