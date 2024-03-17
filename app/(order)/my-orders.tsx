import { View, Text } from 'react-native'
import React from 'react'

const MyOrders = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }} >
      <Text>You have No orders yet.</Text>
    </View>
  )
}

export default MyOrders