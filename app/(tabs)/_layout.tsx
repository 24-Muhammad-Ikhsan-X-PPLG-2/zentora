import { Tabs } from "expo-router";
import { Book, House, User } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { Colors, Typography } from "../constants/design-tokens";
import getBgColor from "../lib/getBgColor";
import { useTheme } from "../providers/theme-context";

export default function RootLayout() {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: getBgColor(theme),
        },
      }}
    >
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarLabelStyle: styles.labelStyle,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ focused }) => (
            <Book size={32} color={focused ? Colors.primary : "grey"} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: styles.labelStyle,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ focused }) => (
            <House size={32} color={focused ? Colors.primary : "grey"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabelStyle: styles.labelStyle,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ focused }) => (
            <User size={32} color={focused ? Colors.primary : "grey"} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: Typography.fontFamily.regular,
    includeFontPadding: false,
    fontSize: 14,
  },
  labelStyleHover: {
    color: Colors.primary,
  },
});
