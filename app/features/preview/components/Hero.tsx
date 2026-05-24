import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ChevronLeft, List, Star } from "lucide-react-native";
import React, { FC } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import BookmarkButton from "./BookmarkButton";

const { width } = Dimensions.get("window");

type HeroProps = {
  title: string;
  imageUrl: string;
  chapters: string;
  mangaka1: string;
  mangaka2: string;
  status: string;
};

const Hero: FC<HeroProps> = ({
  imageUrl,
  title,
  chapters,
  mangaka1,
  mangaka2,
  status,
}) => {
  const { theme } = useTheme();
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width, height: 300 }}
        placeholder={{ blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj" }}
        transition={300}
        blurRadius={1}
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
          source={{ uri: imageUrl }}
          placeholder={{ blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj" }}
          transition={300}
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
              {title}
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
              {mangaka1}
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
              {mangaka2}
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
            {status.toLowerCase() === "ongoing" ? (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#5291d8",
                    borderRadius: 999,
                  }}
                ></View>
                <Text
                  style={{
                    fontFamily: Typography.fontFamily.regular,
                    includeFontPadding: false,
                    fontSize: 18,
                    color: getTextColor(theme),
                  }}
                >
                  Ongoing
                </Text>
              </View>
            ) : (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#6dd852",
                    borderRadius: 999,
                  }}
                ></View>
                <Text
                  style={{
                    fontFamily: Typography.fontFamily.regular,
                    includeFontPadding: false,
                    fontSize: 18,
                    color: getTextColor(theme),
                  }}
                >
                  Completed
                </Text>
              </View>
            )}
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
                {chapters} Chapters
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hero;
