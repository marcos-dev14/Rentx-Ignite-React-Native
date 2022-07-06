import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Name
} from './styles';

interface CarAccessoryProps {
  name: string;
  icon: React.FC<SvgProps>
}

export function CarAccessory({ name, icon: Icon }: CarAccessoryProps) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}