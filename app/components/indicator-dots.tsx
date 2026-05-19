import { Animated, StyleSheet, View } from "react-native";

interface IndicatorDotsProps {
  currentIndex: number;
  total: number;
  activeColor?: string;
  inactiveColor?: string;
  dotSize?: number;
}

export const IndicatorDots = ({
  currentIndex,
  total,
  activeColor = "#c183e7",
  inactiveColor = "rgba(255, 255, 255, 0.3)",
  dotSize = 8,
}: IndicatorDotsProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: isActive ? activeColor : inactiveColor,
                width: isActive ? dotSize * 3.5 : dotSize,
                height: dotSize,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    borderRadius: 4,
  },
});
