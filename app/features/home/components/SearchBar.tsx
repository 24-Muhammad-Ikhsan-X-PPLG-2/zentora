import { Typography } from "@/app/constants/design-tokens";
import { useTheme } from "@/app/providers/theme-context";
import { Search } from "lucide-react-native";
import { Text, View } from "react-native";

const SearchBar = () => {
  const { theme } = useTheme();
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 12, marginBottom: 12 }}>
      <View
        style={[
          {
            height: 50,
            width: "100%",
            backgroundColor:
              theme === "light" ? "rgb(224, 224, 224)" : "rgb(80, 80, 80)",
            borderRadius: 32,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        <Search size={28} color={theme === "light" ? "black" : "white"} />
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
  );
};

export default SearchBar;
