import React, {useState} from 'react';

import ListMovements from '../ListMovements';

import CalendarModal from '../CalendarModal';

import {FlatList, Modal} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  HeaderHistoric,
  TitleHeader,
  CalendarButton,
  ListMovementsContainer,
} from './styles';

export default function Historic({data, deleteItem, filterDateMovements}) {
  const [calendarModal, setCalendarModal] = useState(false);

  return (
    <Container>
      <HeaderHistoric>
        <TitleHeader>
          {data == '' ? 'Não há movimentações' : 'Últimas movimentações'}
        </TitleHeader>
        <CalendarButton onPress={() => setCalendarModal(true)}>
          <Feather name="calendar" size={24} color="#80AE0F" />
        </CalendarButton>
      </HeaderHistoric>

      <ListMovementsContainer>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListMovements data={item} deleteItem={deleteItem} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 60,
          }}
        />
      </ListMovementsContainer>

      <Modal visible={calendarModal} animationType="slide" transparent>
        <CalendarModal
          visible={() => setCalendarModal(false)}
          filterMovements={filterDateMovements}
        />
      </Modal>
    </Container>
  );
}
