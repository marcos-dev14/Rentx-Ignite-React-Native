import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 273px;
  background: ${({theme}) => theme.colors.header};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_600};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 16px; 
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 30px; */
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  margin-top: 20px;
`;

export const CarFooter = styled.View`
  width: 100%;
  background: ${({theme}) => theme.colors.background_secondary};
  padding: 12px;
  margin-top: -12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(13)}px;
`;
