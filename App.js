import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import ChipperList from './components/ChipperList';
import Searchbar from './components/Searchbar';

export default function App() {
  
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            <View style={styles.list}>
              {/* add list component*/ }
              <ChipperList />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F6E0',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});