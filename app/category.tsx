import { Image, ImageSource } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategorySelect } from "./constants/category";
import { Colors, Typography } from "./constants/design-tokens";
import useCategory from "./hooks/use-category";

const Category = () => {
  const { categorySelect, handlePressCategory, handleContinue } = useCategory();
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: Typography.fontFamily.bold,
            fontSize: 24,
            marginTop: 32,
          }}
        >
          Let's select your interests.
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: Typography.fontFamily.medium,
            fontSize: 16,
            color: "gray",
          }}
        >
          Please select 4 or more to proceed
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginTop: 32,
            paddingHorizontal: 12,
          }}
        >
          {categorySelect.map((item, idx) => (
            <CategoryItem
              key={idx}
              handlePressCategory={handlePressCategory}
              item={item}
            />
          ))}
        </View>
      </ScrollView>
      {categorySelect.filter((val) => val.centrang === true).length >= 4 && (
        <ContinueButton handleContinue={handleContinue} />
      )}
    </SafeAreaView>
  );
};

type ContinueButtonProps = {
  handleContinue: () => void;
};

const ContinueButton: FC<ContinueButtonProps> = ({ handleContinue }) => {
  return (
    <LinearGradient
      colors={["transparent", "rgba(255,255,255,0.6)", "#fff"]}
      locations={[0, 0.4, 1]}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        padding: 16,
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          borderRadius: 12,
          marginBottom: 12,
          shadowColor: "#c183e7",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.3,
          shadowRadius: 16,
          elevation: 12,
        }}
        onPress={handleContinue}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontFamily: Typography.fontFamily.medium,
            includeFontPadding: false,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

type CategoryItemProps = {
  handlePressCategory: (id: number) => void;
  item: CategorySelect;
};

const CategoryItem: FC<CategoryItemProps> = ({ handlePressCategory, item }) => {
  return (
    <TouchableOpacity
      style={{
        width: 120,
        marginBottom: 12,
        borderRadius: 20,
        overflow: "hidden",
      }}
      onPress={() => handlePressCategory(item.id)}
    >
      <View style={{ width: "100%", height: 120, position: "relative" }}>
        <Image
          source={item.imgSource as ImageSource}
          style={{ width: "100%", height: 120, borderRadius: 20 }}
        />
        {item.centrang && (
          <Image
            source={require("../assets/images/icons/check.png")}
            style={{
              width: 28,
              height: 28,
              position: "absolute",
              top: 5,
              right: 5,
            }}
          />
        )}
      </View>
      <Text
        style={{
          marginTop: 4,
          fontFamily: Typography.fontFamily.regular,
          fontSize: 16,
          textAlign: "center",
          color: item.centrang ? "green" : "black",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
