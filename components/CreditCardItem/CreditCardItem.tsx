import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./CreditCardItem.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CreditCardItem = (props: any) => {
  const renderTypeIcon = (type: string) => {
    if (type === "visa") {
      return <FontAwesome5 name="cc-visa" size={18} />;
    } else if (type === "mastercard") {
      return <FontAwesome5 name="cc-mastercard" size={18} />;
    } else if (type === "amex") {
      return <FontAwesome5 name="cc-amex" size={18} color="black" />;
    }
  };

  return (
    <View style={page.container}>
      <View style={page.splitContainerFirst}>
        <Text style={page.cardText}>
          {renderTypeIcon(props.type)} {props.card}
        </Text>
      </View>
      <View style={page.splitContainerSecond}>
        {props.active === 1 ? (
          <Ionicons name="ios-checkbox" size={24} color="#547d2d" />
        ) : (
          <Ionicons name="square-outline" size={24} color="black" />
        )}
      </View>
    </View>
  );
};

export default CreditCardItem;
