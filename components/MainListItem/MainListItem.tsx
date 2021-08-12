import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./MainListItem.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { decode_utf8, formatter } from "../../assets/resources/Decode/Decode";

const MainListItem = (props: any) => {
  const renderTypeIcon = (type: number) => {
    if (type === 1) {
      return <FontAwesome5 name="hotel" size={18} />;
    } else if (type === 2) {
      return <MaterialIcons name="apartment" size={18} />;
    } else if (type === 3) {
      return <MaterialIcons name="house" size={18} />;
    }
  };

  return (
    <View style={page.container}>
      <View style={page.containerText}>
        <Text style={page.containerTitle}>
          {renderTypeIcon(props.spaceType)}
          &nbsp;
          {decode_utf8(props.title)}
        </Text>
        <Text style={page.containerPrice}>
          {formatter.format(Number(props.price))}
        </Text>
      </View>
      <View>
        <Text style={page.containerPlace}>
          <MaterialIcons name="place" size={14} color="black" />
          {decode_utf8(props.place)}
        </Text>
      </View>
    </View>
  );
};

export default MainListItem;
