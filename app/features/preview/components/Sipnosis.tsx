import { Typography } from "@/app/constants/design-tokens";
import { getTextColor } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import React from "react";
import { Text, View } from "react-native";

const Sipnosis = () => {
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, a,
        reprehenderit fugiat perferendis expedita odit, pariatur quaerat
        voluptatibus minus iste quod doloribus aut. Et similique aperiam eius,
        deleniti consequatur nisi quod praesentium cumque aut vitae explicabo
        accusamus perspiciatis ratione velit ad reiciendis! Ducimus distinctio
        aspernatur minus molestiae non consequatur repudiandae?
      </Text>
    </View>
  );
};

export default Sipnosis;
