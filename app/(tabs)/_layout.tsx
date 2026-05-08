import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import { Colors } from "../constants/design-tokens";
import { useTheme } from "../providers/theme-context";

export default function RootLayout() {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === "light" ? "white" : "#303030",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: {
            color: Colors.primary,
          },
          tabBarIcon: () => <Home size={32} color={Colors.primary} />,
        }}
      />
    </Tabs>
  );
}
