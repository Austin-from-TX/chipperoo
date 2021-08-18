import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function ChipperCard( { chipper }) {

  const handlePress = () => {
    // navigate to chipper page 
  }

  return (
    <TouchableOpacity onPress={ () => handlePress() }>
      <Card style={ styles.container }>
        <Text style={ styles.paragraph }>
          { chipper.name }  
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 2, 
  },
  paragraph: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});