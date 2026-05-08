import { FC } from "react";
import { View } from "react-native";
import Dot from "./Dot";

type DotsProps = {
  activeIndex: number;
  banners: any[];
};

const Dots: FC<DotsProps> = ({ activeIndex, banners }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 12,
        gap: 8,
      }}
    >
      {banners.map((_, idx) => {
        const isActive = activeIndex === idx;
        return <Dot key={idx} isActive={isActive} />;
      })}
    </View>
  );
};

export default Dots;
