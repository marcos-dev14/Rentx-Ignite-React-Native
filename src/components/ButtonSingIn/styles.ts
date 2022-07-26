import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  background: ${({type, theme}) =>
    type === 'primary' ? theme.colors.background_secondary : theme.colors.main
  };
  align-items: center;
  justify-content: center;
  padding: 19px;
  margin-top: 8px;
`;

interface TitleProps {
  light: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme, light}) => 
    light ? theme.colors.header : theme.colors.shape
  };
  font-size: ${RFValue(15)}px;
`;
