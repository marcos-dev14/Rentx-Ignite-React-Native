import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { ButtonSingIn } from '../../components/ButtonSingIn';

import { 
  Container,
  Header,
  Title,
  SubTitle,
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