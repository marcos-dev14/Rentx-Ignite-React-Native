import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
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
    <Container {...rest} activeOpacity={0.7}>
      <MaterialIcons 
        name="chevron-left"
        size={24}
        color={type === 'primary' ? theme.colors.text : '#ffffff' }
      />
    </Container>
  );
}