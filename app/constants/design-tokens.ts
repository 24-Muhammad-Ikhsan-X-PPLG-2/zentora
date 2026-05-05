/**
 * Zentora Design System
 * Colors, typography, spacing, and component styles
 */

export const Colors = {
  // Primary
  primary: "#c183e7",
  primaryLight: "#d4a5f1",
  primaryDark: "#9b5fb3",

  // Background
  backgroundDark: "#0f0f14",
  backgroundDarker: "#0a0a0e",
  surfaceLight: "rgba(255, 255, 255, 0.05)",
  surfaceAlt: "rgba(193, 131, 231, 0.1)",

  // Text
  textPrimary: "#FFFFFF",
  textSecondary: "#CCCCCC",
  textTertiary: "#999999",

  // UI
  border: "rgba(255, 255, 255, 0.1)",
  borderAlt: "rgba(193, 131, 231, 0.3)",
  divider: "rgba(255, 255, 255, 0.08)",

  // Semantic
  success: "#4CAF50",
  warning: "#FFC107",
  error: "#F44336",
  info: "#2196F3",

  // Gradients
  gradientOverlay: ["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.85)"],
  gradientPrimary: ["#c183e7", "#9b5fb3"],
};

export const Typography = {
  // Font Families (using system fonts for Expo)
  fontFamily: {
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semibold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
    extraBold: "Poppins_800ExtraBold",
  },

  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 28,
    "4xl": 32,
    "5xl": 36,
  },

  // Font Weights
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.2,
    wider: 0.5,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
};

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  full: 9999,
};

export const Shadows = {
  sm: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: "#c183e7",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  glow: {
    shadowColor: "#c183e7",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const Animation = {
  duration: {
    fast: 100,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
};

export const Components = {
  button: {
    height: 56,
    heightSmall: 44,
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.full,
  },
  input: {
    height: 48,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  card: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
};
