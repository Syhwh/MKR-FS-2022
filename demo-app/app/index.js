import "expo-router/entry";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from "expo-router";
import { getToken, isSupported, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

import { getMessaging } from "firebase/messaging/sw";


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

    const requestPermission = async () => {
        try {
            const permission = await Notification.requestPermission()
            console.log(permission);
        } catch (error) {
            console.log(error);
        }
    };


    const getNotificationToken = async () => {

        try {
            const isAvailable = await isSupported();

            if (isAvailable) {

                const messaging = getMessaging();
                // Add the public key generated from the console here.
                const token = await getToken(messaging, { vapidKey: "BIXzCvVj6OvbTIR7YyEd8N5OsW1n1OHe1k_rOpPvJacJvS2m2REUI_QAeU0m3Cw09oJJ1Rvo0CnvINhM8FfPpoc" });

                console.log(token);
            }
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        requestPermission()
        getNotificationToken()

    }, [])
    
    // const messaging = getMessaging();
    // console.log(messaging);
    // onMessage(messaging, (payload) => {
    //     console.log('Message received. ', payload);
    //     // ...
    // });

    wonMessage((payload) => {
        console.log("Message received. ", payload);
        const { title, ...options } = payload.notification;
        navigator.serviceWorker.register("firebase-messaging-sw.js");
        function showNotification() {
          Notification.requestPermission(function (result) {
            if (result === "granted") {
              navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification(payload.notification.title, {
                  body: payload.notification.body,
                  tag: payload.notification.tag,
                });
              });
            }
          });
        }
        showNotification();
      });

    // onBackgroundMessage(messaging, (payload) => {
    //     console.log('[firebase-messaging-sw.js] Received background message ', payload);
    //     // Customize notification here
    //     const notificationTitle = 'Background Message Title';
    //     const notificationOptions = {
    //         body: 'Background Message body.',
    //         icon: '/firebase-logo.png'
    //     };

    //     self.registration.showNotification(notificationTitle,
    //         notificationOptions);
    // });
    useEffect(() => {


    }, [])

    //

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#25292e',
                    },
                }}
            />

            <Text style={{ color: '#fff' }} > Home </Text>
            <StatusBar style="auto" />

            <Link href={'/details?name=pepe&lastname=perez'} >
                Go to details
            </Link>
            <Link href={'/details?name=pepe&lastname=perez'} >
                Go to details
            </Link>

            {/* <Link href={{ pathname: '/details', params: { name: 'john', lastname: 'doe' } }} >
                Go to details
            </Link>
            <Link href={{ pathname: '/pepe', params: { name: 'john', lastname: 'doe' } }} >
                Go to dynamic route
            </Link> */}

            {/* {tasks.map((task) => (
                <Link key={task.id} href={{ pathname: `/${task.id}`, params: { ...task } }} >
                    <Text style={{ }} > {task.title} </Text>
                </Link>
            ))} */}
            <Link href={{ pathname: '/login', params: { title: 'users', description: 'this is the users page' } }} >
                <Text style={{}} > login </Text>
            </Link>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        // color: '#fff',
    },


});
