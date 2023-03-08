import React, {useState} from 'react';

import {Calendar, LocaleConfig} from 'react-native-calendars';
import {ptBR} from './languageCalendar';
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  BackButtom,
  CalendarContainer,
  FilterButtom,
  FilterButtomText,
} from './styles';

export default function CalendarModal({visible, filterMovements}) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  function handleOnDayPress(date) {
    setDateNow(new Date(date.dateString));

    let makedDay = {};

    makedDay[date.dateString] = {
      selected: true,
      selectedColor: '#80AE0F',
      textColor: '#fff',
    };

    setMarkedDates(makedDay);
  }

  function handleFilterDate() {
    filterMovements(dateNow);
    visible();
  }

  return (
    <Container>
      <BackButtom onPress={visible}>
        <Feather name="arrow-left" size={32} color="#fff" />
      </BackButtom>

      <CalendarContainer>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths
          theme={{
            todayTextColor: '#008fff',
            selectedDayBackgroundColor: '#80AE0F',
            selectedDayTextColor: '#fff',
          }}
        />
      </CalendarContainer>

      <FilterButtom onPress={handleFilterDate}>
        <FilterButtomText>Filtrar</FilterButtomText>
      </FilterButtom>
    </Container>
  );
}
