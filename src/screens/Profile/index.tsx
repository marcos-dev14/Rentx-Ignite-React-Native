import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard, 
  Alert
} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Inputs/Input';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Button } from '../../components/Button';

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
  const { user, signOut, updatedUser } = useAuth();

  const [optionActive, setOptionActive] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOptionActive(optionSelected);
  }

  async function handleSelectedAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if(result.cancelled) {
      return;
    }

    if(!result.cancelled) {
      const { uri } = result as ImageInfo;
      setAvatar(uri)
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
          .required('CNH é obrigatória.'),
        name: Yup.string()
          .required('Nome é obrigatório.')
      });

      const data = { name, driverLicense };
      await schema.validate(data);

      await updatedUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token
      });

      Alert.alert('Perfil atualizado com sucesso!');
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Não foi possível atualizar o perfil.');
      }
    }
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
                  onPress={signOut}
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
                { !!avatar && <Photo source={{ uri: avatar }} /> }
                <PhotoButton onPress={handleSelectedAvatar}>
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
                      onChangeText={setName}
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
                      onChangeText={setDriverLicense}
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

              <Button 
                title="Salvar alterações"
                type="primary"
                onPress={handleProfileUpdate}
              />
            </Content>
          </Container> 
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView> 
    </>
  );
}