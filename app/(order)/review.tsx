import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, a } from '@/constants/stylesheet'

const review = () => {
  return (
    <SafeAreaView style={a.container} >
        <View style={a.wrapper}>
            <Text style={{
                width: "100%",
                
            }} >Write your review</Text>
            <TextInput style={a.textInput} multiline={true}/>

            <TouchableOpacity style={a.loginButton}>
                <Text style={a.loginButtonTxt}>Give Review</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default review;