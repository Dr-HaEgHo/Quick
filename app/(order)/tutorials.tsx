import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import OrderCard from '@/components/OrderCard'
import { a } from '@/constants/stylesheet'

const points = () => {
    return (
        <ScrollView contentContainerStyle={{
            alignItems: "center",

        }} style={{
            flex: 1,
            paddingHorizontal: 20
        }} >
            <View style={a.latestOrder} >
                        <Text style={a.latestOrderTxt} ></Text>
                        <TouchableOpacity style={{
                            marginBottom: 40
                        }} >
                            <OrderCard
                                image={require('../../assets/images/best.jpg')}
                                title="Find the best products"
                                description="Due to the vast number of merchants and products available on the platform, it is easy to get lost between products. Here's a quick guide on how to navigate"
                                time="5:00 minutes"
                            />
                            <OrderCard
                                image={require('../../assets/images/pos.jpg')}
                                title="How to pay like a pro"
                                description="A lot of clients have raised the issue of secure payments, if you want to pay securely, let's show you how..."
                                time="9:00 minutes"
                            />
                        </TouchableOpacity>
                    </View>
        </ScrollView>
    )
}

export default points