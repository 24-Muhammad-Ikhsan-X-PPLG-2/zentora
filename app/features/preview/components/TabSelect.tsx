import { Typography } from "@/app/constants/design-tokens";
import {
  getBgColorReverse,
  getTextColor,
  getTextColorReverse,
} from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import React, { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const TabSelect = () => {
  const [currentTab, setCurrentTab] = useState("chapters");
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 12,
        marginTop: 30,
        alignSelf: "flex-start",
        gap: 5,
      }}
    >
      <Tab
        label="Chapters"
        isActive={currentTab === "chapters" ? true : false}
        onPress={() => setCurrentTab("chapters")}
      />
      <Tab
        label="Reviews"
        onPress={() => setCurrentTab("reviews")}
        isActive={currentTab === "reviews" ? true : false}
      />
    </ScrollView>
  );
};

type TabProps = {
  isActive?: boolean;
  label: string;
  onPress?: () => void;
};

const Tab: FC<TabProps> = ({ isActive = false, label, onPress = () => {} }) => {
  const { theme } = useTheme();
  if (!isActive) {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          height: 40,
          borderRadius: 999,
          alignSelf: "flex-start",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "grey",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            fontSize: 18,
            color: getTextColor(theme),
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        height: 40,
        backgroundColor: getBgColorReverse(theme),
        borderRadius: 999,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: Typography.fontFamily.regular,
          includeFontPadding: false,
          fontSize: 18,
          color: getTextColorReverse(theme),
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabSelect;
