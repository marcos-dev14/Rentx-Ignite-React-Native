import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { ButtonSingIn } from '../../components/ButtonSingIn';
import { EmailInput } from '../../components/Inputs/EmailInput';
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
  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
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
          <EmailInput 
            iconName="mail"
            placeholder='E-mail'
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <PasswordInput 
            iconName="lock"
            placeholder="Senha"
          />
        </Form>

        <Footer>
          <Button 
            title="Login"
            type="primary"
            onPress={() => {}}
            disabled={true}
            loading={false}
          />

          <ButtonSingIn 
            title="Criar conta gratuita"
            type="primary"
            light
            onPress={() => {}}
            loading={false}
          />
        </Footer>
      </Container>
    </>
  );
}