import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SHADOWS } from '@/constants/stylesheet'
import DistributorCard from '@/components/DistributorCard'
import { distributors } from '@/constants/data'
import { useRouter } from 'expo-router'
import NavBar from '@/components/NavBar'

const order = () => {

  const router :any = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <View style={{
      width: "100%",
      flex: 1,
      backgroundColor: COLORS.white
    }}>
      <NavBar/>
      <ScrollView contentContainerStyle={{
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        paddingHorizontal: 10,
      }} >
        <View>
          <Text style={a.latestOrderTxt} >Select a Distributor</Text>
        </View>

        <View style={{
          width: "100%",
          marginTop: 30
        }} >

          {loading === true ? (
            <View style={a.emptyNotifications} >
              <ActivityIndicator />
            </View>
          ) : distributors ? (
            distributors.map((item) => (
              <TouchableOpacity onPress={() => router.push(`/distributor/${item.id}`)} key={item.id} style={a.cardTouch}>
                <DistributorCard
                  title=''
                  image={{ uri: item.profileImage }}
                  route=''
                  name='Adepoju Samson'
                  details='Number 1 seller fo top jewelry, Bags of Rice and more'
                  rate={1}
                  id='2re'
                />
              </TouchableOpacity>
            ))
          ) : (
            <View style={a.emptyNotifications}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={require("../../assets/images/milk.avif")}
                width={200}
                height={200}
                resizeMode="contain"
              />
              {/* <Star1 size="80" color={COLORS.primary} variant="Bold" /> */}
              <Text style={a.emptyNotificationsText}>
                No distributors available
              </Text>
              
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  ) 
}

export default order

const a = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTouch: {
    width: "100%",
    marginBottom: 12
  },
  card: {
    height: 180,
    width: "100%",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    marginBottom: 16,
  },
  cardTop: {
    height: "46%",
    width: "100%",
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },
  cardBottom: {
    paddingTop: 16,
    paddingHorizontal: 10,
  },
  latestOrder: {
    width: "100%",
    margin: "auto",
    ...SHADOWS.medium,
  },
  latestOrderTxt: {
    marginTop: 40,
    fontFamily: 'popMid',
    fontSize: 22,
    textAlign: "left"
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
    color: COLORS.black60,
    fontSize: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  rate: {
    fontFamily: "popReg",
    color: COLORS.black60,
    fontSize: 12,
  },
  star: {
    fontSize: 12,
  },
  emptyNotifications: {
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emptyNotificationsText: {
    fontFamily: "popMid",
    color: COLORS.black60,
    fontSize: 14,
    textAlign: "center",
  },
  reloadButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 34,
    marginTop: 30,
  },
  reloadText: {
    fontFamily: 'popReg',
    color: COLORS.white,

  },
})
