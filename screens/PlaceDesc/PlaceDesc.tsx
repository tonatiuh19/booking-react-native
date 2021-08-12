import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarrouselCard from "../../components/CarrouselCard/CarrouselCard";
import FloatHeader from "../../components/FloatHeader/FloatHeader";
import FooterButtons from "../../components/FooterButtons/FooterButtons";
import Loading from "../../components/Loading/Loading";
import PlaceDescription from "../../components/PlaceDescription/PlaceDescription";
import { page } from "./PlaceDesc.style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlaceDesc = (props: any) => {
  const { item } = props.route.params;
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleChangeGoingBack = () => {
    navigation.goBack();
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRequest = () => {
    getData().then((resp) => {
      if (resp !== true) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Tablero" }],
        });
      } else {
        navigation.navigate("Request", {
          item: item,
        });
      }
    });
  };

  return (
    <View style={page.container}>
      {loading ? (
        <View style={page.containerLoading}>
          <Loading></Loading>
        </View>
      ) : (
        <View style={page.contentContainer}>
          <FloatHeader onChange={handleChangeGoingBack}></FloatHeader>
          <View style={page.carrousel}>
            <CarrouselCard
              images={item.images}
              bordingStyle={false}
            ></CarrouselCard>
          </View>
          <PlaceDescription
            description={item.placeDescription}
            title={item.title}
            city={item.locationCity}
            state={item.locationState}
          ></PlaceDescription>
          <View style={page.footer}>
            <FooterButtons
              price={item.price}
              onChange={handleRequest}
            ></FooterButtons>
          </View>
        </View>
      )}
    </View>
  );
};

export default PlaceDesc;
