import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export function ListMovies({data}) {
  const [isPressed, setIsPressed] = useState(false);

  // eslint-disable-next-line no-return-assign
  const handleIsPressed = (value) =>
    isPressed ? (value = '#007FF8') : (value = '#D1D1D1');

  const pressIn = () => setIsPressed(!isPressed);

  return (
    <View>
      {data.map((item) => (
        <View style={styles.Container}>
          <Icon
            style={styles.IconCircle}
            name="checkbox-blank-circle"
            size={28}
          />

          <View style={styles.Info}>
            <Text style={styles.Title}>{item.Title}</Text>
            <Text style={styles.Title}>{item.Year}</Text>
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
      ))}
    </View>
  );
}
