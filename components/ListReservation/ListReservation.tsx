import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { page } from "./ListReservation.style";
import moment from "moment";
import "moment/min/locales";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const deviceLocale = "es";

const ListReservation = (props: any) => {
  const renderButtonsComplete = (complete: number) => {
    if (complete === 0) {
      return (
        <View style={page.containerButtonsRow}>
          <TouchableOpacity style={page.buttonSectionPending}>
            <Text style={page.buttonSectionTitlePending}>
              <FontAwesome name="check-circle" size={10} /> Por llegar
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (complete === 1) {
      return (
        <View style={page.containerButtonsRow}>
          <TouchableOpacity style={page.buttonSectionComplete}>
            <Text style={page.buttonSectionTitleComplete}>
              <FontAwesome name="check-circle" size={10} /> Completo
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (complete === 2) {
      return (
        <View style={page.containerButtonsRow}>
          <TouchableOpacity style={page.buttonSectionCancelled}>
            <Text style={page.buttonSectionTitleCancelled}>
              <FontAwesome name="check-circle" size={10} /> Cancelado
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={page.container}>
      <Text style={page.tagTitle}>{props.itemPlace.name}</Text>
      <View style={page.containerText}>
        <Text style={page.containerTitle}>
          <MaterialIcons name="place" size={13} color="black" />
          &nbsp;{props.location}
        </Text>
        <Text style={page.containerDate}>
          {moment(props.date).startOf("day").fromNow().charAt(0).toUpperCase() +
            moment(props.date).startOf("day").fromNow().slice(1)}
        </Text>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.containerText}>
        <Text style={page.containerTitle}></Text>
        <View style={page.containerButtons}>
          {renderButtonsComplete(props.itemPlace.complete)}
        </View>
      </View>
    </View>
  );
};

export default ListReservation;
