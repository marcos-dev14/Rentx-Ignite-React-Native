import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.background_secondary};
  margin-right: 2px;

  ${({isFocused, theme}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background: ${({theme}) => theme.colors.background_secondary};
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;

  ${({isFocused, theme}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;
