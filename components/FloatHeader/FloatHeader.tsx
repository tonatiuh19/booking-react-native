import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { page } from "./FloatHeader.style";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const FloatHeader = (props: any) => {
  const goingBack = () => {
    props.onChange();
  };
  const sharePlace = () => {};
  const lovePlace = () => {};

  return (
    <View style={page.container}>
      <View style={page.splitContainer}>
        <View style={page.splitContainerFirst}>
          <TouchableOpacity style={page.goingBack} onPress={() => goingBack()}>
            <Text>
              <FontAwesome name="close" size={20} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={page.splitContainerSecond}>
          <View style={page.buttonsSecondary}>
            <TouchableOpacity
              style={page.goingBack}
              onPress={() => sharePlace()}
            >
              <Text>
                <MaterialIcons name="ios-share" size={20} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={page.goingBack}
              onPress={() => lovePlace()}
            >
              <Text>
                <FontAwesome name="heart" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FloatHeader;
