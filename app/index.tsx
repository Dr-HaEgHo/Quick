import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Redirect } from 'expo-router'
import { GlobalContext } from '@/context/context.service'

const index = () => {

    const { isNewUser, isAuth } = useContext(GlobalContext)

    return (
        (<Redirect href="/home" />)
    )
}

export default index;


// (async () => {
//     const userData = await AsyncStorage.getItem("user_data");
//     const cartData = await AsyncStorage.getItem("cart_data");

//     if (userData !== null) {
//         console.log("user_data available:::", JSON.parse(userData));
//         setIsNewUser(false)
//         setUser(JSON.parse(userData));
//         console.log("user", user)
//     } else {
//         console.log("There's no user Id, this user is new!!");
//     }

//     if (cartData !== null) {
//         console.log("cart items available:::", JSON.parse(cartData));
//         setCart(JSON.parse(cartData));
//     } else {
//         console.log("There's no cart data available");
//     }
// })();