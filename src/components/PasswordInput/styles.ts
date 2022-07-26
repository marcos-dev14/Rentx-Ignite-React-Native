import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.background_secondary};
  margin-right: 2px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background: ${({theme}) => theme.colors.background_secondary};
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`;
