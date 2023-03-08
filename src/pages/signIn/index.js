import React, {useContext, useState} from 'react';

import {AuthContext} from '../../contexts/auth';

import {useNavigation} from '@react-navigation/native';

import Loading from '../../Components/Loading';

import {
  Container,
  Logo,
  TitleApp,
  InputLabel,
  Input,
  SignInButtom,
  SignInButtomText,
  SignUpButtom,
  SignUpButtomText,
  SignUpButtomBoldText,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const {signIn, loading} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }

    signIn(email, password);
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Logo source={require('../../assets/logo.png')} />
          <TitleApp>Saldo Azul</TitleApp>

          <InputLabel>Email</InputLabel>
          <Input
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <InputLabel>Senha</InputLabel>
          <Input
            value={password}
            onChangeText={value => setPassword(value)}
            keyboardType="numeric"
            secureTextEntry={true}
          />

          <SignInButtom onPress={handleSignIn}>
            <SignInButtomText>Entrar</SignInButtomText>
          </SignInButtom>

          <SignUpButtom onPress={() => navigation.navigate('SignUp')}>
            <SignUpButtomText>
              Não tem uma conta?
              <SignUpButtomBoldText> Clique Aqui!</SignUpButtomBoldText>
            </SignUpButtomText>
          </SignUpButtom>
        </>
      )}
    </Container>
  );
}
