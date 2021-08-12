import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { formatter } from "../../assets/resources/Decode/Decode";
import { page } from "./FooterButtons.style";
import { Ionicons } from "@expo/vector-icons";

const FooterButtons = (props: any) => {
  const handleRquest = () => {
    props.onChange();
  };

  return (
    <View style={page.container}>
      <View style={page.splitContainerFFirst}>
        <View style={page.priceContainer}>
          <Text style={page.priceTitle}>
            {formatter.format(Number(props.price))}
          </Text>
        </View>
      </View>
      <View style={page.splitContainerFSecond}>
        <View style={page.reserveButtonContainer}>
          <TouchableOpacity
            style={page.reserveButton}
            onPress={() => handleRquest()}
          >
            <Text style={page.reserveButtonTitle}>
              Solicitar acceso{" "}
              <Ionicons name="md-arrow-forward-circle" size={24} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FooterButtons;
