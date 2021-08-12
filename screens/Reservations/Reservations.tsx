import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarrouselReservations from "../../components/CarrouselReservations/CarrouselReservations";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { getReservations, editReservation } from "../../services/api.service";
import { page } from "./Reservations.style";
import AwesomeAlert from "react-native-awesome-alerts";

const Reservations = (props: any) => {
  const [places, setPlaces] = useState<any>([]);
  const [alertComplete, setalertComplete] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");
  const [completeUpdate, setCompleteUpdate] = useState(0);

  const handleBack = () => {
    props.navigation.goBack(null);
  };

  const changeStatusReservation = () => {
    editReservation(idUpdate, completeUpdate).then((resp) => {
      //console.log(resp);
      if (resp === 1) {
        getReservations(props.route.params.id_user).then((item: any) => {
          setPlaces(item);
          setalertComplete(false);
        });
      }
    });
  };

  const showAlertComplete = () => {};

  const handleUpdate = (item: any) => {
    setalertComplete(true);
    //console.log(item);
    setIdUpdate(item.id);
    setCompleteUpdate(item.complete);
  };

  const dismissAlertComplete = () => {};

  useEffect(() => {
    getReservations(props.route.params.id_user).then((item: any) => {
      setPlaces(item);
    });
  }, []);
  return (
    <View style={page.container}>
      <AwesomeAlert
        show={alertComplete}
        showProgress={false}
        title=""
        message="¿Estas Seguro?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No"
        confirmText="Si"
        confirmButtonColor="#547d2d"
        cancelButtonColor="#DD6B55"
        onCancelPressed={() => {
          setalertComplete(false);
        }}
        onConfirmPressed={() => {
          changeStatusReservation();
        }}
      />
      <View style={page.titleSection}>
        <HeaderWithBack
          title="Mis reservas"
          onChange={handleBack}
        ></HeaderWithBack>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <ScrollView style={page.sectionContainer}>
        {places.map((item, index) => {
          return (
            <CarrouselReservations
              id={item.reservation.id}
              key={index}
              title={item.place.title}
              location={
                item.place.locationCity + ", " + item.place.locationState
              }
              date={item.reservation.date_check_in}
              images={item.place.images}
              type={item.place.type}
              complete={item.reservation.complete}
              onChange={handleUpdate}
            ></CarrouselReservations>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Reservations;
