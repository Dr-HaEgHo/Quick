import { StyleSheet, TextInput } from "react-native";

// primaryBlue #1864F7

export const COLORS = {
    primary: "#1864F7",
    secondary: "#0C233E",
    red: "#ee0000",
    white: "#fff",
    grayLight: "#F3F3F8",
    border: "rgba(0, 0, 0, 0.5)",
    blackTen: "rgba(0, 0, 0, 0.1)",
    black20: "rgba(0, 0, 0, 0.2)",
    black30: "rgba(0, 0, 0, 0.3)",
    black40: "rgba(0, 0, 0, 0.4)",
    black50: "rgba(0, 0, 0, 0.5)",
    black60: "rgba(0, 0, 0, 0.6)",
    black70: "rgba(0, 0, 0, 0.7)",
    black80: "rgba(0, 0, 0, 0.8)",
    black90: "rgba(0, 0, 0, 0.9)",
    white10: "rgba(255, 255, 255, 0.1)"
}

export const SHADOWS = {
    small: {
        shadowColor: COLORS.blackTen,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: COLORS.blackTen,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5.84,
        elevation: 5,
    },
    large: {
        shadowColor: COLORS.blackTen,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 8.84,
        elevation: 5,
    },
};

export const a = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "popBlack"
    },
    inner: {
        width: '94%',
        marginHorizontal: 'auto',
        alignItems: 'center',
        backgroundColor:"white"
    },
    headerText: {
        fontSize: 18,
        marginVertical: 20,
        fontFamily: 'popMid'
    },
    image: {
        width: 200,
        height: 140,
    },
    logoText: {
        fontSize: 48,
        marginBottom: 60,
        color: COLORS.primary,
        fontFamily: 'popBold'
    },
    form: {
        width: 320,
        gap: 12,
        backgroundColor: COLORS.white
    },
    loginInput: {
        width: 320,
        borderColor: COLORS.border,
        borderWidth: 1,
        padding: 16,
        borderRadius: 99999,
        color: COLORS.border,
        fontFamily: 'popReg'
    },
    loginButton: {
        width: "100%",
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 99999,
        color: COLORS.border,
        alignItems: 'center',
        marginTop: 36,
    },
    loginButtonDisabled: {
        width: 320,
        backgroundColor: COLORS.black50,
        padding: 16,
        borderRadius: 99999,
        color: COLORS.border,
        alignItems: 'center',
        marginTop: 36,
    },
    loginButtonTxt: {
        borderRadius: 99999,
        color: COLORS.white,
        justifyContent: "center",
        alignItems: 'center',
    },
    forgotPwd: {
        alignItems: "center",
        justifyContent:"center"
    },
    forgotPwdTxt:{
        color: COLORS.primary,

    },
    cardLayout: {
        width: '94%',
        margin: "auto",
        paddingVertical: 30,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 14,

    },
    card: {
        width: "48%",
        backgroundColor:COLORS.white,
        padding: 40,
        borderRadius: 12,
        ...SHADOWS.small,
        alignItems: "center",
        justifyContent: "center",
        gap: 6
    },
    cardTxt: {
        fontFamily: "popMid",
        fontSize: 16,
        color: COLORS.black50
    },
    titleName: {
        width: "94%",
        margin: "auto",
        paddingTop: 30,
    },
    title: {
        fontFamily: "popBold",
        fontSize: 38,
        color: COLORS.primary,
        
    },
    name: {
        fontFamily: "popReg",
        fontSize: 20,
        color: COLORS.secondary,
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
    wrapper:{
        width: "100%",
        flex: 1,
        paddingHorizontal: 20
    },
    textInput:{
        width: "100%",
        height: 160,
        borderColor: COLORS.primary,
        borderWidth : 2,
        paddingVertical: 22,
        paddingHorizontal: 12,
        borderRadius: 16,
        color: COLORS.border,
        alignItems: 'center',
        marginTop: 36,
    }
});