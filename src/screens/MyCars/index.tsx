import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { api } from '../../services/api';

import { useTheme } from 'styled-components';

import { CarDataProps } from '../../@types/CarTypes';
import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  MessageWrapper,
  Message,
  SubMessage,
} from './styles';

interface MyCarsData {
  id: string;
  user_id: string;
  car: CarDataProps;
  startDate: string;
  endDate: string
}

export function MyCars() {
  const [cars, setCars] = useState<MyCarsData[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchMyCars() {
      try {
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMyCars();
  },[])

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
            Seus agendamentos, {'\n'}
            estão aqui. {'\n'}
          </Title>

          <SubTitle>
            Conforto, segurança e praticidade.
          </SubTitle>
        </Header>

        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          {
            loading ? <Loading /> 
              :
            <>
              {cars.length === 0 ? (
                <MessageWrapper>
                  <Message>Você tem 0 agendamentos!</Message>
                  <SubMessage>
                    Agora volte para Home, {'\n'}
                    e escolha um carro para ser agendado.
                  </SubMessage>
                </MessageWrapper>
              ): (
                <>
                  <FlatList 
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <CarWrapper>
                        <CarCard data={item.car} />
                        <CarFooter>
                          <CarFooterTitle>Período</CarFooterTitle>
                          <CarFooterPeriod>
                            <CarFooterDate>{item.startDate}</CarFooterDate>
                            <AntDesign 
                              name="arrowright"
                              size={20}
                              color={theme.colors.title}
                              style={{ marginHorizontal: 10 }}
                            />
                            <CarFooterDate>{item.endDate}</CarFooterDate>
                          </CarFooterPeriod>
                        </CarFooter>
                      </CarWrapper>
                    )}
                  />
                </>
              )}
            </>
          }
        </Content>
      </Container>
    </>
  );
}