// eslint-disable-next-line no-return-assign
import React, {useState, useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {SearchFilter, ListMovies} from '../../components';

import cineContext from '../../services/Contexts/CineContext';

export default function Search() {
  const {movies, searchMovies} = useContext(cineContext);

  const [filterText, setFilterText] = useState('');

  const handleTextFilter = (text) => setFilterText((state) => (state = text));

  function handleSearchMovies() {
    searchMovies(filterText);
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
        <ListMovies data={movies} />
      </ScrollView>
    </View>
  );
}
