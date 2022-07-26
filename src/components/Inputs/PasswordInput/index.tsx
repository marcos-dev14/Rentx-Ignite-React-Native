import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText,
} from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({
  iconName,
  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }
  
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
      <InputText 
        secureTextEntry={isPasswordVisible}
        {...rest} 
      />

      <TouchableOpacity
        onPress={handlePasswordVisibilityChange}
        activeOpacity={.7}
      >
        <IconContainer>
          {/* @ts-ignore */}
          <Feather 
            name={ isPasswordVisible ? 'eye' : 'eye-off' }
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  );
}