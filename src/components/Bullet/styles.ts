import styled from 'styled-components/native';


interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 6px;
  height: 6px;
  background: ${({theme, active}) => 
    active ? theme.colors.title : theme.colors.shape
  };
  margin-left: 8px;
  border-radius: 3px;
`;