import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Menu, Search } from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../constants/design-tokens";
import Dots from "../features/home/components/Dots";
import getBgColor from "../lib/getBgColor";
import { useTheme } from "../providers/theme-context";

const { width } = Dimensions.get("window");

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRefreshing(false);
  };
  const banners = [
    require("@/assets/images/banner/banner-1.webp"),
    require("@/assets/images/banner/banner-2.jpg"),
    require("@/assets/images/banner/banner-3.webp"),
  ];
  return (
    <SafeAreaView style={{ backgroundColor: getBgColor(theme), flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          paddingHorizontal: 18,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Menu size={28} />
          <Text
            style={{
              fontFamily: Typography.fontFamily.extraBold,
              includeFontPadding: false,
              fontSize: 32,
            }}
          >
            Zentora
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 40,
            width: 40,
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push("/preview")}
        >
          <Search size={18} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          loop
          autoPlay
          width={width}
          height={220}
          data={banners}
          scrollAnimationDuration={1200}
          autoPlayInterval={5000}
          mode="parallax"
          onSnapToItem={(idx) => setActiveIndex(idx)}
          modeConfig={{
            parallaxScrollingOffset: 5,
            parallaxScrollingScale: 0.92,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 6,
                  backgroundColor: "white",
                  borderRadius: 28,
                }}
              >
                <Image
                  source={item}
                  style={{
                    width: width * 0.9,
                    height: 210,
                    borderRadius: 28,
                  }}
                  contentFit="cover"
                />
              </View>
            </View>
          )}
        />
        <Dots activeIndex={activeIndex} banners={banners} />
      </ScrollView>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </SafeAreaView>
  );
};

export default Main;
