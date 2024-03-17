import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '@/constants/stylesheet'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import { GlobalContext } from '@/context/context.service';

const NavBar = () => {

  const router: any = useRouter();
  const { cart, setCart } = useContext(GlobalContext)

  return (
    <View style={{
      width: "100%",
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: COLORS.secondary,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }} >
      <View style={{

      }}>
        <Link href="/modal" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="bars"
                size={25}
                color={COLORS.white}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      </View>
      <View style={{ 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }} >

        <Pressable
          // onPress={() => router.back()}
        >
          {({ pressed }) => (
            <FontAwesome
              name="bell"
              size={20}
              color={COLORS.white}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>

        <View style={{
          position: "relative"
        }}>
          <Pressable onPress={() => router.push(`/cart`)}>
            {({ pressed }) => (
              <FontAwesome
                name="shopping-cart"
                size={20}
                color={COLORS.white}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}

          </Pressable>

          <View style={{
            width: 14,
            height: 14,
            backgroundColor: COLORS.red,
            borderRadius: 999999,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -5,
            right: 10,
          }} >
            <Text style={{
              color: COLORS.white,
              fontSize: 8
            }} >{cart?.length}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default NavBar