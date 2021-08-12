import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { page } from "./ListHostReservations.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListHostReservations = (props: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HostReservationsDesc", { place: props });
      }}
    >
      <View style={page.container}>
        <View>
          <Text>
            <Ionicons name="calendar" size={17} color="black" />
          </Text>
        </View>
        <View>
          <Text style={page.buttonTitle}>{props.item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListHostReservations;
