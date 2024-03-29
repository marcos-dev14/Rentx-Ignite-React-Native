import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Inputs/Input';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';

export function FirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
        .required('CNH é obrigatória.'),
        email: Yup.string()
          .email('E-mail inválido.')
          .required('E-mail é obrigatório.'),  
        name: Yup.string()
          .required('Nome é obrigatório.'),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate('secondStep', {user: data});
    } catch (error) {
        if(error instanceof Yup.ValidationError) {
          Alert.alert('Erro', error.message);
      }
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
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}
            conta
          </Title>
          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil.
          </SubTitle>

          <Form>
            <FormTitle>
              1. Dados
            </FormTitle>

            <Input 
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />

            <Input 
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            <Input 
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>
          
          <Button
            title="Próximo"
            type="primary"
            onPress={handleNextStep}
            disabled={!driverLicense}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}