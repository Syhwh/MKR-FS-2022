import { Link, Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="search" size={24} color="black" />,
                }}
            />

            <Tabs.Screen
                // Name of the dynamic route.
                name="[user]"
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={24} color="black" />,
                    // Ensure the tab always links to the same href.
                    href: "/evanbacon",

                    // OR you can use the Href object:
                    href: {
                        pathname: "/user/[user]",
                        params: {
                            user: "evanbacon",
                        },
                    },
                }}
            />
        </Tabs>
    );
}