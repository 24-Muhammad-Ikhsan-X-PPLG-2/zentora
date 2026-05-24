import { Colors, Typography } from "@/app/constants/design-tokens";
import { ArrowUpRight } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { withSpring } from "react-native-reanimated";
import useAnimate from "../hooks/useAnimate";

const ActionButton = () => {
  const { animatedStyle, scale } = useAnimate();
  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.95))}
      onPressOut={() => (scale.value = withSpring(1))}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: 25,
            right: 20,
            padding: 12,
            height: 100,
            backgroundColor: Colors.primary,
            borderRadius: 24,
            justifyContent: "center",
          },
          animatedStyle,
        ]}
      >
        <View style={{}}>
          <ArrowUpRight size={28} style={{ alignSelf: "flex-end" }} />
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
              width: "70%",
              fontSize: 16,
            }}
          >
            Start Reading
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ActionButton;
