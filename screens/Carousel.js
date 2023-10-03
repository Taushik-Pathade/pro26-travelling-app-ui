import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";
import { View, Text } from "react-native";
import React from "react";

import { SliderBox } from "react-native-image-slider-box";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  return (
    <View className="m-3 shadow-xl shadow-black">
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#16a085"}
        inactiveDotColor={"gray"}
        ImageComponentStyle={{ width: "80%" }}
        className="items-center w-[95%]  h-72 rounded-3xl"
      />
    </View>
  );
};

export default Carousel;
