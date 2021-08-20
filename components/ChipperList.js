import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Button, ScrollView } from 'react-native';


// You can import from local files
import ChipperCard from './ChipperCard';

// or any pure javascript modules available in npm

export default function ChipperList( { text, navigation }) {

  const [view, setView] = useState(false)
  const [chippers, setChippers] = useState([])
  const [toggle, setToggle] = useState(true)
  
  
    const restaurants = [
    { name: "Feelin' Chummy", id: '1'},
    { name: "Romeo and Julie's Net", id: '2'},
    { name: "Famous Original Ray's Fish n Chips", id: '3'},
    { name: "Fill Yer Gills", id: '4'},
    { name: "Hook'd", id: '5'},
    { name: "Chomping at the Chip", id: '6'},
    { name: "Fresh Fish of Bel-Air", id: '7'},
    { name: "Hootie and the Fishmongers", id: '8'},
    { name: "Fishy Fingers", id: '9'},
    { name: "The Saucy Tartar", id: '10'}
    ]
  
    useEffect(() => {
        if (text === '' ) {
          setChippers([])
          setView(false)
        } else {
          search(text.toLowerCase())
          setView(true) 
        }
    },[text, search])

  const search = (text) => {
      const searchResult = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(text.toLowerCase()))
          setChippers(searchResult)
      
    } 

    const viewAll = () => {
      setChippers(restaurants)
      setView(true)
      setToggle(false)
    }

    const clear = () => {
      setChippers([])
      setView(false)
      setToggle(true)
    }

  return (
      <View>
        
        <View style={styles.button}> 
          { 
            toggle ?
              <Button title='View All' onPress={viewAll} color='#56DAB7' /> : 
              <Button title='Clear Results' onPress={clear} color='#FE7955' />  }
        </View>
     
          { view ? 
            <View style={styles.container}>
              
                {chippers.map(chipper => (
                  <View key={ chipper.id }>
                    <ChipperCard chipper={ chipper } navigation={navigation} />
                  </View>
                ))}

            </View>
              :
              <></>
          }
  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#56DAB7',
    padding: 20,
    borderRadius: 10
  }, 
  button: {
    margin: 5, 
    width: '100%' 
  }
});