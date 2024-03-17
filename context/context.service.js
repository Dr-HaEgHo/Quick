// import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardTick } from "iconsax-react-native";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isNewUser, setIsNewUser] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [loginLoad, setLoginLoad] = useState(false)
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({})

    const addToCart = (item) => {
        const inCart = cart.find(cartItem => cartItem.id === item.id ? true : false)

        inCart ? setCart([...cart]) : setCart([...cart, item])
    }

    const deleteFromCart = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id))
    }

    const handleSaveUserData = async (data) => {
        setLoginLoad(true)
        setUser({ name: data.name, password: data.password })

        await AsyncStorage.setItem("user_data", JSON.stringify(user))
        setIsAuth(true)
    }

    const handleLogout = () => {
        AsyncStorage.clear()

        setIsAuth(false)
        router.replace('/login')
    };

    useEffect(() => {

        (async () => {
            const userData = await AsyncStorage.getItem("user_data");
            const cartData = await AsyncStorage.getItem("cart_data");

            const parsed = await JSON.parse(userData)

            if (userData !== null) {
                console.log("user_data available:::", JSON.parse(userData));
                setIsNewUser(false)
            } else if (userData !== null && parsed.name) {
                console.log("use is logged in :::", JSON.parse(userData));
                setIsAuth(true)
                setUser(parsed);
            } else {
                console.log("There's no user Id, this user is new!!");
                setIsAuth(false)
            }

            if (cartData !== null) {
                console.log("cart items available:::", JSON.parse(cartData));
                setCart(JSON.parse(cartData));
            } else {
                console.log("There's no cart data available");
            }
        })();

    }, [])

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.setItem("cart_data", JSON.stringify(cart))
        }, 1000)
        // clearTimeout(setToAsync)
    }, [cart])

    useEffect(() => {



    }, [user])

    useEffect(() => {

        setTimeout(() => {
            isAuth === true && setLoginLoad(false)
        }, 1000)
    }, [isAuth, user])

    console.log("new user:", isNewUser, "isAuth:", isAuth)

    return (
        <GlobalContext.Provider
            value={{
                user,
                isNewUser,
                isAuth,
                cart,
                setCart,
                addToCart,
                deleteFromCart,
                handleSaveUserData,
                loginLoad,
                setLoginLoad,
                isAuth,
                handleLogout
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
