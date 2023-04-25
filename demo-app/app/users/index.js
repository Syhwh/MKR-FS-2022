import { Link, useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

// generate an array of 10 users with details
const usersArray = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `User ${i}`,
    lastname: `Lastname ${i}`,
    email: ''
}));


export default function users() {
    const router = useRouter();
    // const { name, lastname } = useSearchParams();

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }} > This is users </Text>
            {/* <Text style={{ color: '#fff' }} > Hello {name} {lastname} </Text> */}
            {
                usersArray.map((user) => (

                    <Link key={user.id} href={{ pathname: `/users/${user.id}`, params: { ...user } }} >
                        <Text style={{}} > {user.name} </Text>
                    </Link>

                ))
            }
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