import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { OrderCardProps } from '@/constants/Types';
import { COLORS } from '@/constants/stylesheet';

const OrderCard: FC<OrderCardProps> = ({ image, title, description, time }) => {
    return (
        <View style={{
            marginBottom: 16
        }} >


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
                    width: 60,
                    height: 80,
                    borderRadius: 6,
                    backgroundColor: COLORS.primary,
                    overflow: "hidden"
                }} >
                    <Image
                        source={ image }
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
                            }} >{title}</Text>
                            <Text style={{
                                fontFamily: "popReg",
                                fontSize: 12,
                                color: COLORS.black50
                            }}  >{time}</Text>
                        </View>
                        <Text style={{
                            fontFamily: "popReg",
                            fontSize: 14,
                            color: COLORS.black50
                        }} >{description}</Text>
                    </View>

                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 4
                    }} >
                    </View>

                </View>
            </View>
        </View>
    )
}

export default OrderCard;

const styles = StyleSheet.create({})