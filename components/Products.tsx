import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { Key, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import { products } from "@/constants/data";
import { COLORS } from "@/constants/stylesheet";

const Products = () => {

    const router: any = useRouter();

    const [riderLoading, setRiderLoading] = useState(false);

    return (
        <View style={{
            flex: 1,
            width: "100%",
            height: 500,
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10
        }} >
            {riderLoading === true ? (
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        marginVertical: 20,
                        flexDirection: "row"
                    }}
                >
                    <ActivityIndicator />
                </View>
            ) : products && products.length ? products.map(item => (

                <TouchableOpacity
                    onPress={() => router.push(`/rider-info/${item.name}`)}
                    style={a.cardTouch}
                >
                    <View style={a.card}>
                        <View style={a.cardTop}>
                            <Image
                                source={ item.image }
                                width={160}
                                height={160}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={a.cardBottom}>
                            <View style={a.nameIcon}>
                                <Image
                                    source={item.image}
                                    width={20}
                                    height={20}
                                    resizeMode="contain"
                                />
                                <Text style={a.username}>
                                    {item.name} 
                                </Text>
                            </View>
                            <Text style={a.bikename}>
                                Bike Type: {item.name} {item.name}
                            </Text>
                            <View style={a.rating}>
                                <Text style={a.rate}>({item.price})</Text>
                                <Text style={a.star}>⭐</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            )) : (
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: COLORS.primary,
                        width: 100,
                        borderRadius: 20,
                    }}
                >
                    <Text
                        style={{
                            paddingVertical: 10,
                            color: COLORS.white,
                            fontFamily: "popReg",
                            textAlign: "center",
                        }}
                    >
                        Reload
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Products;

const a = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 8,
        alignItems: "center",
        gap: 32
    },
    userView: {
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 150,
        backgroundColor: COLORS.secondary,
        marginBottom: 8,
    },
    bikername: {
        fontFamily: "popReg",
        color: COLORS.black50,
        fontSize: 14,
    }, top: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    recent: {
        fontFamily: "popMid",
        color: COLORS.primary,
        fontSize: 16,
    },
    touchable: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    view: {
        fontFamily: "popReg",
        color: COLORS.primary,
        fontSize: 12,
    },
    cardWrapper: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardTouch: {
        width: "47%",

    },
    card: {
        height: 180,
        width: "100%",
        borderRadius: 10,
        backgroundColor: COLORS.grayLight,
        overflow: "hidden",
        marginBottom: 16
    },
    cardTop: {
        height: "46%",
        width: "100%",
        backgroundColor: COLORS.secondary,
        overflow: "hidden"
    },
    cardBottom: {
        paddingTop: 16,
        paddingHorizontal: 10
    },
    nameIcon: {
        flexDirection: "row",
        //   alignItems: "center",
        gap: 8,
    },
    username: {
        fontFamily: "popReg",
        color: COLORS.primary,
        fontSize: 14,
        marginBottom: 8,
    },
    bikename: {
        fontFamily: "popReg",
        color: COLORS.black50,
        fontSize: 12,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 8
    },
    rate: {
        fontFamily: "popReg",
        color: COLORS.black50,
        fontSize: 12,
    },
    star: {
        fontSize: 12
    }
});
