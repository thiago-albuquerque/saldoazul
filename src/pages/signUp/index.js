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
  SignUpButtom,
  SignUpButtomText,
  SignInButtom,
  SignInButtomText,
  SignInButtomBoldText,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUp, loading} = useContext(AuthContext);

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }

    signUp(name, email, password);
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Logo source={require('../../assets/logo.png')} />
          <TitleApp>Saldo Azul</TitleApp>

          <InputLabel>Nome</InputLabel>
          <Input value={name} onChangeText={value => setName(value)} />

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

          <SignUpButtom onPress={handleSignUp}>
            <SignUpButtomText>Entrar</SignUpButtomText>
          </SignUpButtom>

          <SignInButtom onPress={() => navigation.navigate('SignIn')}>
            <SignInButtomText>
              Já possui uma conta?
              <SignInButtomBoldText> Faça Login!</SignInButtomBoldText>
            </SignInButtomText>
          </SignInButtom>
        </>
      )}
    </Container>
  );
}
