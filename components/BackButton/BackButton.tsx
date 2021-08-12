import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./BackButton.style";
import { Entypo } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <View data-testid="BackButton" style={page.container}>
      <Text style={page.title}>
        <Entypo name="arrow-with-circle-left" size={25} />
      </Text>
    </View>
  );
};

export default BackButton;
