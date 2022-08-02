import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { api }  from '../../services/api';
import { CarDataProps } from '../../@types/CarTypes';

import LogoSvg from '../../assets/logo.svg';

import { Loading } from '../../components/Loading';
import { CarCard } from '../../components/CarCard';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDataProps[]>();
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleGoCarDetails(car: CarDataProps) {
    navigation.navigate('carDetails', { car })
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  },[]);

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Header>
          <HeaderContent>
            <LogoSvg 
              width={RFValue(108)}
              height={RFValue(12)}
            />

            {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
          </HeaderContent>
        </Header>
        
        {loading ? <Loading /> : 
          <CarList 
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => 
              <CarCard data={item} 
              onPress={() => handleGoCarDetails(item)} 
            />}
          />
        }
      </Container>
    </>
  );
}