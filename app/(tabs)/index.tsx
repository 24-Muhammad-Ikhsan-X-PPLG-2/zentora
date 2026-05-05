import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Search } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Typography } from "../constants/design-tokens";

const Main = () => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 12 }}>
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "rgb(209, 209, 209)",
            borderRadius: 32,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Search size={28} color={"black"} />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
              color: "gray",
            }}
          >
            Search...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          marginTop: 50,
          marginLeft: 20,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
        onPress={async () => {
          await AsyncStorage.multiRemove(["setup", "categories-fav"]);
          router.reload();
        }}
      >
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            color: "white",
            fontSize: 18,
          }}
        >
          Reset
        </Text>
      </TouchableOpacity>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default Main;
