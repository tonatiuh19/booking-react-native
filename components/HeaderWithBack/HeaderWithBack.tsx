import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackButton from "../BackButton/BackButton";
import { page } from "./HeaderWithBack.style";

const HeaderWithBack = (props: any) => {
  const goingBack = () => {
    props.onChange();
  };

  return (
    <View style={page.container}>
      <View style={page.containerButton}>
        <TouchableOpacity onPress={() => goingBack()}>
          <BackButton></BackButton>
        </TouchableOpacity>
      </View>
      <View style={page.containerTittle}>
        <Text style={page.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default HeaderWithBack;
