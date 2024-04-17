import HomeCard from "@/components/HomeCard";
import LocationPrompt from "@/components/Location";
import NavBar from "@/components/NavBar";
import OrderCard from "@/components/OrderCard";
import { COLORS, a } from "@/constants/stylesheet";
import { GlobalContext } from "@/context/context.service";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";


export default function Home() {

    const { user, isAuth, setIsClear } = useContext(GlobalContext);
    const router : any = useRouter()

    useEffect(() => {
        // if (!isAuth) {
        //     router.replace('/home')
        // } 
    }, [isAuth])


    return (
        <View style={{
            width: "100%",
            flex: 1,
            backgroundColor: COLORS.white
        }} >
            <LocationPrompt/>
            <NavBar/>
            <ScrollView contentContainerStyle={{
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 80
            }} >
                <View style={a.titleName} >
                    <Text style={a.title} >Hi {user?.name}!</Text>
                    <Text style={a.name} >Welcome Back</Text>
                </View>
                <View style={a.cardLayout} >
                    <HomeCard route="/order" image={require('../../assets/images/cartblue.png')} title="Place Order" />
                    <HomeCard route="/my-orders" image={require('../../assets/images/orderblue.png')} title="My Order" />
                    <HomeCard route="/promotions" image={require('../../assets/images/promoblue.png')} title="Promotions" />
                    <HomeCard route="/points" image={require('../../assets/images/pointblue.png')} title="My Points" />
                    <HomeCard route="/tutorials" image={require('../../assets/images/orderblue.png')} title="Tutorials" />
                    <HomeCard route="/review" image={require('../../assets/images/star.png')} title="Give Review" />

                    <View style={a.latestOrder} >
                        <Text style={a.latestOrderTxt} >Latest order</Text>
                        <View style={{
                            marginBottom: 40
                        }} >
                            <Text style={{
                                fontFamily: "popSBold",
                                fontSize: 14,
                            }} >{ }</Text>
                            <OrderCard
                                image={require('../../assets/images/milk.avif')}
                                title="Buttercup Milkshake"
                                description="3 Grams of whole milk butter cup miklkshake for a price of #5,000"
                                time="9:00am"
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}