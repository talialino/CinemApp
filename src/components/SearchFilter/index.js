/* eslint-disable react/prop-types */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';

import styles from './styles';

export function SearchFilter({onChangeSearch, onPress}) {
  return (
    <View style={styles.Container}>
      <View style={styles.Search}>
        <Searchbar
          placeholder="O que você busca..."
          style={{backgroundColor: '#F3F3F3'}}
          clearTextOnFocus
          placeholderTextColor="#000"
          iconColor="#000"
          onChangeText={onChangeSearch}
        />
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.TextButton} onPress={onPress}>
          Buscar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

