import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  CarImage,
  Rent,
  Period,
  Price,
  Type
} from './styles';

import { CarDataProps } from '../../@types/CarTypes';


interface CarCardProps extends TouchableOpacityProps {
  data: CarDataProps;
}

export function CarCard({ data, ...rest }: CarCardProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest} activeOpacity={0.7}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail }} 
        resizeMode="contain"
      />
    </Container>
  );
}