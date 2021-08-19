import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';

export default function Searchbar({ search }) {

    const [text, setText] = useState('');

    useEffect(() => {
        if(text === '') return
        else search(text.toLowerCase())
    },[text, search] )
    
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
                    placeholder="Search 'fish' or 'all' to view all "
                    style={styles.textInput}
                    onChangeText={text => {
                      setText(text)
                    }}

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
        backgroundColor: '#58EBFF',
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        backgroundColor: '#58EBFF'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: '#58EBFF',
        width: '90%',
        height: 40,
        flexDirection: 'row'

    },
    container: {
        height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
});