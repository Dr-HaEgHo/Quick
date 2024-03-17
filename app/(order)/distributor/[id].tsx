import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { COLORS, SHADOWS } from '@/constants/stylesheet'
import AvailableProducts from '@/components/AvailableProducts'
import { distributors, products } from '@/constants/data'
import Products from '@/components/Products'
import { useRouter } from 'expo-router'
import NavBar from '@/components/NavBar'
import useFetch from '@/hooks/useFetch'
import { GlobalContext } from '@/context/context.service'

const DistributorInfo = () => {

  const router: any = useRouter();
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<any>([])
  const { cart, setCart, addToCart } = useContext(GlobalContext)
  // const { data, isLoading, error, refetch } = useFetch('https://aliexpress-datahub.p.rapidapi.com/item_search', {})
  const { data, isLoading, error, refetch } = useFetch('https://dummyjson.com/products', {})


  useEffect(() => { 
    setProducts(data)
  }, [data])
  
  console.log(products)

  return (
    <ScrollView contentContainerStyle={{
      
      paddingBottom: 50,
    }} >
      <NavBar/>
      
      <View style={a.cardWrapper}>
        {isLoading === true ? (
          <View style={a.emptyNotifications} >
            <ActivityIndicator />
          </View>
        ) : products.products ? (
          products?.products.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/product/${item?.id}`)}
              style={a.cardTouch}
            >
              <View style={a.card}>
                <View style={a.cardTop}>
                  <Image
                    source={{uri:`${item.images[0]}`}}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={a.cardBottom}>
                  <View style={a.nameIcon}>
                    <Text style={a.username}>
                      {item?.title.slice(0, 15)}...
                    </Text>
                  </View>
                  <Text style={a.bikename}>
                    price: ₦ {item?.price},000
                  </Text>
                  <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={a.addCart}>
                    <Text style={{
                      color: "white",
                      fontFamily: "popReg",
                      fontSize: 14
                    }} >Add to Cart</Text>
                    
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={a.emptyNotifications}>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../../../assets/images/milk.avif")}
              width={200}
              height={200}
              resizeMode="contain"
            />
            {/* <Star1 size="80" color={COLORS.primary} variant="Bold" /> */}
            <Text style={a.emptyNotificationsText}>
              No distributors available
            </Text>
            <TouchableOpacity
              // onPress={() => {
              //   dispatch(getAllRiders());
              // }}
              style={a.reloadButton}
            >
              <Text style={a.reloadText}>Reload</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default DistributorInfo

const a = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingTop: 20,
    paddingHorizontal: 14,
  },
  cardTouch: {
    width: "48%",
    ...SHADOWS.medium,
  },
  card: {
    height: 180,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 0,
    backgroundColor: COLORS.grayLight
  },
  cardTop: {
    height: "46%",
    width: "100%",
    overflow: "hidden",
  },
  cardBottom: {
    paddingTop: 16,
    paddingHorizontal: 10,
  },
  nameIcon: {
    flexDirection: "row",
    //   alignItems: "center",
    gap: 8,
  },
  username: {
    fontFamily: "popSBold",
    color: COLORS.secondary,
    fontSize: 16,
    marginBottom: 8,
  },
  bikename: {
    fontFamily: "popReg",
    color: COLORS.black60,
    fontSize: 12,
  },
  addCart: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.primary,
    alignSelf: "flex-start",
    borderRadius: 999999,
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
