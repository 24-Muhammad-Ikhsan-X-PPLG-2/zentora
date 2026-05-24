import { Typography } from "@/app/constants/design-tokens";
import { getBgColorReverse, getTextColorReverse } from "@/app/lib/getBgColor";
import { useTheme } from "@/app/providers/theme-context";
import { Tag } from "@/app/types/manga";
import React, { FC } from "react";
import { ScrollView, Text, View } from "react-native";

type GenresProps = {
  tags: Tag[] | null;
};

const Genres: FC<GenresProps> = ({ tags }) => {
  const { theme } = useTheme();
  if (!tags) return <></>;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 20,
        paddingHorizontal: 12,
        gap: 5,
        alignSelf: "flex-start",
      }}
    >
      {tags.map((item, idx) => (
        <View
          style={{
            backgroundColor: getBgColorReverse(theme),
            height: 30,
            borderRadius: 999,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          key={idx}
        >
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
              color: getTextColorReverse(theme),
            }}
          >
            {item.attributes.name.en}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Genres;
