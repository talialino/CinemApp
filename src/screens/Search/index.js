// eslint-disable-next-line no-return-assign
import React, {useState, useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {SearchFilter} from '../../components';

import cineContext from '../../services/Contexts/CineContext';

export default function Search() {
  const {movies, searchMovies} = useContext(cineContext);

  const [filterText, setFilterText] = useState('');

  const handleTextFilter = (text) => setFilterText((state) => (state = text));

  const [isPressed, setIsPressed] = useState(false);

  // eslint-disable-next-line no-return-assign
  const handleIsPressed = (value) =>
    isPressed ? (value = '#007FF8') : (value = '#D1D1D1');

  const pressIn = () => setIsPressed(!isPressed);

  function handleSearchMovies() {
    searchMovies(filterText);
  }


  return (
    <>
      <ScrollView style={styles.Container}>
        <Text style={styles.Title}>Cinema APP</Text>
        <Text style={styles.SubTitle}>
          Bem vindo ao mundo espetacular do cinema!
        </Text>
        <SearchFilter
          onChangeSearch={handleTextFilter}
          onPress={handleSearchMovies}
        />
        <View style={styles.Card}>
          <Icon
            style={styles.IconCircle}
            name="checkbox-blank-circle"
            size={28}
          />

          <View style={styles.Info}>
            <Text style={styles.Titles}>Nome do filme</Text>
            <Text style={styles.Titles}>Nome do filme</Text>
          </View>

          <Pressable onPress={() => pressIn()}>
            <Icon
              style={styles.IconStart}
              name="star"
              color={handleIsPressed('#D1D1D1')}
              size={28}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
