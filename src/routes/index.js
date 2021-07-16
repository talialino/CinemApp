import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {color} from 'react-native-reanimated';
import SearchScreen from '../screens/Search';
import FavoritesScreen from '../screens/Favorites';

// import AuthContext from '../state/contexts/auth';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="#FFF" backgroundColor="#1F2923" />
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: 'beside-icon',
          activeTintColor: '#33FFFF',
          activeBackgroundColor: '#647687',
          inactiveBackgroundColor: '#647687',
        }}>
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: () => <Icon name="search" size={20} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: () => <Icon name="star" color="#FFF" size={20} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
