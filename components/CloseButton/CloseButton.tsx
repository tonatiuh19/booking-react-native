import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./CloseButton.style";
import { Entypo } from "@expo/vector-icons";

const CloseButton = () => {
  return (
    <View data-testid="BackButton" style={page.container}>
      <Text style={page.title}>
        <Entypo name="circle-with-cross" size={25} />
      </Text>
    </View>
  );
};

export default CloseButton;
