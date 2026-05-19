import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import { Image } from "expo-image";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CardChapterProps = {
  no: number;
};

const CardChapter: FC<CardChapterProps> = ({ no }) => {
  const { theme } = useTheme();
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Image
          source={require("@/assets/images/cover/waguri-3.jpeg")}
          style={{ width: 110, height: 110, borderRadius: 24 }}
          contentFit="cover"
          contentPosition={"center"}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: 100,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: Typography.fontFamily.regular,
                includeFontPadding: false,
                fontSize: 20,
                color: getTextColor(theme),
              }}
            >
              Chap {no}
            </Text>
            <Text
              style={{
                fontFamily: Typography.fontFamily.regular,
                fontSize: 15,
                includeFontPadding: false,
                color: getTextColor(theme),
              }}
            >
              Prologue
            </Text>
          </View>
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              fontSize: 15,
              includeFontPadding: false,
              color: "grey",
            }}
          >
            20/04/2022
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: theme === "light" ? "#d4d4d4" : "#4e4e4e",
          marginTop: 10,
        }}
      ></View>
    </View>
  );
};

export default CardChapter;
