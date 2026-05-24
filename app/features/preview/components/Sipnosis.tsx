import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import React, { FC } from "react";
import { Text, View } from "react-native";

type SinopsisProps = {
  sinopsis: string | null;
};

const Sinopsis: FC<SinopsisProps> = ({ sinopsis }) => {
  const { theme } = useTheme();
  return (
    <View style={{ paddingHorizontal: 12, marginTop: 20 }}>
      <Text
        style={{
          fontFamily: Typography.fontFamily.regular,
          includeFontPadding: false,
          color: getTextColor(theme),
        }}
      >
        {sinopsis ?? "Loading..."}
      </Text>
    </View>
  );
};

export default Sinopsis;
