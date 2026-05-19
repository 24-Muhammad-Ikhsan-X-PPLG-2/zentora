import { ArrowUpRight } from "lucide-react-native";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors, Typography } from "./constants/design-tokens";
import CardChapter from "./features/preview/components/CardChapter";
import Genres from "./features/preview/components/Genres";
import Hero from "./features/preview/components/Hero";
import Sipnosis from "./features/preview/components/Sipnosis";
import TabSelect from "./features/preview/components/TabSelect";
import getBgColor from "./lib/getBgColor";
import { useTheme } from "./providers/theme-context";

const Preview = () => {
  const { theme } = useTheme();
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
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          position: "relative",
          backgroundColor: getBgColor(theme),
        }}
      >
        {/* Hero */}
        <Hero />
        <View>
          {/* Genres */}
          <Genres />
          {/* Sinopsis */}
          <Sipnosis />
          {/* Select */}
          <TabSelect />
          <View
            style={{
              marginTop: 40,
              paddingHorizontal: 12,
              flexDirection: "column",
              gap: 15,
              paddingBottom: 50,
            }}
          >
            {Array.from({ length: 10 }).map((_, idx) => {
              const no = ++idx;
              return <CardChapter no={no} key={idx} />;
            })}
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPressIn={() => (scale.value = withSpring(0.95))}
        onPressOut={() => (scale.value = withSpring(1))}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 25,
              right: 25,
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
    </>
  );
};

export default Preview;
