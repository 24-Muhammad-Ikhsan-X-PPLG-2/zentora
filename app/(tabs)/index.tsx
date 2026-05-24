import { StatusBar } from "expo-status-bar";
import { Funnel } from "lucide-react-native";
import { FC, useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../constants/design-tokens";
import CardManga from "../features/home/components/CardManga";
import CarouselCard from "../features/home/components/CarouselCard";
import Header from "../features/home/components/Header";
import LoadMore from "../features/home/components/LoadMore";
import SkeletonCard from "../features/home/components/SkeletonCard";
import useMangas from "../features/hooks/useMangas";
import getBgColor from "../lib/getBgColor";
import { skeletonData } from "../lib/helper";
import { useTheme } from "../providers/theme-context";
import { MangaData } from "../types/mangas";

const Main = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { theme } = useTheme();
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    mangas,
    refetch,
  } = useMangas();
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: getBgColor(theme), flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <FlatList
          data={
            !isLoading
              ? mangas?.pages.flatMap((page) => page.data)
              : skeletonData
          }
          scrollEnabled
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 30,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginBottom: 16,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              {isLoading ? (
                <SkeletonCard />
              ) : (
                <CardManga manga={item as MangaData} />
              )}
            </>
          )}
          ListHeaderComponent={
            <>
              <CarouselCard />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                  marginBottom: 16,
                }}
              >
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 18,
                    gap: 10,
                    flexDirection: "row",
                  }}
                >
                  {["Popular", "Action", "Comedy", "Romance", "Harem"].map(
                    (item) => (
                      <CardCategory
                        key={item}
                        text={item}
                        active={item === "Popular"}
                      />
                    ),
                  )}
                </ScrollView>

                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderRadius: 999,
                    marginRight: 18,
                    backgroundColor: "white",
                  }}
                >
                  <Funnel size={18} color={"black"} />
                </TouchableOpacity>
              </View>
            </>
          }
          ListFooterComponent={
            <LoadMore
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isPending={isFetchingNextPage}
            />
          }
        />
      </View>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </SafeAreaView>
  );
};

type CardCategoryProp = {
  text?: string;
  active?: boolean;
};

export const CardCategory: FC<CardCategoryProp> = ({
  text = "Category",
  active = false,
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderRadius: 999,
        backgroundColor: active ? "#333333" : "white",
      }}
    >
      <Text
        style={{
          fontFamily: Typography.fontFamily.regular,
          includeFontPadding: false,
          color: active ? "white" : "black",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Main;
