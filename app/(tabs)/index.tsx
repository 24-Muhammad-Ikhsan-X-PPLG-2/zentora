import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Moon, Sun } from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../constants/design-tokens";
import Dots from "../features/home/components/Dots";
import SearchBar from "../features/home/components/SearchBar";
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
    <SafeAreaView
      style={{ backgroundColor: theme === "light" ? "white" : "#303030" }}
    >
      <View style={{ paddingHorizontal: 22, alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            padding: 6,
            backgroundColor: theme === "light" ? "#e4e4e4" : "black",
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={toggleTheme}
        >
          {theme === "light" ? (
            <Sun size={28} color={"black"} />
          ) : (
            <Moon size={28} color={"white"} />
          )}
        </TouchableOpacity>
      </View>
      <SearchBar />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
          backgroundColor: theme === "light" ? "white" : "#303030",
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={theme === "light" ? "white" : "black"}
            titleColor={theme === "light" ? "black" : "white"}
            colors={theme === "light" ? ["black"] : ["white"]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
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
            )}
          />
          <Dots activeIndex={activeIndex} banners={banners} />
        </View>
        <View
          style={{
            width,
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 50,
            paddingHorizontal: 22,
            gap: 14,
            justifyContent: "center",
          }}
        >
          {Array.from({ length: 20 }).map((_, idx) => (
            <TouchableOpacity
              style={{ width: 180, height: 250, marginBottom: 32 }}
              key={idx}
              onPress={() => router.push("/preview")}
            >
              <Image
                source={require("@/assets/images/cover/waguri.jpg")}
                style={{ width: 180, height: 240, borderRadius: 12 }}
                contentFit="cover"
              />
              <Text
                style={{
                  marginTop: 3,
                  fontFamily: Typography.fontFamily.medium,
                  includeFontPadding: false,
                  color: theme === "light" ? "black" : "white",
                }}
              >
                Karouko Hana Wa Rin To Saku
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </SafeAreaView>
  );
};

export default Main;
