import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { page } from "./CarrouselReservations.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import "moment/min/locales";
import CarrouselCard from "../CarrouselCard/CarrouselCard";

const deviceLocale = "es";

const CarrouselReservations = (props: any) => {
  moment.locale(deviceLocale);

  const handleUpdate = (complete: number) => {
    props.onChange({
      id: props.id,
      complete: complete,
    });
  };

  const renderTypeIcon = (type: number) => {
    if (type === 1) {
      return <FontAwesome5 name="hotel" size={18} />;
    } else if (type === 2) {
      return <MaterialIcons name="apartment" size={18} />;
    } else if (type === 3) {
      return <MaterialIcons name="house" size={18} />;
    }
  };

  const renderButtonsComplete = (complete: number) => {
    if (complete === 0) {
      return (
        <View style={page.containerButtonsRow}>
          <TouchableOpacity
            style={page.buttonSection}
            onPress={() => handleUpdate(1)}
          >
            <Text style={page.buttonSectionTitle}>
              <FontAwesome name="check-circle" size={10} /> Check In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.buttonSectionCancel}>
            <Text
              style={page.buttonSectionTitle}
              onPress={() => handleUpdate(2)}
            >
              <Entypo name="circle-with-cross" size={10} /> Cancelar
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
      <Text style={page.tagTitle}>
        {renderTypeIcon(props.type)} {props.title}
      </Text>
      <View style={page.containerCarousel}>
        <CarrouselCard
          images={props.images}
          bordingStyle={true}
        ></CarrouselCard>
      </View>
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
          {renderButtonsComplete(props.complete)}
        </View>
      </View>
    </View>
  );
};

export default CarrouselReservations;
