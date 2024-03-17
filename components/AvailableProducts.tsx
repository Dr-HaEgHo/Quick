import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { Call, InfoCircle, Location } from 'iconsax-react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '@/constants/stylesheet';
import { DistributorCardProps, ProductProps } from '@/constants/Types';

const AvailableProducts: FC<ProductProps> = (props) => {

    const router :any = useRouter();

    return (
        <View style={a.availableCard}>
            <View style={a.riderDescription}>
                <View style={a.riderImage}>
                    <Image source={ props.image} width={56} height={56} />
                </View>

                <View style={a.riderDetails}>
                    <Text style={a.riderName}> {props.name}</Text>
                    <View style={a.riderLocation}>
                        <Location size="18" color={COLORS.black80} variant="Bold" />
                        <Text style={a.riderLocationText}>{props.name}</Text>
                    </View>
                    <Text style={a.rierBikeType}>Bike Type: {props.name}</Text>
                </View>

                <View>
                    <Image
                        
                        source={props.image }
                        style={{
                            width: 64,
                            height: 64
                        }}
                        resizeMode="contain"
                    />
                    <View  />
                </View>
            </View>

            <View style={a.buttons}>
                <TouchableOpacity style={a.button}>
                    <Call size="16" color="#fff" variant="Bold" />
                    <Text style={a.buttonTextWhite}>CALL RIDER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push(`/props-info/${props.id}`)}
                    style={a.buttonLine}
                >
                    <InfoCircle size="16" color="#19196F" />
                    <Text style={a.buttonText}>VIEW FULL INFO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AvailableProducts;

const a = StyleSheet.create({
    availableCard: {
        width: "100%",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        fontFamily: "popEBold",
        paddingBottom: 16,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: COLORS.black30
    },

    riderDescription: {
        flexDirection: "row",
        alignItems: "center",
    },
    riderImage: {
        width: 56,
        height: 56,
        borderRadius: 30,
        overflow: "hidden"
    },
    riderDetails: {
        flex: 1,
        marginLeft: 8,
    },
    riderName: {
        color: COLORS.primary,
        fontFamily: "popBold",
        fontSize: 18,
        marginBottom: 6
    },
    riderLocation: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    riderLocationText: {
        fontFamily: "popReg",
        fontSize: 12,
        color: COLORS.black80,
    },
    rierBikeType: {
        fontFamily: "popReg",
        fontSize: 12,
        color: COLORS.black80,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: COLORS.primary,
        width: 160,
        height: 38,
        borderRadius: 20,
        justifyContent: "center"
    },
    buttonLine: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 160,
        height: 38,
        borderRadius: 20,
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "popEBold",
        fontSize: 14,
        color: COLORS.primary,
    },
    buttonTextWhite: {
        fontFamily: "popEBold",
        fontSize: 14,
        color: COLORS.white
    },

})