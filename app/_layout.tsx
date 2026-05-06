import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OnBoardingProvider } from "./providers/on-boarding-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
  return (
    <SafeAreaProvider>
      <OnBoardingProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </OnBoardingProvider>
    </SafeAreaProvider>
  );
}
