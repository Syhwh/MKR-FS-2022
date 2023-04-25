import { Stack } from 'expo-router';

export default function layout() {
    return (
        <Stack
            initialRouteName="home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="details" options={{}} />
        </Stack>
    )
}