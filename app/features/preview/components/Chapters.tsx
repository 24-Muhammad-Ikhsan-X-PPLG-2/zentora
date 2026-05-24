import { Typography } from "@/app/constants/design-tokens";
import { pickBestChapters } from "@/app/lib/helper";
import { ChaptersDataType } from "@/app/types/chapters";
import React, { FC } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import CardChapter from "./CardChapter";

type ChaptersProps = {
  chapters: ChaptersDataType[] | null;
  coverImgUrl: string;
  onLoadMore?: () => void;
  isLoading: boolean;
  hasNextPage: boolean;
};

const { width } = Dimensions.get("window");

const Chapters: FC<ChaptersProps> = ({
  chapters,
  coverImgUrl,
  onLoadMore = () => {},
  isLoading,
  hasNextPage,
}) => {
  const chaptersBestPick = pickBestChapters(chapters ?? []);
  return (
    <>
      {chaptersBestPick?.map((item, idx) => {
        const no = ++idx;
        return (
          <CardChapter coverImgUrl={coverImgUrl} chapter={item} key={idx} />
        );
      })}
      <View style={{ width, justifyContent: "center", alignItems: "center" }}>
        {hasNextPage && (
          <TouchableOpacity
            style={{
              paddingHorizontal: 18,
              paddingVertical: 8,
              borderWidth: 1,
            }}
            disabled={isLoading}
            onPress={onLoadMore}
          >
            <Text
              style={{
                fontFamily: Typography.fontFamily.regular,
                includeFontPadding: false,
              }}
            >
              {isLoading ? "Loading..." : "Load more..."}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Chapters;
