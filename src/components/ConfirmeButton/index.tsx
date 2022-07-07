import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, Title
} from './styles';

interface ConfirmeButtonProps extends TouchableOpacityProps {
  title: string;
}

export function ConfirmeButton({ title, ...rest }: ConfirmeButtonProps) {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Container>
  );
}