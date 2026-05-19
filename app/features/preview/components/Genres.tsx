import { Typography } from "@/app/constants/design-tokens";
import { getBgColorReverse, getTextColorReverse } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Genres = () => {
  const { theme } = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 20,
        paddingHorizontal: 12,
        gap: 5,
        alignSelf: "flex-start",
      }}
    >
      {Array.from({ length: 3 }).map((_, idx) => (
        <View
          style={{
            backgroundColor: getBgColorReverse(theme),
            height: 30,
            borderRadius: 999,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          key={idx}
        >
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
              color: getTextColorReverse(theme),
            }}
          >
            Romance
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Genres;
