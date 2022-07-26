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
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({
  iconName,
  value,
  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }
  
  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        {/* @ts-ignore */}
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />

      </IconContainer>
      <InputText 
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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