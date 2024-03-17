import { ActivityIndicator, Image, Keyboard, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { COLORS, a } from '@/constants/stylesheet'
import { useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { GlobalContext } from '@/context/context.service';

export default function TabOneScreen() {

  const router: any = useRouter()

  const [visible, setVisible] = useState(false)
  const [isKeyboardActive, setIsKeyboardActive] = useState(false)
  const { isAuth,error, handleSaveUserData, loginLoad, setLoginLoad } = useContext(GlobalContext)
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isClear, setIsClear] = useState(false)


  const handleSubmit = () => {
    setLoginLoad(true)
    handleSaveUserData({name, password})

    setName("")
    setPassword("")
  }

  useEffect(() => {
    if (
      name !== "" &&
      password !== ""
    ) {
      setIsClear(true)
    } else setIsClear(false)

   },[name, password])


  useEffect(() => { 
    if (isAuth) {
      router.replace('/home')
    }
  } , [isAuth])

  
  return (

    
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
        flex: 1, 
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={a.inner} >
          <Text style={a.logoText} >Quick!</Text>
          <Image source={require('../../assets/images/mac.png')} style={a.image} />
          <Text style={a.headerText} >Log In</Text>

          <View style={a.form}>
            <TextInput style={a.loginInput} value={name} onChangeText={text => setName(text)} placeholderTextColor={COLORS.black40} placeholder='Your Name' />
            <View style={{
              backgroundColor: COLORS.white,
              position: "relative"
            }} >
              <TextInput style={a.loginInput} value={password} onChangeText={text => setPassword(text)}  secureTextEntry={!visible} placeholderTextColor={COLORS.black40} placeholder='Password' />
              {<TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{
                position: "absolute",
                top: 5,
                right:11,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent:"center"
              }} >
                {visible ? <EyeSlash variant='Bold' color={COLORS.black40} size="30" /> : <Eye variant='Bold' color={COLORS.black40} size="30" /> }
              </TouchableOpacity> }
            </View>
            <TouchableOpacity disabled={!isClear} onPress={() => handleSubmit()} style={ isClear ? a.loginButton : a.loginButtonDisabled} >
              { loginLoad ? <ActivityIndicator/> : <Text style={a.loginButtonTxt} > Login </Text>}
            </TouchableOpacity>
            <Pressable style={a.forgotPwd} >
              <Text style={a.forgotPwdTxt} >Forgot Password?</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    // </TouchableWithoutFeedback>
  );
}

