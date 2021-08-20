import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native'
import Header from '../components/Header';
import Searchbar from '../components/SearchBar';

export default function Home({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}> 
          <ScrollView style={styles.container}>
          <Header />
            <View style={styles.content}>
              <View style={styles.list}>
                <Searchbar navigation={navigation}  /> 
              </View>
            </View>
          </ScrollView>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F6E0',
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20,
  },
});