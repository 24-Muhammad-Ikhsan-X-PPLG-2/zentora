import { Typography } from "@/app/constants/design-tokens";
import { router } from "expo-router";
import { Menu, Search } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
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
        onPress={() => router.push("/search")}
      >
        <Search size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
