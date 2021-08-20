import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Order from './screens/order'
import Header from './components/Header';
import Searchbar from './components/SearchBar';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Order' component={Order} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

