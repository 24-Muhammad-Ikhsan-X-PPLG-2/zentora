import { useLocalSearchParams } from "expo-router";
import { FlatList, View } from "react-native";
import ActionButton from "../features/preview/components/ActionButton";
import CardChapter from "../features/preview/components/CardChapter";
import Genres from "../features/preview/components/Genres";
import Hero from "../features/preview/components/Hero";
import LoadMore from "../features/preview/components/LoadMore";
import Sipnosis from "../features/preview/components/Sipnosis";
import SkeletonCard from "../features/preview/components/SkeletonCard";
import TabSelect from "../features/preview/components/TabSelect";
import useChapters from "../features/preview/hooks/useChapters";
import useManga from "../features/preview/hooks/useManga";
import useMangaDetail from "../features/preview/hooks/useMangaDetail";
import { pickBestChapters, skeletonData } from "../lib/helper";
import { ChaptersDataType } from "../types/chapters";

const Preview = () => {
  const { manga_id }: { manga_id: string } = useLocalSearchParams();
  const { manga } = useManga(manga_id);
  const {
    chapters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useChapters(manga_id);
  const { coverImage, genres, mangaka, title } = useMangaDetail(manga);

  return (
    <>
      <FlatList
        data={
          isLoading
            ? skeletonData
            : chapters?.pages.flatMap((chapters) =>
                pickBestChapters(chapters!.data),
              )
        }
        keyExtractor={(item) => item!.id}
        renderItem={({ item }) => {
          return (
            <>
              {isLoading ? (
                <SkeletonCard />
              ) : (
                <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
                  <CardChapter
                    coverImgUrl={coverImage}
                    chapter={item as ChaptersDataType}
                  />
                </View>
              )}
            </>
          );
        }}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListHeaderComponent={
          <>
            <Hero
              status={manga?.attributes.status ?? ""}
              chapters={manga?.attributes.lastChapter ?? "0"}
              imageUrl={coverImage}
              title={title ?? "Loading..."}
              mangaka1={mangaka?.[0].attributes?.name ?? "Loading..."}
              mangaka2={mangaka?.[1].attributes?.name ?? "Loading..."}
            />
            <Genres tags={genres} />
            {/* Sinopsis */}
            <Sipnosis sinopsis={manga?.attributes.description.en ?? null} />
            {/* Select */}
            <TabSelect />
          </>
        }
        ListFooterComponent={
          <LoadMore
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        }
      />
      <ActionButton />
    </>
  );
};

export default Preview;
