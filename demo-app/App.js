import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImageComponent from './components/ImageComponent';
import Button from './components/Button';
const BackgroundImage = require('./assets/images/background.jpg');

export default function App() {
  const [image, setImage] = useState(BackgroundImage);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri);
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container} >
        <ImageComponent source={{uri:image}} />
      </View>
      <View style={styles.footer}>
        <Button label='Select image' onPress={pickImage} />
        <Button label='Add something 2' onPress={() => alert('Click works')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,

  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }

});
