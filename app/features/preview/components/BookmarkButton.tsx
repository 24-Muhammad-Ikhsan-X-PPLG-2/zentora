import { Bookmark } from "lucide-react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handlePress = () => setIsBookmarked((prev) => !prev);

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        zIndex: 3,
        width: 45,
        height: 45,
        top: 40,
        right: 25,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handlePress}
    >
      <Bookmark
        size={28}
        color={"white"}
        fill={isBookmarked ? "white" : "transparent"}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
