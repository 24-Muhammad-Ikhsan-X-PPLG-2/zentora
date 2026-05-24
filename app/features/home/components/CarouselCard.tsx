import { Image } from "expo-image";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Dots from "./Dots";

const { width } = Dimensions.get("window");

const banners = [
  require("@/assets/images/banner/banner-1.webp"),
  require("@/assets/images/banner/banner-2.jpg"),
  require("@/assets/images/banner/banner-3.webp"),
];

const CarouselCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View>
      <Carousel
        loop
        autoPlay
        width={width}
        height={220}
        data={banners}
        scrollAnimationDuration={1200}
        autoPlayInterval={5000}
        mode="parallax"
        onSnapToItem={(idx) => setActiveIndex(idx)}
        modeConfig={{
          parallaxScrollingOffset: 5,
          parallaxScrollingScale: 0.92,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                backgroundColor: "white",
                borderRadius: 28,
              }}
            >
              <Image
                source={item}
                style={{
                  width: width * 0.9,
                  height: 210,
                  borderRadius: 28,
                }}
                contentFit="cover"
              />
            </View>
          </View>
        )}
      />
      <Dots activeIndex={activeIndex} banners={banners} />
    </View>
  );
};

export default CarouselCard;
