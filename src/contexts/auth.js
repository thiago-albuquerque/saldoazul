import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext({});

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

import {useNavigation} from '@react-navigation/native';

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadStorageUser, setLoadStorageUser] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@saldoazul');

      if (storageUser) {
        const response = await api
          .get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response?.data);
        setLoadStorageUser(false);
      }

      setLoadStorageUser(false);
    }

    loadStorage();
  }, []);

  async function signUp(name, email, password) {
    setLoading(true);

    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      });

      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log('Erro: ' + error);
      setLoading(false);
    }
  }

  async function signIn(email, password) {
    setLoading(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const {id, name, token} = response.data;
      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@saldoazul', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });

      setLoading(false);
    } catch (error) {
      console.log('Erro: ' + error);
      setLoading(false);
      alert('Ops! Algo deu errado!');
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loading,
        loadStorageUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
