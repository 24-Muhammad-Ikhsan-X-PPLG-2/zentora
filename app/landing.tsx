import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Typography } from "./constants/design-tokens";

const Landing = () => {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/landing_photo.webp")}
        style={styles.containerImg}
        contentFit="cover"
        contentPosition={"center"}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.linearGradientStyle}
        >
          <View style={styles.contentMain}>
            <Text style={styles.title}>Zentora</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#c183e7",
                paddingVertical: 14,
                borderRadius: 30,
                alignItems: "center",
                shadowColor: "#c183e7",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.3,
                shadowRadius: 16,
                elevation: 12,
              }}
              onPress={() => {
                router.push("/onboarding");
              }}
            >
              <Text
                style={{
                  fontFamily: Typography.fontFamily.bold,
                  includeFontPadding: false,
                  fontSize: 16,
                  color: "white",
                }}
              >
                Let's Start!
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="inverted" />
    </>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
  },
  linearGradientStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentMain: {
    padding: 32,
    paddingBottom: 50,
  },
  title: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: 50,
    includeFontPadding: false,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
});

export default Landing;
