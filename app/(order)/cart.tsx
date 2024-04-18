import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { COLORS, SHADOWS } from '@/constants/stylesheet'
import AvailableProducts from '@/components/AvailableProducts'
import { distributors, products } from '@/constants/data'
import Products from '@/components/Products'
import { useRouter } from 'expo-router'
import NavBar from '@/components/NavBar'
import useFetch from '@/hooks/useFetch'
import { GlobalContext } from '@/context/context.service'
import { ShoppingCart } from 'iconsax-react-native'

const cart = () => {

    const router: any = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<any>([])
    const { cart, setCart, deleteFromCart } = useContext(GlobalContext)
    const [total, setTotal] = useState(0)

    const handleTotal = (data:any) => {
        const prices = data.map((item:any) => item.price)

        for (let i = 0; i < prices.length; i++){
            setTotal(total + parseInt(prices[i]) )
        }
    } 

    useEffect(() => { 
        handleTotal(cart)
    },[cart])


    console.log(products)

    return (
        <View style={{
            width: "100%",
            flex: 1,
            backgroundColor: COLORS.white
        }} >
            <NavBar />
            <ScrollView contentContainerStyle={{

                paddingBottom: 50,
            }} >
                <Text style={{
                    marginVertical: 40,
                    width: "100%",
                    textAlign: "center",
                    fontFamily: 'popMid',
                    fontSize: 22,
                }} >Cart</Text>
                <View style={a.cardWrapper}>
                    {loading === true ? (
                        <View style={a.emptyNotifications} >
                            <ActivityIndicator />
                        </View>
                    ) : cart.length ? (
                        cart.map((item: any) => (
                            <TouchableOpacity
                                key={item.id}

                                style={a.cardTouch}
                            >
                                <View style={a.card}>
                                    <View style={a.cardTop}>
                                        <Image
                                            source={{ uri: `${item.images[0]}` }}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={a.cardBottom}>
                                        <View style={a.nameIcon}>
                                            <Text style={a.username}>
                                                {item.title.slice(0, 15)}...
                                            </Text>
                                        </View>
                                        <Text style={a.bikename}>
                                            price: ₦ {item.price}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => deleteFromCart(item)}
                                            style={a.addCart}>
                                            <Text style={{
                                                color: "white",
                                                fontFamily: "popReg",
                                                fontSize: 14
                                            }} >Remove from Cart</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View style={a.emptyNotifications}>
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                }}
                                source={require("../../assets/images/cart.png")}
                                width={200}
                                height={200}
                                resizeMode="contain"
                            />
                            {/* <Star1 size="80" color={COLORS.primary} variant="Bold" /> */}
                            <Text style={a.emptyNotificationsText}>
                                Na products Available
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.push('/order')}
                                style={a.reloadButton}
                            >
                                <Text style={a.reloadText}>See Distributors</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
                    <TouchableOpacity
                        onPress={() => router.push('/checkout')}
                        style={{
                            // width: "100%",
                            height: 48,
                            marginHorizontal: 40,
                            marginTop: 30,
                            borderRadius: 6,
                            backgroundColor: COLORS.secondary,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            gap: 8,
                            marginBottom: 50
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                fontFamily: "popMid",
                                fontSize: 16,
                            }}
                        >
                            Checkout
                        </Text>
                        <ShoppingCart color={COLORS.white} />
                        <Text
                            style={{
                                color: COLORS.white,
                                fontFamily: "popMid",
                                fontSize: 16,
                            }}
                        >
                            {total}
                        </Text>
                        
                    </TouchableOpacity>
        </View>
    )
}

export default cart


const a = StyleSheet.create({
    cardWrapper: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        paddingTop: 20,
        paddingHorizontal: 14,
    },
    cardTouch: {
        width: "48%",
        ...SHADOWS.medium,
    },
    card: {
        height: 180,
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 0,
        backgroundColor: COLORS.grayLight
    },
    cardTop: {
        height: "46%",
        width: "100%",
        overflow: "hidden",
    },
    cardBottom: {
        paddingTop: 16,
        paddingHorizontal: 10,
    },
    nameIcon: {
        flexDirection: "row",
        //   alignItems: "center",
        gap: 8,
    },
    username: {
        fontFamily: "popSBold",
        color: COLORS.secondary,
        fontSize: 16,
        marginBottom: 8,
    },
    bikename: {
        fontFamily: "popReg",
        color: COLORS.black60,
        fontSize: 12,
    },
    addCart: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: COLORS.primary,
        alignSelf: "flex-start",
        borderRadius: 999999,
        marginTop: 8,
    },
    rate: {
        fontFamily: "popReg",
        color: COLORS.black60,
        fontSize: 12,
    },
    star: {
        fontSize: 12,
    },
    emptyNotifications: {
        width: "100%",
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    emptyNotificationsText: {
        fontFamily: "popMid",
        color: COLORS.black60,
        fontSize: 14,
        textAlign: "center",
    },
    reloadButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 34,
        marginTop: 30,
    },
    reloadText: {
        fontFamily: 'popReg',
        color: COLORS.white,

    },
})
