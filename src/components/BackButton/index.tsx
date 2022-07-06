import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';

interface BackButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
}

export function BackButton({ type, ...rest }: BackButtonProps) {
  const theme = useTheme();

  return (
    <Container>
      <MaterialIcons 
        name="chevron-left"
        size={24}
        color={type === 'primary' ? theme.colors.text : '#ffffff' }
      />
    </Container>
  );
}