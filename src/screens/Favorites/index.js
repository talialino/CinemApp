import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './styles';

export default function Favorites() {
  return (
    <>
      <ScrollView style={styles.Container}>
        <Text style={styles.Title}>Cinema APP - Favoritos</Text>
        <Text style={styles.SubTitle}>
          Bem vindo ao mundo espetacular do cinema!
        </Text>
        <View />
      </ScrollView>
    </>
  );
}
