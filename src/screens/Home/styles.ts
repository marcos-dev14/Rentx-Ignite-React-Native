import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDataProps } from '../../@types/CarTypes';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background: ${({theme}) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDataProps>) => FlatList<CarDataProps>
)
.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const MyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  background: ${({theme}) => theme.colors.main};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  right: 22px;
`;
