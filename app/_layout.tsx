import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GlobalProvider } from '../context/context.service'

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    popBlack: require("../assets/fonts/Poppins-Black.ttf"),
    popBold: require("../assets/fonts/Poppins-Bold.ttf"),
    popEBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    popSBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    popMid: require("../assets/fonts/Poppins-Medium.ttf"),
    popReg: require("../assets/fonts/Poppins-Regular.ttf"),
    popLight: require("../assets/fonts/Poppins-Light.ttf"),
    popELight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    popThin: require("../assets/fonts/Poppins-Thin.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      display: "none"
    },
  };

  return (
    <GlobalProvider children>
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}  />
        <Stack.Screen name="(dash)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      </ThemeProvider>
    </GlobalProvider>
  );
}
