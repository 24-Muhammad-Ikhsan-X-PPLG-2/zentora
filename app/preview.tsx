import { Image } from "expo-image";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Typography } from "./constants/design-tokens";

const { width } = Dimensions.get("window");

const Preview = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width,
            height: 450,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              width,
              height: 450,
              zIndex: 2,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          ></View>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 38,
              height: 38,
              borderRadius: 999,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
              top: 50,
              left: 25,
            }}
            onPress={() => router.back()}
          >
            <ArrowLeft size={28} color={"black"} />
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/cover/waguri-2.jpg")}
            style={{ width, height: 450 }}
            contentFit="cover"
            contentPosition={"top"}
          />
          <Text
            style={{
              fontFamily: Typography.fontFamily.extraBold,
              fontSize: 26,
              includeFontPadding: false,
              position: "absolute",
              zIndex: 3,
              color: "#fff",
            }}
          >
            Karouko Hana Wa Rin To Saku
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: -50,
            height: 1000,
            width,
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            position: "relative",
            zIndex: 3,
          }}
        ></View>
      </ScrollView>
    </>
  );
};

export default Preview;
