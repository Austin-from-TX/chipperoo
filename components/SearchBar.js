import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import ChipperList from './ChipperList';

export default function Searchbar({ navigation }) {

    const [text, setText] = useState('');
    
    return (
            <View style={[styles.container]}>
                <View style={styles.searchContainer}>
                    <View style={styles.vwSearch}>
                        <Image
                            style={styles.icSearch}
                            source={require('../assets/ic_search.png')} />
                    </View>

                    <TextInput
                        value={text}
                        placeholder="Search 'fish' or press View All  "
                        style={styles.textInput}
                        onChangeText={text => setText(text)}
                    />
                    {
                        text ?
                            <TouchableOpacity
                                onPress={() => setText('')}
                                style={styles.vwClear}>
                                <Image
                                    style={styles.icClear}
                                    source={require('../assets/ic_clear.png')} />
                            </TouchableOpacity>
                            : <View style={styles.vwClear} />
                    }

                </View>
                <View >
                    <ChipperList text={text} navigation={navigation} />
                </View>
            </View >
    )
}
const styles = StyleSheet.create({
   
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#87F5FB',
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        backgroundColor: '#87F5FB'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: '#87F5FB',
        width: '90%',
        height: 40,
        flexDirection: 'row'

    },
    container: {
        alignItems: 'center',
        height: '95%', width: '100%' 
    },
});