import React, { useState } from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  Keyboard, 
  Alert
} from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { ButtonSingIn } from '../../components/ButtonSingIn';
import { Input } from '../../components/Inputs/Input';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido!'),
        password: Yup.string()
          .required('A senha é obrigatória.')
      });
      
      await schema.validate({ email, password });

      // Fazer login,
      signIn({ email, password });

    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer o login, verifique as credenciais'
        )
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('firstStep');
  }

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <Title>
                Estamos{'\n'}
                quase lá.
              </Title>

              <SubTitle>
                Faça seu login para começar{'\n'}
                uma experiência incrível.
              </SubTitle>
            </Header>

            <Form>
              <Input 
                iconName="mail"
                placeholder='E-mail'
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />

              <PasswordInput 
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </Form>

            <Footer>
              <Button 
                title="Login"
                type="primary"
                onPress={handleSignIn}
                disabled={false}
                loading={false}
              />

              <ButtonSingIn 
                title="Criar conta gratuita"
                type="primary"
                light
                onPress={handleNewAccount}
                loading={false}
              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}