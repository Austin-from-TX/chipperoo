import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ChipperCard from './ChipperCard';

// or any pure javascript modules available in npm

import { createNativeStackNavigator } from '@react-navigation/stack';

export default function ChipperList() {

  const chippers = [
    { name: "Feelin' Chummy", id: '1'},
    { name: "Romeo and Julie's Net", id: '2'},
    { name: "Famous Original Ray's Fish n Chips", id: '3'},
    { name: "Fill Yer Gills", id: '4'},
    { name: "Hook'd", id: '5'},
    { name: "Chomping at the Chip", id: '6'},
    { name: "Fresh Fish of Bel-Air", id: '7'},
    { name: "Hootie and the Fishmongers", id: '8'},
    { name: "Fishy Fingers", id: '9'},
    { name: "The Saucy Tartar", id: '10'},
  ]

  const Stack = createNativeStackNavigator();

  return (
      <View style={styles.container}>

        <FlatList 
          data={chippers}
          keyExtractor={ (item) => item.id }
          renderItem={ ({ item }) => (
            <ChipperCard chipper={ item } />
          )}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});