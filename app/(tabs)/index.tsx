import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategorySelect } from "../constants/category";
import { Colors, Typography } from "../constants/design-tokens";
import { useOnBoarding } from "../providers/on-boarding-context";

const Main = () => {
  const [data, setData] = useState<CategorySelect[]>([]);
  const { reset } = useOnBoarding();
  useEffect(() => {
    (async () => {
      const categoriesFav = await AsyncStorage.getItem("categories-fav");
      if (!categoriesFav) return;
      const newData = JSON.parse(categoriesFav);
      setData(newData);
    })();
  }, []);
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 12 }}>
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "rgb(224, 224, 224)",
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
        onPress={reset}
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
      {data ? (
        data.map((item) => <Text key={item.id}>{item.title}</Text>)
      ) : (
        <Text>Data tidak ada</Text>
      )}
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default Main;
