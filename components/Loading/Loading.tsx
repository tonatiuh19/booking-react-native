import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page, overlayColor } from "./Loading.style";
import AnimatedLoader from "react-native-animated-loader";

const Loading = () => {
  return (
    <View style={page.container}>
      <AnimatedLoader
        visible={true}
        overlayColor={overlayColor}
        source={require("../../assets/images/loader.json")}
        animationStyle={page.lottie}
        speed={1}
      />
    </View>
  );
};

export default Loading;
