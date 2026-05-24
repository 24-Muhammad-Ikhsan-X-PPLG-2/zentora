import { Typography } from "@/app/constants/design-tokens";
import { getCoverImage, getGenresManga, getTitleManga } from "@/app/lib/helper";
import { MangaData } from "@/app/types/mangas";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { FC } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

type CardMangaProps = {
  manga: MangaData;
};

const { width } = Dimensions.get("window");

const itemWidth = (width - 48) / 2;

const CardManga: FC<CardMangaProps> = ({ manga }) => {
  const title = getTitleManga(manga);
  const genres = getGenresManga(manga);
  const coverImage = getCoverImage(manga);
  return (
    <TouchableOpacity
      style={{ width: itemWidth }}
      onPress={() => router.push(`/preview/${manga.id}`)}
    >
      <Image
        source={{
          uri: coverImage,
        }}
        placeholder={{ blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj" }}
        transition={300}
        contentFit="cover"
        contentPosition={"center"}
        cachePolicy={"disk"}
        style={{ width: itemWidth, height: 300, borderRadius: 10 }}
      />
      <Text
        style={{
          fontFamily: Typography.fontFamily.regular,
          includeFontPadding: false,
          marginTop: 6,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            color: "gray",
          }}
        >
          {genres?.[0].attributes.name.en}
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: "gray",
            borderRadius: 999,
          }}
        ></View>
        <Text
          style={{
            fontFamily: Typography.fontFamily.regular,
            includeFontPadding: false,
            color: "gray",
          }}
        >
          {genres?.[1].attributes.name.en}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardManga;
