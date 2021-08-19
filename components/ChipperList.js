import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ChipperCard from './ChipperCard';
import Searchbar from './Searchbar';

// or any pure javascript modules available in npm

import { createStackNavigator } from '@react-navigation/stack';

export default function ChipperList() {

  const [view, setView] = useState(false)
  const [chippers, setChippers] = useState([
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
  ])

  const search = (word) => {
    if(word.toLowerCase() !== 'all'){
      setChippers((prevChippers) => {
       return prevChippers.filter(chipper => chipper.name.toLowerCase().includes(word))
      })
      setView(true)
    } 
    else if(word === 'all') setView(true) 
  }

  // const clearSearch = () => {
  //   setChippers([
  //   { name: "Feelin' Chummy", id: '1'},
  //   { name: "Romeo and Julie's Net", id: '2'},
  //   { name: "Famous Original Ray's Fish n Chips", id: '3'},
  //   { name: "Fill Yer Gills", id: '4'},
  //   { name: "Hook'd", id: '5'},
  //   { name: "Chomping at the Chip", id: '6'},
  //   { name: "Fresh Fish of Bel-Air", id: '7'},
  //   { name: "Hootie and the Fishmongers", id: '8'},
  //   { name: "Fishy Fingers", id: '9'},
  //   { name: "The Saucy Tartar", id: '10'},
  // ])
  //   setView(false)
  // }

 

  return (
      <>
        <View> 
          <Searchbar search={search} /> 
        </View>
        
        { view ? 
          <View style={styles.container}>
          
            <FlatList 
              data={chippers}
              keyExtractor={ (item) => item.id }
              renderItem={ ({ item }) => (
                <ChipperCard chipper={ item } />
              )}
            /> 
          </View>
          : <></>
        }  
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#56DAB7',
    padding: 20,
    borderRadius: 10,
  }
});