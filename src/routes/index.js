import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../screens/Search';
import FavoritesScreen from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="#FFF" backgroundColor="#1F2923" />
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: 'beside-icon',
          activeTintColor: '#11B621',
          activeBackgroundColor: '#1F2923',
          inactiveBackgroundColor: '#1F2923',
        }}>
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: () => <Icon name="search" color="#FFF" size={20} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: () => <Icon name="star" color="#FFF" size={20} />,
            lazy: false,
            tabBarOnPress: (scene, jumpToIndex) => {
              console.log('onPress:', scene.route);
              jumpToIndex(scene.index);
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
