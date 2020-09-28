import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(0);

    function handleNumber(){
        const new_number = Math.floor(Math.random() * 100);
        setNumber(new_number);
    }

    return (
        <>
            <SafeAreaView style={style.container}>
                <Text style={style.number}>{number}</Text>
                <TouchableOpacity style={style.button} onPress={handleNumber}>
                    <Text>Generate Number</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 38,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});

export default App;