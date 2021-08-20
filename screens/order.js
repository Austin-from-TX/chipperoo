import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Order() {
    return (
        <View style={styles.container}> 
            <Text>Order Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})