import { View, Text } from 'react-native'
import React from 'react'

const points = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }} >
      <Text>You have No points yet.</Text>
    </View>
  )
}

export default points