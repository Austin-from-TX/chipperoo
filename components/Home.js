import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Searchbar from './SearchBar'

export default function Home() {

  const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }

  return (

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Welcome to Chipperoo!  
        </Text>
        <Text style={[styles.paragraph, { fontSize: 12 }]}>
          Search for a restaurant or press View All
        </Text>
        <Searchbar />
        <Button 
          title={'View All'}
        /> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#23D3EA',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD87D'
  },
});