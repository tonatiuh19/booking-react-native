import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { page } from "./PlaceDescription.style";
import RenderHtml from "react-native-render-html";
import { decode_utf8 } from "../../assets/resources/Decode/Decode";
import { MaterialIcons } from "@expo/vector-icons";

const PlaceDescription = (props: any) => {
  const source = {
    html: decode_utf8(props.description),
  };
  return (
    <ScrollView style={page.container}>
      <View>
        <Text style={page.itemTitle}>{decode_utf8(props.title)}</Text>
        <Text style={page.itemPlace}>
          <MaterialIcons name="place" size={14} />
          {decode_utf8(props.city + ", " + props.state)}
        </Text>
      </View>
      <View style={page.itemSeparatorRule} />
      <View style={page.itemSeparator}>
        <RenderHtml source={source} />
      </View>
    </ScrollView>
  );
};

export default PlaceDescription;
