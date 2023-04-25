import { Stack, usePathname, useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function users() {
    const router = useRouter();
    const { title, description, id } = useSearchParams();
    const path = usePathname();
    console.log(path);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: `${title}`,
            }} />
            <Text style={{ color: '#fff' }} > This is id-: {id} </Text>
            <Text style={{ color: '#fff' }} >  {title} </Text>
            <Text style={{ color: '#fff' }} > {description} </Text>
            <Button title="Go back" onPress={() => router.back()} />
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