import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, 
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ 
  title, 
  type, 
  disabled = false, 
  ...rest 
}: ButtonProps) {
  return (
    <Container 
      {...rest} 
      type={type} 
      activeOpacity={0.7} 
      disabled={disabled}
      style={{ opacity: disabled ? .5 : 1 }}
    >
      <Title>{title}</Title>
    </Container>
  );
}