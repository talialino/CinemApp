/* eslint-disable no-return-assign */
// eslint-disable-next-line no-return-assign
import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './styles';
import {SearchFilter, ListMovies} from '../../components';

import cineContext from '../../services/Contexts/CineContext';

export default function Search() {
  const {movies, searchMovies, favorites} = useContext(cineContext);

  const [filterText, setFilterText] = useState('');

  const handleTextFilter = (text) => setFilterText((state) => (state = text));

  function handleSearchMovies() {
    searchMovies(filterText);
  }

  //  console.log(favorites);

  function handleFavoritesImdbIDs(state, imdbIDs) {
    if (state) {
      movies.map((item) =>
        item.imdbID == imdbIDs ? favorites.push(item.imdbID) : null
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
      <Text style={styles.Title}>Cinema APP</Text>
      <Text style={styles.SubTitle}>
        Bem vindo ao mundo espetacular do cinema!
      </Text>
      <SearchFilter
        onChangeSearch={handleTextFilter}
        onPress={handleSearchMovies}
      />
      <ScrollView>
        <ListMovies data={movies} favoritesImdbIDs={handleFavoritesImdbIDs} />
      </ScrollView>
    </View>
  );
}

// data.forEach((element, index, array) => {
// console.log(element.x); // 100, 200, 300
// console.log(index); // 0, 1, 2
// console.log(array); // same myArray object 3 times

// if (state) {
// if (element.imdbID == imdbIDs) favorites.push(element.imdbID);
// } else {
//   const position = favorites.indexOf(imdbIDs);
//   if (position > -1) {
//     if (element.imdbID == imdbIDs) favorites.splice(position, 1);
//   }
// }
// });
