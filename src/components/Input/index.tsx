import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText
} from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({
  iconName,
  ...rest
}: Props) {
  const theme = useTheme();
  
  return (
    <Container>
      <IconContainer>
        {/* @ts-ignore */}
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />

      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}