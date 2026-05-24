import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const SkeletonCard = () => {
  const { theme } = useTheme();
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          placeholder={{ blurhash: "" }}
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
              Loading...
            </Text>
            <Text
              style={{
                fontFamily: Typography.fontFamily.regular,
                fontSize: 15,
                includeFontPadding: false,
                color: getTextColor(theme),
              }}
            >
              Loading...
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
            Loading...
          </Text>
        </View>
      </View>
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

export default SkeletonCard;
