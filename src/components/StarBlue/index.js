/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export function StarBlue({imdbID, statePressed}) {
  const [isPressed, setIsPressed] = useState(true);
  // console.log(isPressed);

  const handleIsPressed = (value) =>
    isPressed ? (value = '#007FF8') : (value = '#D1D1D1');

  function handleState() {
    setIsPressed((_isPressed) => (_isPressed = !isPressed));
  }

  statePressed(isPressed, imdbID);

  return (
    <TouchableOpacity onPress={() => handleState()}>
      <Icon
        style={styles.IconStart}
        name="star"
        color={handleIsPressed('#007FF8')}
        size={28}
      />
    </TouchableOpacity>
  );
}