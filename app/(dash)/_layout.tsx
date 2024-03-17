import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { COLORS } from '@/constants/stylesheet';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={22} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                // headerShown: useClientOnlyValue(false, true),
                
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                    // headerRight: () => (
                    //   <Link href="/modal" asChild>
                    //     <Pressable>
                    //       {({ pressed }) => (
                    //         <FontAwesome
                    //           name="bars"
                    //           size={25}
                    //           color={COLORS.white}
                    //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //         />
                    //       )}
                    //     </Pressable>
                    //   </Link>
                    // ),
                }}
            />
            
        </Tabs>
    );
}