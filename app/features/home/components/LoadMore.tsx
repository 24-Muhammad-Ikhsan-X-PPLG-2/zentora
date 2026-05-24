import { Typography } from "@/app/constants/design-tokens";
import React, { FC } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

type LoadMoreProps = {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isPending: boolean;
};

const { width } = Dimensions.get("window");

const LoadMore: FC<LoadMoreProps> = ({
  fetchNextPage,
  hasNextPage,
  isPending,
}) => {
  return (
    <View style={{ width, justifyContent: "center", alignItems: "center" }}>
      {hasNextPage && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderWidth: 1,
          }}
          onPress={() => {
            fetchNextPage();
          }}
          disabled={!!isPending}
        >
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
            }}
          >
            {!!isPending ? "Loading..." : "Load more..."}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoadMore;
