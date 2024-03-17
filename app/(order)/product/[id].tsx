import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, TextInput, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { COLORS, SHADOWS } from '@/constants/stylesheet'
import NavBar from '@/components/NavBar'
import { useGlobalSearchParams, useRouter } from 'expo-router'
// import { products } from '@/constants/data'
import { ArrowLeft2, Location, Strongbox, Strongbox2 } from 'iconsax-react-native'
import useFetch from '@/hooks/useFetch'
import { GlobalContext } from '@/context/context.service'

const OrderProduct = () => {

  
  const router : any = useRouter()
  const params = useGlobalSearchParams()

  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<any>({})
  const { cart, setCart, addToCart } = useContext(GlobalContext)
  const { data, isLoading, error, refetch } = useFetch(`https://dummyjson.com/products/${params.id}`, {})

  useEffect(() => {
    setProduct(data)
  }, [data])

  
  console.log(params.id)
  console.log(data)

  return (
    <View style={a.layout}>
      <NavBar/>
      {/* LOADER LOADER */}
      {isLoading === true
        ?
        (
          <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}> 
            <ActivityIndicator /> 
          </View>
        ) 
        :
        product.title ? (<SafeAreaView style={a.safeContainer}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 28,
            }}
            style={a.scrollContainer}
          >
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "popBold",
                fontSize: 18,
                lineHeight: 32,
                color: COLORS.black80,
              }}
            >

            </Text>

            <View
              style={{
                width: "100%",
                aspectRatio: 1.7,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: `${product?.images[0]}`,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>

            {/* FRESH CATFISH, TITLE AND PRICE */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontFamily: "popBold",
                  fontSize: 18,
                  lineHeight: 32,
                  color: COLORS.black70,
                }}
              >
                {product.title && product.title}
              </Text>

              <Text style={a.profileLinkTxt}>
                {" "}
                <Text style={a.strong}>₦ {product.price && product.price},000</Text>
              </Text>
            </View>



            <View>
              <View style={a.profileLink}>
                <Strongbox color={COLORS.black50} size="16" />
                <Text style={a.profileLinkTxt}>
                  {product.stock && product.stock} left in stock
                </Text>
              </View>
            </View>

            <Text style={a.details}>Details</Text>
            <View style={a.detailsView}>
              <Text style={a.dvTxt}>
                {product.description && product.description}
              </Text>
            </View>


            <TouchableOpacity
              onPress={() => addToCart(product)}
              style={{
                // width: "100%",
                flex: 1,
                height: 48,
                marginHorizontal: 40,
                marginTop: 30,
                borderRadius: 6,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: "popMid",
                  fontSize: 16,
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/cart')}
              style={{
                // width: "100%",
                flex: 1,
                height: 48,
                marginHorizontal: 40,
                marginTop: 30,
                borderRadius: 6,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: "popMid",
                  fontSize: 16,
                }}
              >
                Go to Cart
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>) 
          :
          (<View style={{
            flex:1,
            alignItems: "center",
            justifyContent: "center"
          }} ><Text>An error occured</Text>
          </View>)
        }

     

      
    </View>
  )
}

export default OrderProduct



const a = StyleSheet.create({
  register: {
    marginTop: 30,
    alignItems: "center",
  },
  headTxt: {
    fontSize: 28,
    color: COLORS.primary,
    fontFamily: "space500",
    marginBottom: 12,
  },
  layout: {
    backgroundColor: COLORS.white,
    flex: 1,
    
  },
  topBar: {
    height: 95,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    width: "100%",
  },
  topBarItems: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 10,
  },
  titleTxt: {
    fontFamily: "space500",
    color: COLORS.white,
    fontSize: 24,
    flex: 1,
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },

  // OTHER STYLES BEGIN HERE
  safeContainer: {
    paddingHorizontal: 16,
    flex: 1,
    width: "100%",
  },
  topView: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 24,
  },
  topTxt: {
    fontFamily: "space300",
    fontSize: 14,
    color: COLORS.black50,
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    height: 48,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "popMid",
    fontSize: 16,
  },
  profileLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    width: "100%",
    height: 40,
  },
  profileLinkTxt: {
    fontFamily: "popReg",
    fontSize: 14,
    color: COLORS.black70,
  },
  profileLinkTxt2: {
    fontFamily: "popReg",
    fontSize: 18,
    color: COLORS.black80,
  },
  strong: {
    fontFamily: "popSBold",
  },
  details: {
    fontFamily: "popReg",
    fontSize: 16,
    color: COLORS.black80,
    marginTop: 8,
    marginBottom: 8,
  },
  detailsView: {
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.blackTen,
  },
  dvTxt: {
    fontFamily: "popReg",
    fontSize: 16,
    color: COLORS.black80,
  },
});
