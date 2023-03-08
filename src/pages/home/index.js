import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import {format} from 'date-fns';

import {useIsFocused} from '@react-navigation/native';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Historic from '../../Components/Historic';

import {Container, ListBalance, LoadContainer} from './styles';

export default function Home() {
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  const [loadMovements, setLoadMovements] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
        setMovements(receives.data);
      }

      setLoadMovements(false);
    }

    getMovements();

    return () => (isActive = false);
  }, [isFocused, dateMovements]);

  async function handleDeleteReceive(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id,
        },
      });

      setDateMovements(new Date());
    } catch (error) {
      console.log('Erro: ' + error);
    }
  }

  async function handleFilter(dateSelected) {
    setDateMovements(dateSelected);
  }

  return (
    <Container>
      <Header />

      {loadMovements ? (
        <LoadContainer>
          <ActivityIndicator color="#008fff" size={40} />
        </LoadContainer>
      ) : (
        <>
          <ListBalance>
            <FlatList
              data={listBalance}
              renderItem={({item}) => <Balance data={item} />}
              keyExtractor={item => item.tag}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </ListBalance>

          <Historic
            data={movements}
            deleteItem={handleDeleteReceive}
            filterDateMovements={handleFilter}
          />
        </>
      )}
    </Container>
  );
}
