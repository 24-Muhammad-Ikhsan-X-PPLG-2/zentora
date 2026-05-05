import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

interface OnboardingSlideProps {
  backgroundImage: any;
  title: string;
  subtitle: string;
  accentColor?: string;
}

export const OnboardingSlide = ({
  backgroundImage,
  title,
  subtitle,
  accentColor = "#c183e7",
}: OnboardingSlideProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
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
              {/* Accent bar */}
              <View
                style={[styles.accentBar, { backgroundColor: accentColor }]}
              />

              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "flex-end",
  },
  textContainer: {
    marginBottom: 120,
  },
  accentBar: {
    width: 4,
    height: 32,
    borderRadius: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 12,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#CCCCCC",
    lineHeight: 24,
    letterSpacing: 0.2,
  },
});
