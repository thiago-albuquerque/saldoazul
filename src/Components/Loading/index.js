import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eff3f6',
      }}>
      <Image
        source={require('../../assets/logo.png')}
        style={{width: 150, height: 150, marginBottom: 24}}
      />

      <ActivityIndicator color={'#008FFF'} size={40} />

      <Text style={{color: '#777'}}>Carregando informações...</Text>
    </View>
  );
}
