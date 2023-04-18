
import { Image, StyleSheet } from 'react-native';

export default function ImageComponent({ source }) {
    return (
        <Image source={source} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 420,
        borderRadius: 18,
    }
})