import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Chipperoo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#58EBFF',
  },
  title: {
    textAlign: 'center',
    padding: 10,
    color: '#FFC53E',
    fontSize: 30,
    fontWeight: 'bold',
  }
});