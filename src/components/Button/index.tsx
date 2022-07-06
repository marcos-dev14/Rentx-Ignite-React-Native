import React from 'react';

import {
  Container, Title
} from './styles';

interface ButtonProps {
  title: string;
  type: 'primary' | 'secondary'
}

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}