import React, {useState, useEffect} from 'react';
import {View, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StarCheck} from '..';

import styles from './styles';

export function ListMovies({data}) {

  return (
    <View>
      {data?.map((item) => (
        <View key={item.imdbID} style={styles.Container}>
          <Icon
            style={styles.IconCircle}
            name="checkbox-blank-circle"
            size={28}
          />
          <View style={styles.Info}>
            <Text style={styles.Title}>{item.Title}</Text>
            <Text style={styles.Title}>Ano: {item.Year}</Text>
          </View>
          <StarCheck id={item.imdbID} />
        </View>
      ))}
    </View>
  );
}
