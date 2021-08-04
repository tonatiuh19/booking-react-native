import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./Loading.style";
import AnimatedLoader from "react-native-animated-loader";

const Loading = () => {
  return (
    <View data-testid="Loading" style={page.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0)"
        source={require("../../assets/images/loader.json")}
        animationStyle={page.lottie}
        speed={1}
      />
    </View>
  );
};

export default Loading;
