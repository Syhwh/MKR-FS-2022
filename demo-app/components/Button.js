import { Pressable, View, Text, StyleSheet } from "react-native";


export default function Button({ label = 'click me', onPress }) {
    return (
        <View style={styles.container} >
            <Pressable style={styles.button} onPress={onPress} >
                <Text style={styles.buttonText} >{label}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        border: '5px solid green',
        width: 320,
        height: 68,
        marginHorizontal: 20,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});