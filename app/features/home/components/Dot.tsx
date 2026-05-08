import { FC } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type DotProps = {
  isActive: boolean;
};

const Dot: FC<DotProps> = ({ isActive }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(isActive ? 22 : 8, {
      duration: 500,
    }),
    opacity: withTiming(isActive ? 1 : 0.4, {
      duration: 500,
    }),
    transform: [
      {
        scale: withTiming(isActive ? 1.1 : 1, {
          duration: 500,
        }),
      },
    ],
  }));
  return (
    <Animated.View
      style={[
        {
          width: isActive ? 20 : 8,
          height: 8,
          borderRadius: 999,
          backgroundColor: isActive ? "#c183e7" : "#d1d5db",
        },
        animatedStyle,
      ]}
    ></Animated.View>
  );
};

export default Dot;
