import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar } from 'react-native';

import { api } from '../../services/api';

import { CarDataProps } from '../../@types/CarTypes';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './styles';
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';

interface MyCarsData {
  id: string;
  user_id: string;
  car: CarDataProps;
}

export function MyCars() {
  const [cars, setCars] = useState<MyCarsData[]>([]);
  const [loading, setLoading] = useState(true);

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
            <AppointmentsQuantity>05</AppointmentsQuantity>
          </Appointments>
        
          {loading ? <Loading /> : 
            <FlatList 
              data={cars}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CarCard data={item.car} />
              )}
            />
          }
        </Content>
      </Container>
    </>
  );
}