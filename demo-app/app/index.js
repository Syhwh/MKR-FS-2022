import "expo-router/entry";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

const BackgroundImage = require('../assets/images/background.jpg');

//generate array of 10 tasks with details
const tasks = Array.from({ length: 10 }, (v, i) => ({
    id: i,
    title: `Task ${i}`,
    description: `This is the description of task ${i}`,
    completed: false,
}));

export default function App() {
    const [image, setImage] = useState(BackgroundImage);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }} >  Home </Text>
            <StatusBar style="auto" />

            {/* <Link href={'/details?name=pepe&lastname=perez'} >
                Go to details
            </Link> */}
            {/* <Link href={{ pathname: '/details', params: { name: 'john', lastname: 'doe' } }} >
                Go to details
            </Link>
            <Link href={{ pathname: '/pepe', params: { name: 'john', lastname: 'doe' } }} >
                Go to dynamic route
            </Link> */}

            {tasks.map((task) => (
                <Link key={task.id} href={{ pathname: `/${task.id}`, params: { ...task } }} >
                    <Text style={{ color: '#fff' }} > {task.title} </Text>
                </Link>
            ))}

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
