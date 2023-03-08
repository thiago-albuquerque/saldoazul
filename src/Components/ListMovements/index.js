import React from 'react';
import {Alert} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  DescriptionContainer,
  TitleContainer,
  Title,
  DateMovements,
  ValueMovementsContainer,
  ValueMovements,
  DeleteButton,
  BgIcon,
} from './styles';

export default function ListMovements({data, deleteItem}) {
  function deleteReceive() {
    Alert.alert('Atenção', 'Quer mesmo deletar este registro?', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'deletar', onPress: () => deleteItem(data.id)},
    ]);
  }

  const formatedValue = data.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <DescriptionContainer>
        <BgIcon bg={data.type}>
          <Feather
            name={data.type === 'receita' ? 'arrow-down' : 'arrow-up'}
            size={16}
            color="#fff"
          />
        </BgIcon>
        <TitleContainer>
          <Title numberOfLines={1}>{data.description}</Title>
          <DateMovements>{data.date}</DateMovements>
        </TitleContainer>
      </DescriptionContainer>

      <ValueMovementsContainer>
        <ValueMovements numberOfLines={1}>{formatedValue}</ValueMovements>
        <DeleteButton onPress={deleteReceive}>
          <Feather name="trash-2" size={20} color="#D44816" />
        </DeleteButton>
      </ValueMovementsContainer>
    </Container>
  );
}
