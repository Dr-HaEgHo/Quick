import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { DistributorCardProps, OrderCardProps } from '@/constants/Types';
import { COLORS } from '@/constants/stylesheet';
import { useRouter } from 'expo-router';

const DistributorCard: FC<DistributorCardProps> = ({ id, image, name, rate, details }) => {

    const router: any = useRouter();

    return (
        <View style={{
            width: "100%",
            borderBottomWidth: 0.4,
            borderColor: COLORS.blackTen,
            gap: 8,
            flexDirection: "row",
            padding: 8
        }} >
            {/* IMAGE VIEW */}
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 9999,
                backgroundColor: COLORS.primary,
                overflow: "hidden"
            }} >
                <Image
                    source={image}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </View>

            {/* CONTENT VIEW */}
            <View style={{
                flex: 1,
                gap: 8,
            }}  >

                <View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 4
                    }} >
                        <Text style={{
                            fontFamily: "popSBold",
                            fontSize: 18,
                            color: COLORS.black70,
                            lineHeight: 28
                        }} >{name}</Text>
                        <Text style={{
                            fontFamily: "popReg",
                            fontSize: 12,
                            color: COLORS.black50
                        }}  >level {rate}</Text>
                    </View>
                    <Text style={{
                        fontFamily: "popReg",
                        fontSize: 14,
                        color: COLORS.black50
                    }} >{details}</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                    borderColor: COLORS.black30,
                    borderWidth: 1,
                    borderRadius: 999999,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignSelf: "flex-end"
                }} >
                    <Text style={{
                        fontFamily: "popReg",
                        color: COLORS.black80,
                        fontSize: 12
                    }} >View Products</Text>
                </View>

            </View>
        </View>
    )
}

export default DistributorCard;

const styles = StyleSheet.create({})