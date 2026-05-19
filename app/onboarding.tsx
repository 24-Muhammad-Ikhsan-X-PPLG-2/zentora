import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography } from "./constants/design-tokens";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

interface OnboardingSlide {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: any;
  buttonText?: string;
}

const slides: OnboardingSlide[] = [
  {
    id: "1",
    title: "Masuk ke Dunia Tanpa Batas",
    subtitle: "Ribuan manga dari berbagai genre, langsung di genggaman.",
    backgroundImage: require("../assets/images/landing_photo2.jpg"),
  },
  {
    id: "2",
    title: "Baca Nyaman Tanpa Gangguan",
    subtitle: "Mode gelap, scroll halus, dan update cepat setiap hari.",
    backgroundImage: require("../assets/images/landing_photo3.jpg"),
  },
  {
    id: "3",
    title: "Mulai Petualanganmu",
    subtitle: "Pilih genre favoritmu dan temukan cerita terbaik.",
    backgroundImage: require("../assets/images/landing_photo4.jpg"),
    buttonText: "Mulai Sekarang",
  },
];

interface OnboardingSlideProps {
  slide: OnboardingSlide;
}

const OnboardingSlideComponent = ({ slide }: OnboardingSlideProps) => {
  return (
    <View style={styles.slideContainer}>
      <ImageBackground
        source={slide.backgroundImage}
        style={styles.backgroundImage}
        contentFit="cover"
        contentPosition="center"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.85)"]}
          style={styles.gradientOverlay}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

interface IndicatorProps {
  currentIndex: number;
  total: number;
}

const IndicatorDots = ({ currentIndex, total }: IndicatorProps) => {
  return (
    <View style={styles.indicatorContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentIndex ? "#c183e7" : "rgba(255, 255, 255, 0.3)",
              width: index === currentIndex ? 28 : 8,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const handleViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  const handleStartApp = async () => {
    await AsyncStorage.setItem("setup", "true");
    const categoriesFav = await AsyncStorage.getItem("categories-fav");
    if (categoriesFav) {
      router.replace("/(tabs)");
    }
    router.push("/category");
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={({ item }) => <OnboardingSlideComponent slide={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        />

        {/* Bottom UI Container */}
        <View
          style={[
            styles.bottomContainer,
            { paddingBottom: Math.max(insets.bottom, 20) },
          ]}
        >
          {/* Indicator Dots */}
          <IndicatorDots currentIndex={currentIndex} total={slides.length} />

          {/* Button Container */}
          <View style={styles.buttonContainer}>
            {currentIndex > 0 && (
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={handlePrev}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonTextSecondary}>← Kembali</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.button, styles.primaryButton, { flex: 1 }]}
              onPress={
                currentIndex === slides.length - 1 ? handleStartApp : handleNext
              }
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>
                {currentIndex === slides.length - 1
                  ? slides[currentIndex].buttonText || "Lanjut"
                  : "Lanjut"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="inverted" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f14",
  },
  slideContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentWrapper: {
    padding: 32,
    paddingTop: 40,
    paddingBottom: 50,
    justifyContent: "flex-end",
  },
  textContainer: {
    marginBottom: 120,
  },
  title: {
    fontSize: 32,
    fontFamily: Typography.fontFamily.extraBold,
    includeFontPadding: false,
    color: "#FFFFFF",
    marginBottom: 12,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Typography.fontFamily.regular,
    includeFontPadding: false,
    color: "#CCCCCC",
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: "transparent",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    transitionProperty: "all 0.3s ease",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingBottom: 25,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#c183e7",
    shadowColor: "#c183e7",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  secondaryButton: {
    paddingHorizontal: 20,
    backgroundColor: "rgba(193, 131, 231, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(193, 131, 231, 0.3)",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Typography.fontFamily.bold,
    includeFontPadding: false,
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  buttonTextSecondary: {
    fontSize: 14,
    fontFamily: Typography.fontFamily.semibold,
    includeFontPadding: false,
    color: "#c183e7",
    letterSpacing: 0.3,
  },
});
