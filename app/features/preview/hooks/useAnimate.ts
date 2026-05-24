import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const useAnimate = () => {
  const scale = useSharedValue(1);
  const transformY = useSharedValue(150);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
      {
        translateY: transformY.value,
      },
    ],
  }));
  useEffect(() => {
    transformY.value = withSpring(0);
  }, []);
  return {
    animatedStyle,
    scale,
  };
};

export default useAnimate;
