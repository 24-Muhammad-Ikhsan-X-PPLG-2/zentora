import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 12,
            paddingHorizontal: 18,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 9,
              borderWidth: 1,
              borderRadius: 999,
            }}
          >
            <ArrowLeft size={20} color="black" />
          </View>

          <View
            style={{
              borderWidth: 1,
              flex: 1,
              paddingHorizontal: 12,
              borderRadius: 999,
            }}
          >
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search..."
              style={{
                flex: 1,
              }}
              placeholderTextColor="#888"
              cursorColor="black"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Search;
