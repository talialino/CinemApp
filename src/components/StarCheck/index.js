import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export function StarCheck({id}) {
  const [isPressed, setIsPressed] = useState(false);
  // const [id, setId] = useState('');

  // eslint-disable-next-line no-return-assign
  const handleIsPressed = (value) =>
    isPressed ? (value = '#007FF8') : (value = '#D1D1D1');

  // function handleCheck() {
  //   setIsPressed(id.map((item) => (item.imdbID === id ? !isPressed : null)));
  // }

  return (
    <Pressable onPressIn={() => setIsPressed(!isPressed)}>
      <Icon
        style={styles.IconStart}
        name="star"
        color={handleIsPressed('#D1D1D1')}
        size={28}
      />
    </Pressable>
  );
}
