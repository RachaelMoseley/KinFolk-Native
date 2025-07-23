import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.header}>
                <Text style={StyleSheet.headerText}>Welcome to KinFolk!</Text>
            </View>


        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '50a7c1',
    },

    header: {
        backgroundColor: '0a7ea4',
        padding: 15,
        borderRadius: 5,
    },

    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    content:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
