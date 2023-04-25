import "expo-router/entry";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const BackgroundImage = require('../assets/images/background.jpg');

export default function App() {
    const [image, setImage] = useState(BackgroundImage);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }} >  Home </Text>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },


});
