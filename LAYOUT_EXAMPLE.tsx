/**
 * Example Root Layout with Onboarding Integration
 *
 * This file demonstrates how to integrate the onboarding screen
 * with your main app navigation.
 *
 * Replace your current app/_layout.tsx with this structure
 */

import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useOnboarding } from "./hooks/use-onboarding";
import OnboardingScreen from "./screens/onboarding-screen";

export default function RootLayout() {
  const { showOnboarding, isLoading, completeOnboarding } = useOnboarding({
    version: "1.0",
  });

  useEffect(() => {
    // You can add initialization logic here
    // E.g., load user settings, check authentication, etc.
    console.log("App initializing...");
  }, []);

  if (isLoading) {
    // Return null or a custom splash screen
    // The app will wait for onboarding status to be determined
    return null;
  }

  if (showOnboarding) {
    return (
      <SafeAreaProvider>
        <OnboardingScreen onComplete={completeOnboarding} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <Stack>
        {/* Main App Navigation */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        {/* Optional: Add a settings screen where users can view onboarding again */}
        <Stack.Screen
          name="settings"
          options={{
            title: "Settings",
            headerStyle: {
              backgroundColor: "#0f0f14",
            },
            headerTintColor: "#c183e7",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

/**
 * INTEGRATION STEPS:
 *
 * 1. Install required dependencies:
 *    npx expo install @react-native-async-storage/async-storage
 *
 * 2. Replace your current app/_layout.tsx with this file
 *
 * 3. Update your package.json to include the onboarding files
 *
 * 4. Test on device to ensure navigation works smoothly
 *
 * OPTIONAL CUSTOMIZATIONS:
 *
 * - Add custom splash screen during loading
 * - Add navigation to re-show onboarding from settings
 * - Add user authentication check before showing app
 * - Track analytics events
 * - Add deep linking support
 */
