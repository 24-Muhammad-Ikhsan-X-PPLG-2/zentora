import { Typography } from "@/app/constants/design-tokens";
import React, { FC } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

type LoadMoreProps = {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

const LoadMore: FC<LoadMoreProps> = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <View
      style={{
        width,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
      }}
    >
      {hasNextPage && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderWidth: 1,
          }}
          disabled={isFetchingNextPage}
          onPress={() => fetchNextPage()}
        >
          <Text
            style={{
              fontFamily: Typography.fontFamily.regular,
              includeFontPadding: false,
            }}
          >
            {isFetchingNextPage ? "Loading..." : "Load more..."}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoadMore;
