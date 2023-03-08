import React, {useContext} from 'react';

import {AuthContext} from '../../contexts/auth';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  AlertText,
  Image,
  SignOutButtom,
  SignOutButtomText,
} from './styles';

export default function SignOut() {
  const {signOut} = useContext(AuthContext);

  return (
    <Container>
      <AlertText>Quer mesmo sair do aplicativo?</AlertText>

      <Image source={require('../../assets/signOutImage.png')} />

      <SignOutButtom onPress={() => signOut()}>
        <SignOutButtomText>Sair</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
}
