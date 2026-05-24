import { Typography } from "@/app/constants/design-tokens";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const itemWidth = (width - 48) / 2;

const SkeletonCard = () => {
  return (
    <View style={{ width: itemWidth }}>
      <Image
        placeholder={{ blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj" }}
        transition={300}
        contentFit="cover"
        contentPosition={"center"}
        cachePolicy={"disk"}
        style={{ width: itemWidth, height: 300, borderRadius: 10 }}
      />
      <Text
        style={{
          fontFamily: Typography.fontFamily.regular,
          includeFontPadding: false,
          marginTop: 6,
        }}
      >
        Loading...
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            color: "gray",
          }}
        >
          Loading...
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: "gray",
            borderRadius: 999,
          }}
        ></View>
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            color: "gray",
          }}
        >
          Loading...
        </Text>
      </View>
    </View>
  );
};

export default SkeletonCard;
