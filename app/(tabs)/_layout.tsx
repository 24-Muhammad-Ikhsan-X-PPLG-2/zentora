import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import { Colors } from "../constants/design-tokens";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
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
