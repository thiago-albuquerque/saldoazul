import React, {useContext} from 'react';

import {AuthContext} from '../../contexts/auth';

import {Container, UserContainer, WelcomeText, UserName, Logo} from './styles';

export default function Header() {
  const {user} = useContext(AuthContext);

  return (
    <Container>
      <UserContainer>
        <WelcomeText>Bom te ver de novo,</WelcomeText>
        <UserName numberOfLines={1}>{user.name}</UserName>
      </UserContainer>

      <Logo source={require('../../assets/logo.png')} />
    </Container>
  );
}
