import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./ActionButton.style";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ActionButton = (props: any) => {
  const renderIcon = (type: string) => {
    if (type === "plus-square") {
      return <FontAwesome name="plus-square" size={14} color="black" />;
    } else if (type === "lock") {
      return <FontAwesome5 name="lock" size={14} color="black" />;
    }
  };

  return (
    <View style={page.container}>
      {props.bold ? (
        <Text style={page.buttonTitleBold}>
          {renderIcon(props.iconName)} {props.text}
        </Text>
      ) : (
        <Text style={page.buttonTitle}>
          {renderIcon(props.iconName)} {props.text}
        </Text>
      )}
    </View>
  );
};

export default ActionButton;
