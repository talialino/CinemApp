/* eslint-disable no-return-assign */
// eslint-disable-next-line no-return-assign
import React, {useContext, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';

import styles from './styles';
import {StarBlue} from '../../components';

import cineContext from '../../services/Contexts/CineContext';

export default function Favorites() {
  const {movies, favorites} = useContext(cineContext);

  const moviesFavoriteds = [];

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  favorites.forEach((element, index) => {
    moviesFavoriteds.push(movies.filter((item) => item.imdbID === element));
    return moviesFavoriteds;
  });

  function handleFavoritesImdbIDs(state, imdbIDs) {
    if (state) {
      favorites.map((item) =>
        item.imdbID === imdbIDs ? favorites.push(item.imdbID) : null
      );
    }
    if (!state) {
      const index = favorites.indexOf(imdbIDs);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Cinema APP - Favoritos</Text>
      <Text style={styles.SubTitle}>
        Bem vindo ao mundo espetacular do cinema!
      </Text>
      <ScrollView>
        {moviesFavoriteds.map((item) =>
          item.map((data) => (
            <View style={styles.ListContainer}>
              <Image style={styles.Poster} source={{uri: data.Poster}} />
              {console.log(data.Poster)}

              <View style={styles.Info}>
                <Text style={styles.ListTitle}>{data.Title}</Text>
                <Text style={styles.ListTitle}>Ano: {data.Year}</Text>
              </View>
              <StarBlue
                imdbID={data.imdbID}
                statePressed={handleFavoritesImdbIDs}
              />
            </View>
          ))
        )}
      </ScrollView>
      <View />
    </View>
  );
}
