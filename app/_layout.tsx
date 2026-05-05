import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "./constants/design-tokens";

export default function RootLayout() {
  const [isFinishSetup, setIsFinishSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (!fontsLoaded) return;
      const setupFinish = await AsyncStorage.getItem("setup");
      if (setupFinish && setupFinish === "true") {
        setIsFinishSetup(true);
      }
      setTimeout(async () => {
        setIsLoading(false);
        // await AsyncStorage.multiRemove(["setup", "categories-fav"]);
      }, 2000);
    })();
  }, [fontsLoaded]);
  if (!fontsLoaded || isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          style={{ width: 128, height: 128, borderRadius: 32 }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 32,
            color: "white",
            fontWeight: 800,
          }}
        >
          Zentora
        </Text>
      </View>
    );
  if (isFinishSetup) {
    return (
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(tabs)/index" />
        </Stack>
      </SafeAreaProvider>
    );
  }
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="category" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(tabs)/index" />
      </Stack>
    </SafeAreaProvider>
  );
}
