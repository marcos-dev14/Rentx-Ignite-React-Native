import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { ButtonSingIn } from '../../components/ButtonSingIn';
import { Input } from '../../components/Input';

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
          <Input 
            iconName="mail"
            placeholder='E-mail'
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
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