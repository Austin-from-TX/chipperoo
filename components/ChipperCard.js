import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


export default function ChipperCard( { chipper, navigation }) {

  const name = chipper.name

  return (
    <TouchableOpacity onPress={ () => navigation.navigate('Order', { name: name }) }>
      <Card style={ styles.container }>
        <Text style={ styles.paragraph }>
          { name }  
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 3, 
    backgroundColor: '#EEF2E3'
  },
  paragraph: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
});