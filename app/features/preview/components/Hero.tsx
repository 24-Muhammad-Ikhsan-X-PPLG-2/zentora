import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ChevronLeft, Eye, List, Star } from "lucide-react-native";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import BookmarkButton from "./BookmarkButton";

const { width } = Dimensions.get("window");

const Hero = () => {
  const { theme } = useTheme();
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("@/assets/images/cover/waguri-2.jpg")}
        style={{ width, height: 300 }}
        contentFit="cover"
        contentPosition={"top"}
      />
      <View
        style={{
          position: "absolute",
          width,
          height: 300,
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      ></View>
      {/* Tombol Back */}
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 3,
          width: 45,
          height: 45,
          top: 40,
          left: 25,
          borderRadius: 999,
          borderWidth: 1,
          borderColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.back()}
      >
        <ChevronLeft size={28} color={"white"} />
      </TouchableOpacity>
      {/* Tombol Bookmark */}
      <BookmarkButton />
      {/* Info Card */}
      <View
        style={{
          width,
          marginTop: -140,
          position: "relative",
          zIndex: 3,
          paddingHorizontal: 12,
          flexDirection: "row",
        }}
      >
        <Image
          source={require("@/assets/images/cover/waguri.jpg")}
          style={{ width: 200, height: 300, borderRadius: 12 }}
          contentFit="cover"
          contentPosition={"center"}
        />
        <View
          style={{
            marginLeft: 15,
            marginTop: 10,
            width: 200,
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 10,
            height: 270,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: Typography.fontFamily.bold,
                fontSize: 21,
                includeFontPadding: false,
                color: "white",
                flexShrink: 1,
                flexWrap: "wrap",
              }}
            >
              Karouko Hana Wa Rin To Saku
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontFamily: Typography.fontFamily.regular,
                fontSize: 16,
                includeFontPadding: false,
                color: "white",
              }}
            >
              AKA AKASAKA
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: Typography.fontFamily.regular,
                fontSize: 16,
                includeFontPadding: false,
                color: "white",
              }}
            >
              X MENGO YOKOYARI
            </Text>
          </View>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Star size={20} fill={"gold"} color={"gold"} />
              <Text
                style={{
                  fontFamily: Typography.fontFamily.regular,
                  includeFontPadding: false,
                  fontSize: 18,
                  color: getTextColor(theme),
                }}
              >
                4.5/5
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Eye size={20} color={"grey"} />
              <Text
                style={{
                  fontFamily: Typography.fontFamily.regular,
                  includeFontPadding: false,
                  fontSize: 18,
                  color: getTextColor(theme),
                }}
              >
                2.124.339
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <List size={20} color={"grey"} />
              <Text
                style={{
                  fontFamily: Typography.fontFamily.regular,
                  includeFontPadding: false,
                  fontSize: 18,
                  color: getTextColor(theme),
                }}
              >
                134 Chapters
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hero;
