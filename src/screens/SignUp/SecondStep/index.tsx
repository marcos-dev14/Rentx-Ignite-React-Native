import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/Inputs/PasswordInput';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Form,
  FormTitle,
} from './styles';
import { api } from '../../../services/api';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      Alert.alert('Erro', 'Informe a senha para finalizar o cadastrado.')
    }

    if (password != passwordConfirm) {
      Alert.alert('Erro', 'As senha não são iguais.')
    }

    // Enviar para API e cadastrar...
    try {
      await api.post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password
      });
      navigation.navigate('confirmation', {
        nextScreenRoute: 'signIn',
        title: 'Conta Criada!',
        message: `Agora é só fazer login\n e aproveitar.`
      })
    }  catch (error) {
      console.log({ error: error.response.data })
      Alert.alert('Opa', 'Não foi possível cadastrar.');
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton 
              type="primary"
              onPress={handleGoBack} 
            />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Form>
            <FormTitle>
              02. Senha
            </FormTitle>

            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput 
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>
          
          <Button
            title="Cadastrar"
            type="secondary"
            onPress={handleRegister}
            disabled={!passwordConfirm}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}