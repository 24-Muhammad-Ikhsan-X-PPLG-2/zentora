import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Colors } from "./constants/design-tokens";
import { useOnBoarding } from "./providers/on-boarding-context";

export default function Index() {
  const { isOnBoarding, isLoading } = useOnBoarding();
  useEffect(() => {
    if (isLoading) return;
    if (isOnBoarding) {
      router.replace("/landing");
    } else {
      router.replace("/(tabs)");
    }
  }, [isOnBoarding, isLoading]);
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
}
