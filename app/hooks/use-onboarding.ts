import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const ONBOARDING_KEY = "zentora_onboarding_completed";
const ONBOARDING_VERSION_KEY = "zentora_onboarding_version";

interface UseOnboardingOptions {
  version?: string;
  storageKey?: string;
}

interface UseOnboardingReturn {
  showOnboarding: boolean;
  isLoading: boolean;
  completeOnboarding: () => Promise<void>;
  resetOnboarding: () => Promise<void>;
}

/**
 * Hook to manage onboarding state
 * Handles AsyncStorage persistence and version tracking
 *
 * @example
 * const { showOnboarding, isLoading, completeOnboarding } = useOnboarding();
 *
 * if (isLoading) return <SplashScreen />;
 * if (showOnboarding) return <OnboardingScreen onComplete={completeOnboarding} />;
 * return <MainApp />;
 */
export const useOnboarding = ({
  version = "1.0",
  storageKey = ONBOARDING_KEY,
}: UseOnboardingOptions = {}): UseOnboardingReturn => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const completed = await AsyncStorage.getItem(storageKey);
      const savedVersion = await AsyncStorage.getItem(
        `${ONBOARDING_VERSION_KEY}_${version}`,
      );

      // Show onboarding if:
      // 1. Never completed
      // 2. Different version (allows showing new onboarding on updates)
      if (!completed || !savedVersion) {
        setShowOnboarding(true);
      } else {
        setShowOnboarding(false);
      }
    } catch (error) {
      console.warn("Error checking onboarding status:", error);
      // Default to showing onboarding on error
      setShowOnboarding(true);
    } finally {
      setIsLoading(false);
    }
  };

  const completeOnboarding = async () => {
    try {
      await Promise.all([
        AsyncStorage.setItem(storageKey, "true"),
        AsyncStorage.setItem(`${ONBOARDING_VERSION_KEY}_${version}`, version),
      ]);
      setShowOnboarding(false);
    } catch (error) {
      console.error("Error completing onboarding:", error);
      throw error;
    }
  };

  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(storageKey);
      setShowOnboarding(true);
    } catch (error) {
      console.error("Error resetting onboarding:", error);
      throw error;
    }
  };

  return {
    showOnboarding,
    isLoading,
    completeOnboarding,
    resetOnboarding,
  };
};

/**
 * Hook to track onboarding analytics
 * Logs slide views and completions
 *
 * @example
 * const { trackSlideView, trackCompletion } = useOnboardingAnalytics();
 *
 * // In slide component
 * trackSlideView("slide_1", "Masuk ke Dunia Tanpa Batas");
 *
 * // On completion
 * trackCompletion();
 */
export const useOnboardingAnalytics = () => {
  const trackSlideView = (slideId: string, slideTitle: string) => {
    // TODO: Integrate with your analytics service
    console.log(`[Analytics] Slide viewed: ${slideId} - ${slideTitle}`);
  };

  const trackCompletion = () => {
    // TODO: Integrate with your analytics service
    console.log("[Analytics] Onboarding completed");
  };

  const trackSkip = (fromSlideId: string) => {
    // TODO: Integrate with your analytics service
    console.log(`[Analytics] Onboarding skipped from slide: ${fromSlideId}`);
  };

  return {
    trackSlideView,
    trackCompletion,
    trackSkip,
  };
};

/**
 * Hook to manage onboarding animation state
 *
 * @example
 * const { animationProgress, isAnimating } = useOnboardingAnimation();
 */
export const useOnboardingAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress] = useState(
    new (require("react-native").Animated.Value)(0),
  );

  const triggerAnimation = (toValue: number = 1) => {
    setIsAnimating(true);
    require("react-native")
      .Animated.timing(animationProgress, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      })
      .start(() => {
        setIsAnimating(false);
      });
  };

  return {
    animationProgress,
    isAnimating,
    triggerAnimation,
  };
};
