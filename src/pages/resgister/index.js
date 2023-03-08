import React, {useState} from 'react';

import api from '../../services/api';
import {format} from 'date-fns';

import CurrencyInput from 'react-native-currency-input';

import Feather from 'react-native-vector-icons/Feather';
import {Alert} from 'react-native';

import {
  Container,
  Title,
  InputLabel,
  Input,
  CategoryContainer,
  RevenueButton,
  ReceiveText,
  ExpenseButton,
  RegisterButtom,
  RegisterText,
} from './styles';

export default function Register() {
  const [nameReceive, setNameReceive] = useState('');
  const [valueReceive, setValueReceive] = useState('');
  const [formatedInput, setFormatedInput] = useState(Number(valueReceive));

  const [typeRegister, setTypeRegister] = useState('receita');

  function handleRegister() {
    if (
      nameReceive === '' ||
      valueReceive === '' ||
      formatedInput === 0 ||
      typeRegister === null
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirme os dados',
      `Categoria: ${typeRegister} - Valor: ${valueReceive}`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Ok', onPress: () => addRegister()},
      ],
    );
  }

  async function addRegister() {
    await api.post('/receive', {
      description: nameReceive,
      value: formatedInput,
      type: typeRegister,
      date: format(new Date(), 'dd/MM/yyyy'),
    });

    alert(`${typeRegister} registrada com sucesso!`);

    setNameReceive('');
    setValueReceive('');
    setFormatedInput('');
    setTypeRegister('receita');
  }

  return (
    <Container>
      <Title>Registro</Title>

      <InputLabel>Nome</InputLabel>
      <Input
        value={nameReceive}
        onChangeText={value => setNameReceive(value)}
      />

      <InputLabel>Valor desejado</InputLabel>

      <CurrencyInput
        value={formatedInput}
        onChangeValue={setFormatedInput}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        onChangeText={value => setValueReceive(value)}
        style={{
          width: '96%',
          maxWidth: 600,
          fontSize: 18,
          color: '#777',
          borderWidth: 1,
          borderColor: '#aaa',
          borderRadius: 8,
          backgroundColor: '#fff',
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginBottom: 16,
        }}
      />

      <InputLabel>Escolha a categoria</InputLabel>
      <CategoryContainer>
        <RevenueButton
          onPress={() => setTypeRegister('receita')}
          checked={typeRegister === 'receita' ? true : false}>
          <Feather
            name="arrow-down"
            size={24}
            color={typeRegister === 'receita' ? '#fff' : '#80ae0f'}
          />
          <ReceiveText checked={typeRegister === 'receita' ? true : false}>
            Receita
          </ReceiveText>
        </RevenueButton>

        <ExpenseButton
          onPress={() => setTypeRegister('despesa')}
          checked={typeRegister === 'despesa' ? true : false}>
          <Feather
            name="arrow-up"
            size={24}
            color={typeRegister === 'despesa' ? '#fff' : '#d44816'}
          />
          <ReceiveText checked={typeRegister === 'despesa' ? true : false}>
            Despesa
          </ReceiveText>
        </ExpenseButton>
      </CategoryContainer>

      <RegisterButtom onPress={handleRegister}>
        <RegisterText>Registrar</RegisterText>
      </RegisterButtom>
    </Container>
  );
}
