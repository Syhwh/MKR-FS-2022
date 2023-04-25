import { Stack, useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function details() {
    const router = useRouter();
    const { name, lastname } = useSearchParams();

    return (
        <View style={styles.container}>

            <Stack.Screen
                // Name of the dynamic route.

                options={{

                    // Ensure the tab always links to the same href.
                    title: `User:${name}`,
                }}
            />
            <Text style={{ color: '#fff' }} > This is User </Text>
            <Text style={{ color: '#fff' }} > Hello {name} {lastname} </Text>
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