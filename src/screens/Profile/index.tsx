import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useAuth } from '../../hooks/auth';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Inputs/Input';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section
} from './styles';

export function Profile() {
  const [optionActive, setOptionActive] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const { user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSingOut() {

  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOptionActive(optionSelected);
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <HeaderTop>
                <BackButton 
                  type="secondary" 
                  onPress={handleGoBack} 
                />
                <HeaderTitle>Editar Perfil</HeaderTitle>
                <LogoutButton 
                  onPress={handleSingOut}
                  activeOpacity={0.7}
                >
                  <Feather 
                    name="power"
                    size={24} 
                    color={theme.colors.shape} 
                  />
                </LogoutButton>
              </HeaderTop>

              <PhotoContainer>
                <Photo source={{ uri: 'https://github.com/marcos-dev14.png' }} />
                <PhotoButton onPress={() => {}}>
                  <Feather 
                    name="camera"
                    size={24}
                    color={theme.colors.shape}
                  />
                </PhotoButton>
              </PhotoContainer>
            </Header>

            <Content style={{ marginBottom: useBottomTabBarHeight() }}>
              <Options>
                <Option 
                  active={optionActive === 'dataEdit'}
                  onPress={() => handleOptionChange('dataEdit')}
                  activeOpacity={0.7}
                >
                  <OptionTitle active={optionActive === 'dataEdit'}>Dados</OptionTitle>
                </Option>

                <Option 
                  active={optionActive === 'passwordEdit'}
                  onPress={() => handleOptionChange('passwordEdit')}
                  activeOpacity={0.7}
                >
                  <OptionTitle active={optionActive === 'passwordEdit'}>Trocar senha</OptionTitle>
                </Option>
              </Options>
              {
                optionActive === 'dataEdit' ?
                  <Section>
                    <Input 
                      iconName="user"
                      placeholder="Nome"
                      autoCorrect={false}
                      defaultValue={user.name}
                    />
                    <Input 
                      iconName="mail"
                      editable={false}
                      defaultValue={user.email}
                    />
                    <Input 
                      iconName="credit-card"
                      placeholder="CNH"
                      keyboardType="numeric"
                      defaultValue={user.driver_license}
                    />
                  </Section>

                :
                  <Section>
                    <PasswordInput 
                      iconName="lock"
                      placeholder="Senha atual"
                    />
                    <PasswordInput 
                      iconName="lock"
                      placeholder="Nova senha"
                    />
                    <PasswordInput 
                      iconName="lock"
                      placeholder="Repetir senha"
                    />
                  </Section>
              }
            </Content>
          </Container> 
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView> 
    </>
  );
}