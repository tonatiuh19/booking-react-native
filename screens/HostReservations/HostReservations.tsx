import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { page } from "./HostReservations.style";
import { getPlacesHost } from "../../services/api.service";
import ListHostReservations from "../../components/ListHostReservations/ListHostReservations";

const HostReservations = (props: any) => {
  const [reservations, setReservations] = useState<any>([]);

  const handleBack = () => {
    props.navigation.goBack(null);
  };

  useEffect(() => {
    getPlacesHost(props.route.params.id_user).then((resp) => {
      //console.log(resp);
      setReservations(resp);
    });
  }, []);

  return (
    <View style={page.container}>
      <View style={page.titleSection}>
        <HeaderWithBack
          title="Mis huespedes"
          onChange={handleBack}
        ></HeaderWithBack>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <ScrollView style={page.sectionContainer}>
        {reservations.map((resp) => {
          return <ListHostReservations item={resp}></ListHostReservations>;
        })}
      </ScrollView>
    </View>
  );
};

export default HostReservations;
