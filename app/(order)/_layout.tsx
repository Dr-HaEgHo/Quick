import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useRouter } from 'expo-router';
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

export default function OrderLayout() {
    const colorScheme = useColorScheme();

    const router = useRouter()

    




    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "white",
                // headerLeft: () => (
                //     <Pressable onPress={() => router.back()} style={{ paddingLeft: 20 }} >
                //         {({ pressed }) => (
                //             <FontAwesome
                //                 name="chevron-left"
                //                 size={20}
                //                 color={COLORS.white}
                //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                //             />
                //         )}
                //     </Pressable>
                // )
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                // headerShown: useClientOnlyValue(false, true),

            }}>
            <Tabs.Screen
                name="order"
                options={{
                    title: 'Order',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="promotions"
                options={{
                    title: 'Promotions',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="my-orders"
                options={{
                    title: 'My Orders',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="points"
                options={{
                    title: 'My Points',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'My Cart',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="distributor/[id]"
                options={{
                    title: 'Products',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
           
            <Tabs.Screen
                name="product/[id]"
                options={{
                    title: 'Product Details',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            
            <Tabs.Screen
                name="tutorials"
                options={{
                    title: 'Tutorials',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        fontFamily: "popMid",
                    },
                    tabBarStyle: { display: "none" },
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({ pressed }) => (
                    //                 <FontAwesome
                    //                     name="bars"
                    //                     size={25}
                    //                     color={COLORS.white}
                    //                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />

        </Tabs>
    );
}