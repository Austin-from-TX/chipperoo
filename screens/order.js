import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Alert } from 'react-native'
import { RadioButton, Checkbox } from 'react-native-paper'

export default function Order({ route }) {

    const { name } = route.params
    const [checkedFish, setCheckedFish] = useState('')
    const [checkedPeas, setCheckedPeas] = useState('')
    const [userName, setUserName] = useState('')
    const [address, setAddress] = useState('')
    const [instructions, setInstructions] = useState('')
    const [errors, setErrors] = useState([]);

    // form validation 
    useEffect(() => {
    const errors = [];
    if (!checkedFish.length) {
      errors.push("Please select the type of fish you want");
    }
    if (!userName.length) {
      errors.push("Name field is required.");
    } 
    if (!address.length){
        errors.push('Address field is required.')
    }
    setErrors(errors);
  }, [checkedFish, userName, address]);

    // success/fail alert based on form validation 
    const handleSubmit = (errors) => {
        if (errors.length) {
            Alert.alert('OOPS!', "Please fill our all required fields (with *'s)", [
                {text: 'Understood'}
            ])
        } else {
            Alert.alert('NOICE!', 'Your Order has been Processed!', [
                {text: 'WAHOO!!'}
            ])
        }
    }

    return (
        <ScrollView>
            <View syle={styles.container}>
                <View> 
                    <Text style={styles.heading}>{ name }'s Order Screen </Text>
                </View>
                <Text style={styles.text}>Please choose your Fish Option (*) </Text>
                <View style={styles.boxes}>
                    <Text style={styles.text}>Cod</Text>
                    <RadioButton
                        value='cod'
                        status={ checkedFish === 'cod' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedFish('cod')}    
                    />
                    <Text style={styles.text}>Halibut</Text>
                    <RadioButton
                        value='halibut'
                        status={ checkedFish === 'halibut' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedFish('halibut')}    
                    />
                </View>
                <View style={styles.boxes}>
                    <Checkbox 
                        status={checkedPeas ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedPeas(!checkedPeas)
                        }}
                        />
                    <Text style={styles.text}>Would you like Mushy Peas?  </Text>
                </View>
                <Text style={styles.goOn}>Go on, you know you do ;)  </Text>
                <Text style={styles.heading}>Delivery Information   </Text>
                <View style={styles.inputForm}>
                    <TextInput 
                            value={userName}
                            placeholder="Please Enter Your Name (*) "
                            style={styles.textInput}
                            onChangeText={userName => setUserName(userName)}
                    />
                    <TextInput 
                            value={address}
                            placeholder="Please Enter Your Address (*) "
                            style={styles.textInput}
                            onChangeText={address => setAddress(address)}
                    />
                    <TextInput 
                            value={instructions}
                            placeholder="Please Enter Any Special Delivery Instructions "
                            style={styles.textInput}
                            onChangeText={instructions => setInstructions(instructions)}
                            multiline={true}
                            numberOfLines={4}
                    />
                </View>
                <View stlye={styles.button}>
                    <Button title='Place Order' color='#56DAB7' onPress={() => handleSubmit(errors)} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#EEF2E3',
        flex: 1
    }, 
    textInput: {
        margin: 5,
        backgroundColor: 'white', 
        borderRadius: 10,
        padding: 10
    }, 
    inputForm: {
        margin: 15,
        width: '90%', 
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#87F5FB',
        color: '#FFC53E',
        padding: 15,
        margin: 5, 
        borderRadius: 5
    },
    button: {
        width: '75%'
    }, 
    boxes: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    }, 
    text: {
        margin: 5, 
        textAlign: 'center', 
        fontSize: 15,
        fontWeight: 'bold'
    }, 
    goOn: {
        margin: 5, 
        fontSize: 12,
        marginLeft: 25,
        color: '#FE7955',
        fontWeight: 'bold'
    }, 
    
})