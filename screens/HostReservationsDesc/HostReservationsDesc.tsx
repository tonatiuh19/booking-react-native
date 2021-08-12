import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { page } from "./HostReservationsDesc.style";
import { ScrollView } from "react-native-gesture-handler";
import { getPlacesReservations } from "../../services/api.service";
import Loading from "../../components/Loading/Loading";
import { Entypo } from "@expo/vector-icons";
import ListReservation from "../../components/ListReservation/ListReservation";

const HostReservationsDesc = (props: any) => {
  const { item } = props.route.params.place;
  const [loading, setLoading] = useState(false);
  const [noReservations, setNoReservations] = useState(false);
  const [reservations, setReservations] = useState([]);

  const handleBack = () => {
    props.navigation.goBack(null);
  };

  useEffect(() => {
    setLoading(true);
    setNoReservations(false);
    getPlacesReservations(item.id)
      .then((resp) => {
        if (resp.length === 0) {
          setNoReservations(true);
        } else {
          setReservations(resp);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={page.container}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <View>
          <View style={page.titleSection}>
            <HeaderWithBack
              title={item.title}
              onChange={handleBack}
            ></HeaderWithBack>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <ScrollView style={page.sectionContainer}>
            {noReservations ? (
              <View style={page.noReservationsContainer}>
                <Text style={page.noReservationsTitle}>
                  <Entypo name="emoji-sad" color="black" size={25} /> Aun no se
                  tiene reservaciones para este lugar
                </Text>
              </View>
            ) : (
              <View>
                {reservations.map((itemPlace) => {
                  return (
                    <ListReservation
                      itemPlace={itemPlace}
                      item={item}
                    ></ListReservation>
                  );
                })}
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HostReservationsDesc;
