import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container, 
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function ButtonSingIn({ 
  title, 
  type, 
  disabled = false,
  loading = false,
  light = false,
  ...rest 
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container 
      {...rest} 
      type={type} 
      activeOpacity={0.7} 
      disabled={disabled}
      style={{ opacity: disabled ? .5 : 1 }}
    >
      {loading 
        ? <ActivityIndicator color={theme.colors.shape} size={25}/>
        : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}