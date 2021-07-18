/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StarWhite} from '..';

import styles from './styles';

export function ListMovies({data, favoritesImdbIDs}) {
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
          <StarWhite imdbID={item.imdbID} statePressed={favoritesImdbIDs} />
        </View>
      ))}
    </View>
  );
}
