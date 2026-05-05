import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
