import { useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function details() {
    const router = useRouter();
    const { name, lastname } = useSearchParams();

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }} > This is Search </Text>
            {/* <Text style={{ color: '#fff' }} > Hello {name} {lastname} </Text> */}
            {/* <Button title="Go back" onPress={() => router.back()} /> */}
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