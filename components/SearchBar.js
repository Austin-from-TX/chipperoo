import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';

export default function Searchbar({ value, updateSearch }) {

    const [query, setQuery] = useState('');
    
    return (
        <View style={[styles.container]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Image
                        style={styles.icSearch}
                        source={require('../assets/ic_search.png')} />
                </View>

                <TextInput
                    value={query}
                    placeholder="Try searching for 'fish' "
                    style={styles.textInput}
                    onChangeText={(text) => {
                            setQuery(text)
                            updateSearch(text)
                    }}
                />
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
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
        // backgroundColor: 'green',
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: 'white',
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