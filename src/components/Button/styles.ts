import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  background: ${({color, theme}) =>
    color ? color : theme.colors.main
  };
  align-items: center;
  justify-content: center;
  padding: 19px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
